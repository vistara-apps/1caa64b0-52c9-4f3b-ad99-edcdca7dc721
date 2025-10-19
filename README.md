# PawConnect - Base Mini App

Connect with adoptable dogs on Base, bringing onchain pet ownership to Farcaster.

## Features

- 🐕 Personalized dog matching with swipe interface
- 🏠 Shelter & foster network hub
- 🎫 PawPass NFT for verifiable pet identity
- 👥 Farcaster community integration
- 💙 Built on Base with OnchainKit

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- OnchainKit for Base integration
- MiniKit for Farcaster integration

## Project Structure

```
app/
├── components/     # Reusable UI components
├── types.ts       # TypeScript type definitions
├── layout.tsx     # Root layout with providers
├── page.tsx       # Main matching interface
├── providers.tsx  # OnchainKit & React Query setup
└── globals.css    # Global styles with Coinbase theme

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Theme

Uses Coinbase theme with:
- Dark navy background (#0a1929)
- Coinbase blue accents (#0052ff)
- Light text (#e3f2fd)
- Subtle rounded borders

## License

MIT
