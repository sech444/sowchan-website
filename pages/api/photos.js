export default async function handler(req, res) {
  try {
    const cloudName = 'dfzkslndz';
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    // Try sowchan/ folder first, fall back to all images if empty
    let response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?prefix=sowchan/&type=upload&max_results=500&tags=true&context=true`,
      { headers: { Authorization: `Basic ${credentials}` } }
    );

    let data = await response.json();

    // If sowchan/ folder is empty, fetch all images (fallback)
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
      const id = photo.public_id.toLowerCase();
      return !excluded.some(ex => id.includes(ex));
    });

    const photos = resources.map((photo) => {
      const context = photo.context?.custom || {};
      const caption = context.caption || context.alt || context.description || '';
      const category =
        context.category ||
        (photo.tags && photo.tags[0]) ||
        detectCategory(photo.public_id) ||
        'activities';

      return {
        src: photo.secure_url,
        publicId: photo.public_id,
        category,
        caption,
        folder: extractFolder(photo.public_id),
        createdAt: photo.created_at,
      };
    });

    photos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.status(200).json({ photos });

  } catch (error) {
    console.error('Gallery API error:', error);
    res.status(500).json({ error: 'Failed to fetch photos', details: error.message });
  }
}

function extractFolder(publicId) {
  const parts = publicId.split('/');
  if (parts.length > 2) return parts[1];
  return 'main';
}

function detectCategory(publicId) {
  const lower = publicId.toLowerCase();
  if (lower.includes('outreach')) return 'outreach';
  if (lower.includes('training')) return 'training';
  if (lower.includes('kwara')) return 'kwara';
  if (lower.includes('benue')) return 'benue';
  if (lower.includes('international')) return 'international';
  if (lower.includes('lagos')) return 'outreach';
  if (lower.includes('abuja')) return 'outreach';
  return null;
}