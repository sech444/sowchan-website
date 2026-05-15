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
 
      // Extract folder structure from public_id
      // e.g. "sowchan/benue-media/photo1" -> folder = "Benue Media"
      // e.g. "sowchan/benue-media/events/photo1" -> folder = "Benue Media / Events"
      const folderLabel = extractFolderLabel(photo.public_id);
 
      const category =
        context.category ||
        (photo.tags && photo.tags[0]) ||
        folderLabel ||
        'Activities';
 
      return {
        src: photo.secure_url,
        publicId: photo.public_id,
        category,
        caption,
        createdAt: photo.created_at,
      };
    });
 
    photos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
 
    // Build dynamic category list from actual folders in the data
    const categorySet = new Set(photos.map(p => p.category));
    const dynamicCategories = Array.from(categorySet).sort();
 
    res.status(200).json({ photos, categories: dynamicCategories });
 
  } catch (error) {
    console.error('Gallery API error:', error);
    res.status(500).json({ error: 'Failed to fetch photos', details: error.message });
  }
}
 
// Convert folder path to readable label
// "sowchan/benue-media/events" -> "Benue Media / Events"
// "sowchan/benue-media" -> "Benue Media"
// "IMG_1234" (no folder) -> "Activities"
function extractFolderLabel(publicId) {
  const parts = publicId.split('/');
 
  // Remove the "sowchan" prefix and filename (last part)
  let folderParts = parts.slice(0, -1); // remove filename
  if (folderParts[0] === 'sowchan') {
    folderParts = folderParts.slice(1); // remove "sowchan"
  }
 
  if (folderParts.length === 0) return 'Activities';
 
  // Convert each part: "benue-media" -> "Benue Media"
  return folderParts
    .map(part => part
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
    )
    .join(' / ');
}