export default async function handler(req, res) {
  try {
    const cloudName = 'dfzkslndz';
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=500&tags=true`,
      {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      }
    );

    const data = await response.json();

    const photos = data.resources.map((photo) => ({
      src: photo.secure_url,
      publicId: photo.public_id,
      // Use tags for category, default to 'activities'
      category: photo.tags?.[0] || 'activities',
      // Use context metadata for caption if set, otherwise empty
      caption: photo.context?.custom?.caption || '',
      createdAt: photo.created_at,
    }));

    // Sort newest first
    photos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json({ photos });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
}