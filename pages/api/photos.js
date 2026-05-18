export default async function handler(req, res) {
  try {
    const cloudName = 'dfzkslndz';
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    // Fetch images AND videos from sowchan/ folder
    const [imageRes, videoRes] = await Promise.all([
      fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
        {
          method: 'POST',
          headers: { Authorization: `Basic ${credentials}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            expression: 'asset_folder:sowchan/*',
            max_results: 500,
            with_field: ['tags', 'context', 'asset_folder'],
            sort_by: [{ created_at: 'desc' }],
          }),
        }
      ),
      fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
        {
          method: 'POST',
          headers: { Authorization: `Basic ${credentials}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            expression: 'asset_folder:sowchan/* AND resource_type:video',
            max_results: 200,
            with_field: ['tags', 'context', 'asset_folder'],
            sort_by: [{ created_at: 'desc' }],
          }),
        }
      ),
    ]);

    const imageData = await imageRes.json();
    let videoData = await videoRes.json();

    // Fallback: fetch all if sowchan/ search returns nothing
    let allResources = [...(imageData.resources || [])];

    if (allResources.length === 0) {
      const fallback = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=500&tags=true&context=true`,
        { headers: { Authorization: `Basic ${credentials}` } }
      );
      const fallbackData = await fallback.json();
      allResources = fallbackData.resources || [];
    }

    // Add videos to the list
    const videoResources = (videoData.resources || []).map(v => ({ ...v, resource_type: 'video' }));
    allResources = [...allResources, ...videoResources];

    // Filter out Cloudinary demo assets
    const excluded = ['smile', 'two-ladies', 'chair', 'sample', 'cld-sample'];
    const resources = allResources.filter(item => {
      const id = (item.public_id || '').toLowerCase();
      const folder = (item.asset_folder || '').toLowerCase();
      return !excluded.some(ex => id.includes(ex) || folder.includes(ex));
    });

    const media = resources.map((item) => {
      const context = item.context?.custom || {};
      const caption = context.caption || context.alt || context.description || '';
      const isVideo = item.resource_type === 'video' || item.format === 'mp4' || item.format === 'mov' || item.format === 'webm';

      const category =
        context.category ||
        (item.tags && item.tags[0]) ||
        getFolderCategory(item.asset_folder || item.public_id);

      // For video thumbnail use Cloudinary auto-generated thumbnail
      const thumbnail = isVideo
        ? item.secure_url.replace('/video/upload/', '/video/upload/so_0,w_800,h_600,c_fill/').replace(/\.(mp4|mov|webm|avi)$/, '.jpg')
        : null;

      return {
        src: item.secure_url,
        thumbnail,
        publicId: item.public_id,
        assetFolder: item.asset_folder || '',
        category,
        caption,
        isVideo,
        format: item.format,
        createdAt: item.created_at,
      };
    });

    media.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const categorySet = new Set(media.map(p => p.category));
    const categories = Array.from(categorySet).sort();

    res.status(200).json({ media, categories });

  } catch (error) {
    console.error('Gallery API error:', error);
    res.status(500).json({ error: 'Failed to fetch media', details: error.message });
  }
}

function getFolderCategory(folderPath) {
  if (!folderPath) return 'General';
  const parts = folderPath.split('/');
  const subParts = parts[0]?.toLowerCase() === 'sowchan' ? parts.slice(1) : parts;
  if (subParts.length === 0) return 'General';
  return subParts
    .map(p => p.trim())
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' / ');
}