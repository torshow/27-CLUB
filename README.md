The 27 Club Dashboard

A React dashboard exploring legendary musicians who passed away at age 27. Built with TypeScript, Tailwind CSS v4, and Framer Motion.

Features
- Dark theme layout built for music history
- Smooth page loads and hover zoom animations
- Dynamic image framing optimized for faces
- Direct artist profile linking to Spotify

Tech Stack
- Framework: React 19 and Vite
- Language: TypeScript
- Styling: Tailwind CSS v4
- Animations: Framer Motion

Quick Start

Installation
git clone your-repository-url
cd 27-Clubs
npm install

Run Locally
npm run dev

Architecture
public/ - Local images like jimi.jpg and amy.jpg
src/components/ArtistCard.tsx - Layout card and animation rules
src/components/artistsData.ts - Centralized English database array
src/components/types.ts - Strict TypeScript type contracts
src/App.tsx - Main layout wrapper shell
src/index.css - Tailwind CSS layer setup
README.md - Project documentation manual
