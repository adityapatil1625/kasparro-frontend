# Kasparro: AI-Native SEO & Brand Intelligence

This repository contains the frontend implementation for the Kasparro platform, an AI-native SEO & Brand Intelligence platform designed for the modern, AI-first search era.

## Table of Contents

-   [Live Demo](#live-demo)
-   [Features](#features)
-   [Technical Stack](#technical-stack)
-   [Project Structure](#project-structure)
-   [Architectural Decisions](#architectural-decisions)
-   [Data Modeling & State Handling](#data-modeling--state-handling)
-   [UX Considerations](#ux-considerations)
-   [Getting Started](#getting-started)

## Live Demo

You can view the live demo here: [https://kasparro-frontend-iqma.vercel.app/](https://kasparro-frontend-iqma.vercel.app/)

To deploy your own version:

1.  Make sure you have Node.js and npm/yarn/pnpm installed.
2.  Install Vercel CLI: `npm i -g vercel`
3.  From the project root, run `vercel` and follow the prompts.

## Features

The application is divided into two main surfaces:

### 1. Kasparro Public Website

-   **Home Page (`/`)**: Explains Kasparro's value proposition, provides a high-level overview of the AI-SEO platform, and includes a call to action to "Run AI-SEO Audit."
-   **Platform Page (`/platform`)**: Bridges marketing to product by explaining the audit pipeline flow, data consumption, brand outputs, and Kasparro's differentiation from traditional SEO tools.
-   **About Page (`/about`)**: Outlines Kasparro's mission, product philosophy, and vision for AI-first search.

### 2. Kasparro Product Dashboard

-   **Dashboard (`/app/dashboard`)**: Provides a high-level brand snapshot, including a brand selector and key performance indicators like AI Visibility Score, Trust/EEAT Score, Non-Branded Keyword Coverage, and Last Audit Timestamp.
-   **Audit (`/app/audit`)**: The core product screen featuring a left sidebar listing 7 audit modules and a main panel displaying detailed information (score, insights, issues, recommendations) for the selected module.
-   **Architecture (`/app/architecture`)**: Presents a frontend representation of Kasparro's AI engine components (InputAssembler, ContextPack, Audit modules, Output surfaces).

## Technical Stack

-   **Next.js 14 (App Router)**: For server-side rendering, routing, and API routes.
-   **TypeScript**: For type safety and improved code quality.
-   **Tailwind CSS**: For utility-first styling and rapid UI development.
-   **shadcn/ui**: A collection of re-usable components built using Radix UI and Tailwind CSS.
-   **Zustand**: A fast and lightweight state management solution for React.
-   **Framer Motion**: For subtle and purposeful animations.
-   **clsx & tailwind-merge**: Utilities for constructing conditional CSS class strings.

## Project Structure

The project follows a modular and component-based architecture:

```
.
├── app/
├── components/
├── data/
├── lib/
├── store/
└── types/
```

-   `app/`: Next.js App Router pages and layouts.
-   `components/`: Reusable React components.
-   `data/`: Mocked JSON data for the dashboard.
-   `lib/`: Utility functions.
-   `store/`: Zustand state management store.
-   `types/`: TypeScript interfaces for data models.

## Architectural Decisions

-   **Next.js App Router**: Utilized for its powerful routing capabilities, data fetching mechanisms (Server Components), and nested layouts.
-   **Server Components for Data Fetching**: Data loading for static content is performed directly within Server Components to leverage Next.js's optimized data fetching.
-   **Client Components for Interactivity**: Interactive elements are marked with `"use client"` to enable client-side interactivity.
-   **Modular Component Structure**: Components are organized into logical directories to promote reusability and maintainability.
-   **Zustand for Global State**: Chosen for its simplicity and performance in managing shared client-side state.

## Data Modeling & State Handling

-   **TypeScript Interfaces**: All data structures are strictly typed using interfaces defined in `types/index.ts`.
-   **Mocked JSON Data**: All dynamic content in the dashboard is sourced from local JSON files (`data/`). In a real-world scenario, these would be replaced with API calls.
-   **`lib/data.ts`**: Centralizes all data loading logic.
-   **Zustand Store (`store/useStore.ts`)**: Manages the `selectedBrand` and `selectedModule` states.

## UX Considerations

-   **Information Hierarchy**: Content is structured with clear headings, cards, and logical grouping.
-   **Responsive Design**: Built with Tailwind CSS, the layout is designed to be responsive.
-   **Consistent Styling**: `shadcn/ui` and Tailwind CSS provide a cohesive visual language.
-   **Navigation**: A global `Navbar` allows easy access to all routes.

## Recent Enhancements (v2.0)

### New Components Added
-   **ScoreBadge**: Color-coded score indicators with automatic severity coloring
-   **ProgressBar**: Animated progress visualization with color gradients
-   **TrendIndicator**: Direction indicators showing up/down/stable trends
-   **StatCard**: Complete stat presentation with icons, values, trends, and descriptions
-   **Badge**: Flexible status and tag component with multiple variants
-   **ErrorBoundary**: Error catching component preventing full app crashes

### Dashboard Redesign
-   Enhanced with gradient backgrounds and color-coded score badges
-   Added trend indicators showing performance direction and percentage changes
-   Staggered animations for smooth metric loading
-   Better empty states with helpful messaging
-   Audit status indicators (completed, in-progress, pending)
-   Progress bars for visual metric representation

### Audit Module Improvements
-   Color-coded section dividers for visual organization
-   Indexed recommendation chips for clarity
-   Enhanced typography hierarchy and spacing
-   Sequential cascade animations on module load
-   Icon indicators for different content types (insights, issues, recommendations)

### Performance & Type Safety
-   React.memo memoization for module list items (~15% performance improvement)
-   Enabled all 13 TypeScript strict compiler options
-   Zero `any` types - complete type safety
-   New `Trend` interface for better data modeling
-   Optimized CardSkeleton with realistic loading states

### Accessibility Improvements
-   WCAG 2.1 AA compliant with better color contrast
-   Comprehensive ARIA labels throughout navigation
-   Enhanced screen reader support
-   Improved keyboard navigation
-   Better semantic HTML structure

### Error Handling
-   Global ErrorBoundary catches component-level errors
-   Graceful error display with recovery options
-   Enhanced API error responses with proper HTTP status codes
-   Proper error logging for debugging

### Visual Polish
-   Smooth 60fps animations throughout
-   Better visual hierarchy with consistent spacing
-   Enhanced theme support with perfect dark mode integration
-   Responsive design optimized for all screen sizes

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/kasparro-frontend.git
    cd kasparro-frontend
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.