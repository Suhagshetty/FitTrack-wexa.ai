# FitTrack

Premium fitness and wellness platform built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

A modern multi-page fitness experience featuring a responsive landing page, animated onboarding flow, and interactive user dashboard.

---

## Preview

FitTrack delivers:

- High-performance responsive UI
- Animated onboarding experience
- Dashboard analytics
- Dark modern athletic design
- Persistent onboarding state
- Smooth micro-interactions

---

## Getting Started

### Install dependencies

```bash
npm install
npm install canvas-confetti @types/canvas-confetti
```

### Run development server

```bash
npm run dev
```

Application runs at:

```txt
http://localhost:3000
```

---

## Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/auth/onboarding` | Multi-step onboarding flow |
| `/dashboard` | User fitness dashboard |

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| State Management | Zustand |
| Authentication | NextAuth.js |
| Icons | Lucide React |
| Fonts | Barlow Condensed, DM Sans |

---

## Features

### Landing Page

- Responsive premium hero section
- Animated statistics
- Feature showcase
- Testimonials
- Pricing section
- FAQ section
- Smooth scrolling navigation
- Mobile navigation drawer
- Modern footer with multiple pages

### Authentication

- Google OAuth login
- Credential-based authentication
- Protected dashboard routes
- Session persistence

### Onboarding Flow

- Multi-step onboarding
- Animated transitions
- Real-time validation
- Password strength indicator
- Fitness goal selection
- Activity level selection
- Height & weight sliders
- Avatar upload
- Completion confetti

### Dashboard

- Fitness analytics cards
- Workout progress tracker
- Interactive charts
- Collapsible sidebar
- Mobile bottom navigation
- Dark mode support
- Animated counters

---

## Project Structure

```txt
src
├── app
│   ├── page.tsx
│   ├── auth
│   │   └── onboarding
│   ├── dashboard
│   ├── about
│   ├── careers
│   ├── contact
│   └── api
│       └── auth
│
├── components
│   ├── landing
│   ├── auth
│   ├── dashboard
│   ├── shared
│   └── ui
│
├── lib
├── store
├── types
└── utils
```

---

## Design System

### Theme

- Dark athletic interface
- Orange accent palette
- OKLCH color system
- High contrast UI
- Glassmorphism elements
- Layered depth and glow effects

### Typography

- Barlow Condensed for headings
- DM Sans for body text

### Motion

- Framer Motion powered animations
- Smooth section reveals
- Interactive hover states
- Animated navigation
- Micro-interactions throughout UI

---

## Performance Decisions

- App Router architecture
- Optimized component structure
- Minimal bundle usage
- CSS-driven charts
- Client/server component separation
- Lightweight animation strategy

---

## Environment Variables

Create a `.env.local` file:

```env
NEXTAUTH_URL=http://localhost:3000

NEXTAUTH_SECRET=your_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## Future Improvements

- Backend integration
- Real workout tracking
- Nutrition analytics
- AI workout recommendations
- Progress history
- Social fitness features
- Stripe subscriptions
- PWA support

---

## License

This project is built for educational and technical assessment purposes.
