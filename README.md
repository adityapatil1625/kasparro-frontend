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

(Instructions for deploying to Vercel and providing a link would go here)

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