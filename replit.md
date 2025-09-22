# Overview

This repository contains a collection of Liferay fragments for Conveyors Inc., a family-owned industrial equipment manufacturer specializing in bulk material handling equipment since 1974. The fragments are designed to create a professional industrial-themed website showcasing conveyor equipment, company information, and product catalogs. The collection includes reusable UI components for hero banners, navigation headers, company information sections, and product showcases.

# Recent Changes

**September 22, 2025**: Completed production-ready Liferay fragments collection with four core fragments:
- **Hero Banner Fragment**: Industrial-themed hero section with company branding, messaging, and call-to-action buttons
- **Product Showcase Fragment**: Responsive grid layout showcasing bulk material handling equipment with interactive cards
- **Navigation Header Fragment**: Site navigation with dropdown menus, mobile responsive design, and prominent CTAs  
- **Company Information Fragment**: Heritage section highlighting 45+ years of experience with animated feature highlights

All fragments feature proper CSS scoping to prevent style leakage, Liferay-compatible JavaScript initialization, comprehensive configuration options, and full responsive design optimized for the industrial equipment manufacturer's brand identity.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The project uses a component-based architecture with Liferay Fragments, where each fragment is a self-contained UI component with its own HTML, CSS, JavaScript, and configuration files. The fragments follow Liferay's fragment structure with editable content areas using `data-lfr-editable-id` attributes for content management.

## Fragment Structure
Each fragment consists of four main files:
- `index.html` - Component markup with Liferay editable content areas
- `styles.css` - Component-specific styling with CSS Grid and Flexbox layouts
- `main.js` - JavaScript for dynamic behavior and configuration handling
- `configuration.json` - Configurable options for customizing appearance and behavior
- `fragment.json` - Fragment metadata and file path definitions

## Styling Approach
The fragments use modern CSS with:
- CSS Grid and Flexbox for responsive layouts
- Fully scoped CSS selectors to prevent global style leakage in Liferay DXP
- Mobile-first responsive design patterns with accessibility considerations
- Industrial color scheme (#1e3a5f primary blue, #f56500 accent orange)
- Box shadows, transitions, and hover effects for modern visual appeal
- Fragment-specific class naming to avoid conflicts with Clay/Bootstrap styles

## JavaScript Implementation
Each fragment includes vanilla JavaScript that:
- Uses IIFE (Immediately Invoked Function Expression) pattern for Liferay DXP compatibility
- Applies configuration settings dynamically through Liferay's configuration system
- Handles responsive behavior and mobile interactions with accessibility support
- Implements progressive enhancement with feature detection and graceful fallbacks
- Uses Intersection Observer API for scroll animations where available

## Configuration System
Fragments include configurable options through Liferay's configuration system:
- Layout variations (single/multi-column)
- Visual toggles (overlays, features, buttons)
- Styling options (colors, heights, alignment)
- Content display controls

# External Dependencies

## Development Dependencies
- `http-server` - Local development server for previewing fragments

## Browser APIs
- Intersection Observer API - Used for scroll-triggered animations with graceful fallback
- CSS Grid and Flexbox - Core layout technologies
- ES6+ JavaScript features - Modern browser functionality

## Content Management Integration
- Liferay Portal - Target platform for fragment deployment
- Liferay Fragment Editor - Development and editing environment
- Liferay editable content system - Content management through `data-lfr-editable-*` attributes

## Asset Dependencies
- Placeholder images from placeholder services
- Web fonts from system font stack
- No external CDN dependencies for maximum reliability