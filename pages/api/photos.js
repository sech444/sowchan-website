export default async function handler(req, res) {
  try {
    const cloudName = 'dfzkslndz';
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    // Fetch with tags AND context so captions come through
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=500&tags=true&context=true`,
      {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      }
    );

    const data = await response.json();

    const photos = (data.resources || []).map((photo) => {
      // Cloudinary stores context as { custom: { caption: "...", alt: "..." } }
      const context = photo.context?.custom || {};

      // Caption can be in caption, alt, or description field
      const caption =
        context.caption ||
        context.alt ||
        context.description ||
        '';

      // Category from first tag, default to 'activities'
      const category =
        context.category ||
        (photo.tags && photo.tags[0]) ||
        'activities';

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

    res.status(200).json({ photos });
  } catch (error) {
    console.error('Gallery API error:', error);
    res.status(500).json({ error: 'Failed to fetch photos', details: error.message });
  }
}