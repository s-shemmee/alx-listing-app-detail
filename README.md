# ALX Listing App - Property Detail Page

This is a [Next.js](https://nextjs.org) project that implements a responsive Property Detail Page for a listing application using Next.js and Tailwind CSS.

## 🏗️ Milestone 3: Property Detail Page Implementation

This project implements a comprehensive property detail page that includes:

### ✅ Features Implemented

- **Dynamic Routing**: Property pages accessible via `/property/[id]` routes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Architecture**: Modular, reusable components following best practices
- **Interactive Elements**: Tabbed navigation, date pickers, and booking calculations
- **Image Gallery**: Grid layout with main image and thumbnail gallery
- **Booking System**: Real-time price calculation with date selection
- **Review System**: User reviews with ratings and avatars
- **Host Information**: About the host section with profile details

### 🗂️ Component Structure

```
components/
├── property/
│   ├── PropertyDetail.tsx      # Main container component
│   ├── BookingSection.tsx      # Reservation functionality
│   └── ReviewSection.tsx       # User reviews display
├── common/
│   ├── Card.tsx               # Property card with navigation
│   ├── Button.tsx             # Reusable button component
│   └── Pill.tsx               # Category pills
└── layout/
    ├── Layout.tsx             # Main layout wrapper
    ├── Header.tsx             # Navigation header
    └── Footer.tsx             # Site footer
```

### 🛣️ Dynamic Routing

- **Path**: `/property/[id]`
- **Example**: `/property/villa-ocean-breeze`
- Properties are accessible by URL-safe slugs generated from property names

### 📱 Responsive Features

- **Mobile-first design** with responsive breakpoints
- **Grid layouts** that adapt to screen sizes
- **Sticky booking section** on desktop
- **Collapsible elements** for mobile optimization

### 🎨 UI Components

#### PropertyDetail Component

- Property header with name, rating, and location
- Image grid with main image and thumbnails
- Tabbed content (Overview, Amenities, Reviews, Host)
- Property information and amenities listing

#### BookingSection Component

- Pricing display with dynamic calculations
- Date selection for check-in/check-out
- Guest count selection
- Real-time total cost calculation
- Service fees and taxes breakdown

#### ReviewSection Component

- User reviews with star ratings
- Reviewer avatars and names
- Review dates and comments
- Pagination support for multiple reviews

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🔗 Testing the Property Detail Pages

Visit these example property detail pages:

- [Villa Ocean Breeze](http://localhost:3000/property/villa-ocean-breeze)
- [Mountain Escape Chalet](http://localhost:3000/property/mountain-escape-chalet)
- [Cozy Desert Retreat](http://localhost:3000/property/cozy-desert-retreat)

### 🧪 Building for Production

```bash
npm run build
npm run start
```

## 🛠️ Technical Implementation

### Technologies Used

- **Next.js 15.3.5** - React framework with SSR and routing
- **React 19** - Component library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library for UI elements

### Key Implementation Details

1. **Dynamic Routing**: Uses Next.js file-based routing with `[id].tsx`
2. **Type Safety**: Full TypeScript implementation with proper interfaces
3. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
4. **Component Composition**: Follows React best practices for reusability
5. **Image Optimization**: Uses Next.js Image component for performance
6. **State Management**: Local component state for interactive elements

### Project Structure

```txt
alx-listing-app-detail/
├── components/
│   ├── property/           # Property-specific components
│   ├── common/            # Reusable UI components
│   └── layout/            # Layout components
├── constants/             # Sample data and constants
├── interfaces/            # TypeScript type definitions
├── pages/                 # Next.js pages and API routes
├── public/               # Static assets
└── styles/               # Global styles and Tailwind config
```

## 📋 Requirements Checklist

✅ **Dynamic Routing**: Implemented `[id].tsx` for property pages  
✅ **PropertyDetail Component**: Main container with all required sections  
✅ **BookingSection Component**: Handles reservations and pricing  
✅ **ReviewSection Component**: Displays user feedback and ratings  
✅ **Responsive Design**: Works on all screen sizes  
✅ **Data Handling**: Proper TypeScript typing throughout  
✅ **UI Elements**: Image gallery, amenities, ratings, booking form  
✅ **Best Practices**: Component design, styling, code organization  
✅ **Performance**: Optimized images and efficient data handling

## 🚀 Next Steps

1. Implement actual booking functionality with backend integration
2. Add real image upload and gallery management
3. Integrate with a review system API
4. Add property search and filtering
5. Implement user authentication for bookings and reviews

This project demonstrates modern React development patterns and provides a solid foundation for a production-ready property listing application.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
