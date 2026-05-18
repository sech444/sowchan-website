export default async function handler(req, res) {
  try {
    const cloudName = 'dfzkslndz';
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    // Use Search API — supports asset_folder which is what Cloudinary DAM uses
    const searchBody = {
      expression: 'asset_folder:sowchan/*',
      max_results: 500,
      with_field: ['tags', 'context', 'asset_folder'],
      sort_by: [{ created_at: 'desc' }],
    };

    let response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchBody),
      }
    );

    let data = await response.json();

    // Fallback: if search returns nothing, fetch all images
    if (!data.resources || data.resources.length === 0) {
      response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=500&tags=true&context=true`,
        { headers: { Authorization: `Basic ${credentials}` } }
      );
      data = await response.json();
    }

    // Filter out Cloudinary sample/demo images
    const excluded = ['smile', 'two-ladies', 'chair', 'sample', 'cld-sample'];
    const resources = (data.resources || []).filter(photo => {
      const id = (photo.public_id || '').toLowerCase();
      const folder = (photo.asset_folder || '').toLowerCase();
      return !excluded.some(ex => id.includes(ex) || folder.includes(ex));
    });

    const photos = resources.map((photo) => {
      const context = photo.context?.custom || {};
      const caption = context.caption || context.alt || context.description || '';

      // Use asset_folder (DAM folder path) for category
      // e.g. "sowchan/Benue Media/STAKEHOLDERS" → "Benue Media / Stakeholders"
      const category =
        context.category ||
        (photo.tags && photo.tags[0]) ||
        getFolderCategory(photo.asset_folder || photo.public_id);

      return {
        src: photo.secure_url,
        publicId: photo.public_id,
        assetFolder: photo.asset_folder || '',
        category,
        caption,
        createdAt: photo.created_at,
      };
    });

    // Build dynamic category list
    const categorySet = new Set(photos.map(p => p.category));
    const categories = Array.from(categorySet).sort();

    res.status(200).json({ photos, categories });

  } catch (error) {
    console.error('Gallery API error:', error);
    res.status(500).json({ error: 'Failed to fetch photos', details: error.message });
  }
}

/**
 * Converts asset_folder path to readable category label
 *
 * "sowchan/Benue Media/STAKEHOLDERS" → "Benue Media / Stakeholders"
 * "sowchan/Benue Media/WRO"          → "Benue Media / WRO"
 * "sowchan/Benue Media"              → "Benue Media"
 * "sowchan"                          → "General"
 */
function getFolderCategory(folderPath) {
  if (!folderPath) return 'General';

  const parts = folderPath.split('/');

  // Remove "sowchan" root prefix
  const subParts = parts[0]?.toLowerCase() === 'sowchan' ? parts.slice(1) : parts;

  if (subParts.length === 0) return 'General';

  // Capitalize each folder segment, join with " / "
  return subParts
    .map(p => p.trim())
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' / ');
}