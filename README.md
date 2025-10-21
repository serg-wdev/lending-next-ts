# Mellstroy Casino Streamer Landing Site

A modern, sleek landing page for Mellstroy - a casino streamer. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎰 **Stunning Hero Section** - Eye-catching introduction with live status
- 📊 **Live Stats** - Showcase follower count, total wins, and stream count
- 🎯 **Feature Highlights** - Display what makes the stream unique
- 📅 **Stream Schedule** - Weekly streaming schedule with special events
- 🌐 **Social Links** - Connect across all social platforms
- 📱 **Fully Responsive** - Optimized for all devices
- ✨ **Animated UI** - Smooth animations and transitions
- 🎨 **Casino Theme** - Gold and purple color scheme with glowing effects

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx            # Hero section with CTA
│   ├── About.tsx           # Features and about section
│   ├── Schedule.tsx        # Stream schedule
│   ├── Community.tsx       # Social links and newsletter
│   └── Footer.tsx          # Footer with links
├── tailwind.config.ts      # Tailwind configuration
└── package.json
```

## Customization

### Update Content

- Edit component files in `/components` to update text and links
- Modify colors in `tailwind.config.ts`
- Update metadata in `app/layout.tsx`

### Add Social Links

Update the social links in `components/Community.tsx`:

```typescript
const socials = [
  {
    name: "Platform Name",
    icon: <Icon />,
    link: "your-link-here",
    // ...
  }
];
```

### Change Schedule

Edit the schedule items in `components/Schedule.tsx`.

## Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Performance

- Built with Next.js App Router for optimal performance
- Static generation where possible
- Optimized images and assets
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Disclaimer

This is a landing page for entertainment purposes. Please gamble responsibly. 18+ only.

