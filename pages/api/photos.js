export default async function handler(req, res) {
  try {
    const cloudName = 'dfzkslndz';
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    // Fetch from sowchan/ folder and all subfolders
    let response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?prefix=sowchan/&type=upload&max_results=500&tags=true&context=true`,
      { headers: { Authorization: `Basic ${credentials}` } }
    );
    let data = await response.json();

    // Fallback to all images if sowchan/ is empty
    if (!data.resources || data.resources.length === 0) {
      response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=500&tags=true&context=true`,
        { headers: { Authorization: `Basic ${credentials}` } }
      );
      data = await response.json();
    }

    // Filter out Cloudinary demo images
    const excluded = ['smile', 'two-ladies', 'chair', 'sample', 'cld-sample'];
    const resources = (data.resources || []).filter(photo => {
      const id = photo.public_id.toLowerCase();
      return !excluded.some(ex => id.includes(ex));
    });

    const photos = resources.map((photo) => {
      const context = photo.context?.custom || {};
      const caption = context.caption || context.alt || context.description || '';

      // Get category from context/tags first, else derive from folder path
      const category =
        context.category ||
        (photo.tags && photo.tags[0]) ||
        getFolderCategory(photo.public_id);

      return {
        src: photo.secure_url,
        publicId: photo.public_id,
        category,
        caption,
        createdAt: photo.created_at,
      };
    });

    // Sort newest first
    photos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Build dynamic category list from actual folder names
    const categorySet = new Set(photos.map(p => p.category));
    const categories = Array.from(categorySet).sort();

    res.status(200).json({ photos, categories });

  } catch (error) {
    console.error('Gallery API error:', error);
    res.status(500).json({ error: 'Failed to fetch photos', details: error.message });
  }
}

/**
 * Derives a readable category label from the Cloudinary public_id folder path.
 *
 * Examples:
 *   "sowchan/photo"                          → "General"
 *   "sowchan/Benue Media/photo"              → "Benue Media"
 *   "sowchan/Benue Media/Stakeholders/photo" → "Benue Media / Stakeholders"
 *   "sowchan/Kwara/Training/photo"           → "Kwara / Training"
 */
function getFolderCategory(publicId) {
  // Split by "/" and remove the filename (last segment)
  const parts = publicId.split('/').slice(0, -1);

  // Remove the root "sowchan" prefix
  const subParts = parts[0]?.toLowerCase() === 'sowchan' ? parts.slice(1) : parts;

  // No subfolder — photo sits directly in sowchan/
  if (subParts.length === 0) return 'General';

  // Join subfolder names: "Benue Media" + "Stakeholders" → "Benue Media / Stakeholders"
  return subParts
    .map(p => p.replace(/-/g, ' ').replace(/_/g, ' ').trim())
    .map(p => p.charAt(0).toUpperCase() + p.slice(1)) // Capitalize first letter only
    .join(' / ');
}