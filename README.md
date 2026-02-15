# React + Vite + TailwindCSS + shadcn/ui Template

A modern React application template built with Vite, TypeScript, TailwindCSS v4, and shadcn/ui components.

## Features

- ⚡️ **Vite** - Next-generation frontend tooling
- 🛠️ **TypeScript** - Type-safe JavaScript
- 🎨 **TailwindCSS v4** - Utility-first CSS framework
- 🎁 **shadcn/ui** - Beautiful, accessible components
- 📱 **Responsive** - Mobile-first design
- 🌙 **Dark Mode** - Built-in dark mode support

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/
│   └── ui/              # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles with TailwindCSS
```

## Available Components

The template includes these shadcn/ui components:

- [`Button`](src/components/ui/button.tsx) - Multiple variants (default, destructive, outline, secondary, ghost, link)
- [`Card`](src/components/ui/card.tsx) - Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- [`Input`](src/components/ui/input.tsx) - Form input component
- [`Label`](src/components/ui/label.tsx) - Form label component

## Adding More Components

To add more shadcn/ui components, install the required Radix UI primitives and create the component:

```bash
# Example: Adding a Dialog component
npm install @radix-ui/react-dialog
```

Then create the component in `src/components/ui/` following the existing patterns.

## Customization

### Dark Mode

The template uses CSS variables for theming. To enable dark mode, add the `dark` class to the root element or use a dark mode toggle.

### TailwindCSS Configuration

TailwindCSS v4 uses a new configuration approach. The configuration is done in `src/index.css` using `@theme` directives.

### Path Aliases

The `@` alias is configured to point to `src/`. You can import using:

```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Dependencies

### Core
- React 19
- React DOM 19
- Vite 7

### UI & Styling
- TailwindCSS 4
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Radix UI (for shadcn/ui)
- @radix-ui/react-slot
- @radix-ui/react-label

## License

MIT
