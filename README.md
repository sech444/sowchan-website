# SOWCHAN Website

Official website for the **Society for Women and Children Living with HIV/AIDS in Nigeria (SOWCHAN)**.

Built with **Next.js** + **Tailwind CSS**, designed for deployment on **Vercel**.

---

## 🚀 How to Deploy to Vercel

### Step 1 — Create a GitHub Account
If you don't have one, sign up free at [github.com](https://github.com)

### Step 2 — Upload This Project to GitHub
1. Go to [github.com/new](https://github.com/new)
2. Create a new repository called `sowchan-website`
3. Upload all these project files

### Step 3 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `sowchan-website` repository
4. Click **Deploy** — Vercel does the rest automatically!

Your site will be live at `https://sowchan-website.vercel.app` (or your custom domain).

---

## 💻 Run Locally (for developers)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
sowchan-website/
├── pages/
│   ├── _app.js         # App wrapper (Navbar + Footer)
│   ├── index.js        # Homepage
│   ├── about.js        # About Us
│   ├── programs.js     # Our Programs
│   ├── impact.js       # Our Impact / Stories
│   ├── gallery.js      # Photo Gallery
│   └── contact.js      # Contact Us
├── components/
│   ├── Navbar.js       # Navigation bar
│   └── Footer.js       # Site footer
├── styles/
│   └── globals.css     # Global styles + Tailwind
├── public/
│   └── gallery/        # ← PUT YOUR PHOTOS HERE
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## 🖼️ Adding Photos to the Gallery

1. Place your photos in `/public/gallery/` folder
2. Open `pages/gallery.js`
3. Replace the placeholder divs with `<img>` tags like:
```jsx
<img src="/gallery/your-photo.jpg" alt="Caption" className="w-full h-52 object-cover" />
```

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | `#F5C200` | Primary highlights, buttons |
| Crimson | `#C0000C` | Accents, calls-to-action |
| Charcoal | `#1A1A1A` | Backgrounds, dark sections |
| Cream | `#FFFDF0` | Light backgrounds |

---

## 📧 Enabling the Contact Form

To make the contact form actually send emails:
1. Go to [formspree.io](https://formspree.io) (free)
2. Create a form and get your Form ID
3. In `pages/contact.js`, update the form's `action` attribute with your Formspree URL

---

## 🌐 Custom Domain

Once deployed on Vercel:
1. Go to your project settings on Vercel
2. Click **Domains**
3. Add `www.sowchan.org`
4. Follow Vercel's DNS instructions

---

Built with ❤️ for SOWCHAN
