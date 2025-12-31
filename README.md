# Country Chemical - Corporate Website

A modern, professional corporate website for Country Chemical, a leading construction chemicals manufacturer. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, industrial aesthetic with professional color palette
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations and micro-interactions using Framer Motion
- **Product Catalog**: Comprehensive product display with category filtering
- **SEO Optimized**: Semantic HTML structure and meta tags
- **Accessibility**: ARIA labels and keyboard navigation support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (via Next.js Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

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
cc-website/
├── app/                    # Next.js app directory
│   ├── about/             # About Us page
│   ├── products/           # Products listing and detail pages
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── about/             # About page components
│   ├── contact/           # Contact page components
│   ├── home/              # Homepage components
│   ├── layout/            # Header and Footer
│   └── products/          # Product-related components
├── lib/                   # Utility functions and data
│   └── products.ts        # Product data and helpers
└── public/                # Static assets
```

## Pages

- **Homepage** (`/`): Hero section, company stats, product categories, industries served, and trust indicators
- **About Us** (`/about`): Company overview, mission/vision/values, and quality commitment
- **Products** (`/products`): Product grid with category filtering
- **Product Detail** (`/products/[slug]`): Individual product pages with specifications and applications
- **Contact** (`/contact`): Contact form and company information

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
industrial: {
  dark: '#1a1a1a',
  grey: '#2d2d2d',
  light: '#f5f5f5',
  concrete: '#e8e8e8',
  accent: '#0ea5e9',
}
```

### Products

Add or modify products in `lib/products.ts`. Each product includes:
- Basic information (name, description, category)
- Technical highlights
- Specifications
- Applications

## Building for Production

```bash
npm run build
npm start
```

## Features in Detail

### Animations
- Scroll-triggered animations using Framer Motion
- Hover effects on interactive elements
- Smooth page transitions
- Animated statistics counters

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Mobile navigation menu

### Accessibility
- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states on interactive elements

## License

This project is proprietary and confidential.

## Contact

For questions or support, please contact the development team.

