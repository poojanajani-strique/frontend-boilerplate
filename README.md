<<<<<<< HEAD
# Frontend Boilerplate

A modern, accessible, and type-safe frontend boilerplate built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. This boilerplate follows strict patterns and conventions to ensure consistency across all your projects.

## 🚀 Features

- **Next.js 14** with App Router and React Server Components
- **TypeScript** with strict mode enabled
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** components built on Radix UI primitives
- **React Hook Form** with Zod validation
- **Type-safe API layer** with centralized error handling
- **Accessibility-first** design with WCAG compliance
- **ESLint & Prettier** for code quality
- **Environment validation** with Zod schemas

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── settings/          # Settings pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── features/          # Feature-specific components
│   │   ├── auth/          # Authentication components
│   │   └── settings/      # Settings components
│   └── layout/            # Layout components
├── lib/
│   ├── api/               # API layer
│   │   ├── api.ts         # Core API wrapper
│   │   ├── auth.ts        # Auth API calls
│   │   └── settings.ts    # Settings API calls
│   ├── validators/        # Zod schemas
│   │   ├── env.ts         # Environment validation
│   │   ├── auth.ts        # Auth validation
│   │   └── settings.ts    # Settings validation
│   └── utils.ts           # Utility functions
└── types/                 # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone and install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   NEXT_PUBLIC_APP_NAME="My App"
   NEXT_PUBLIC_APP_DESCRIPTION="A modern SaaS application"
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Core Patterns

### API Layer

All API calls go through the centralized `fetchJson` function in `lib/api/api.ts`:

```typescript
import { fetchJson } from "@/lib/api/api";
import { userSchema } from "@/lib/validators/auth";

export async function getUser(id: string) {
  return fetchJson(`/users/${id}`, {
    method: "GET",
  }, userSchema);
}
```

### Form Validation

Every form uses React Hook Form with Zod validation:

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}
    </form>
  );
}
```

### Component Structure

- **Server Components** by default
- **Client Components** only when needed (marked with `"use client"`)
- **Feature-based organization** in `components/features/`
- **Composable UI components** using shadcn/ui primitives

## 🎨 Design System

### Colors

The boilerplate uses a comprehensive color system with CSS variables:

- **Primary**: Blue tones for main actions
- **Secondary**: Gray tones for secondary actions  
- **Destructive**: Red tones for dangerous actions
- **Muted**: Subtle text and backgrounds
- **Accent**: Highlighted content

### Typography

- **Font**: Inter (loaded from Google Fonts)
- **Scale**: Responsive typography with Tailwind classes
- **Hierarchy**: Clear heading and text styles

### Components

All components follow shadcn/ui patterns with:
- **Accessibility**: ARIA attributes, keyboard navigation
- **Variants**: Multiple visual styles via `class-variance-authority`
- **Composition**: Easy to extend and customize

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript checks
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
```

### Code Quality Rules

1. **TypeScript strict mode** - No `any` types allowed
2. **ESLint must pass** - Clean code before commits
3. **Accessibility required** - WCAG compliance
4. **Server Components first** - Use client components sparingly
5. **Zod validation** - Every form and API response validated

## 📚 Adding New Features

When adding a new feature, follow this pattern:

1. **Create route** in `src/app/[feature]/page.tsx`
2. **Add components** in `src/components/features/[feature]/`
3. **Create validators** in `src/lib/validators/[feature].ts`
4. **Add API calls** in `src/lib/api/[feature].ts`
5. **Update navigation** if needed

### Example: Adding a Dashboard Feature

```bash
# 1. Create the route
touch src/app/dashboard/page.tsx

# 2. Create feature components
mkdir -p src/components/features/dashboard
touch src/components/features/dashboard/DashboardPanel.tsx

# 3. Add validators
touch src/lib/validators/dashboard.ts

# 4. Add API calls
touch src/lib/api/dashboard.ts
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy automatically

### Other Platforms

The app is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting platform

## 📖 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [React Hook Form Documentation](https://react-hook-form.com)
- [Zod Documentation](https://zod.dev)

## 🤝 Contributing

1. Follow the established patterns
2. Ensure all linting passes
3. Add proper TypeScript types
4. Include accessibility features
5. Test thoroughly

## 📄 License

MIT License - feel free to use this boilerplate for your projects!
=======
# frontend-boilerplate
This is my front end boilerplate code.
>>>>>>> 6e582f457b9ea9245fc066156933cf454d7202d1
