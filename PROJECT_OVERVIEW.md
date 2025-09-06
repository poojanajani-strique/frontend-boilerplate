# Frontend Boilerplate - Project Overview

## 🎯 Purpose

This is a comprehensive frontend boilerplate designed to be your starting point for all SaaS applications. It ensures consistency across projects with a unified design system, coding patterns, and architectural decisions.

## 🏗️ Architecture

### Core Principles
- **Server Components First**: Default to React Server Components, use client components only when needed
- **Type Safety**: TypeScript strict mode with Zod validation for all data
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized with Next.js App Router and static generation
- **Maintainability**: Consistent patterns and clear separation of concerns

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **API Layer**: Centralized fetch wrapper with error handling
- **Code Quality**: ESLint, Prettier, and strict TypeScript

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── settings/          # Settings pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── textarea.tsx
│   │   ├── badge.tsx
│   │   ├── alert.tsx
│   │   └── separator.tsx
│   ├── features/          # Feature-specific components
│   │   ├── auth/          # Authentication components
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   └── settings/      # Settings components
│   │       └── ProfileForm.tsx
│   └── layout/            # Layout components
│       └── Navigation.tsx
├── lib/
│   ├── api/               # API layer
│   │   ├── api.ts         # Core fetch wrapper
│   │   ├── auth.ts        # Authentication API calls
│   │   └── settings.ts    # Settings API calls
│   ├── validators/        # Zod schemas
│   │   ├── env.ts         # Environment validation
│   │   ├── auth.ts        # Auth form validation
│   │   └── settings.ts    # Settings validation
│   └── utils.ts           # Utility functions
└── types/                 # TypeScript type definitions
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones for main actions and branding
- **Secondary**: Gray tones for secondary actions
- **Destructive**: Red tones for dangerous actions
- **Muted**: Subtle text and background colors
- **Accent**: Highlighted content and interactive elements

### Typography
- **Font Family**: Inter (Google Fonts)
- **Scale**: Responsive typography using Tailwind classes
- **Hierarchy**: Clear heading and text styles

### Components
All components follow shadcn/ui patterns:
- **Accessibility**: ARIA attributes, keyboard navigation, focus management
- **Variants**: Multiple visual styles using `class-variance-authority`
- **Composition**: Easy to extend and customize
- **Type Safety**: Full TypeScript support

## 🔧 Development Patterns

### API Layer Pattern
```typescript
// lib/api/api.ts
export async function fetchJson<T>(
  path: string,
  init?: RequestInit,
  schema?: z.ZodSchema<T>
): Promise<T> {
  // Centralized error handling and validation
}

// lib/api/auth.ts
export async function login(data: LoginValues): Promise<LoginResponse> {
  return fetchJson("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  }, loginResponseSchema);
}
```

### Form Pattern
```typescript
// lib/validators/auth.ts
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// components/features/auth/LoginForm.tsx
export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields with validation */}
    </form>
  );
}
```

### Component Organization
- **Server Components**: Default for data display and static content
- **Client Components**: Only for interactivity (forms, state, event handlers)
- **Feature Components**: Organized by feature in `components/features/`
- **UI Components**: Reusable primitives in `components/ui/`

## 🚀 Getting Started

### Quick Setup
```bash
# Clone and setup
git clone <your-repo>
cd frontend-boilerplate
./setup.sh

# Start development
pnpm dev
```

### Manual Setup
```bash
# Install dependencies
pnpm install

# Create environment file
cp env.example .env.local

# Update environment variables
# Edit .env.local with your configuration

# Run development server
pnpm dev
```

## 📋 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm typecheck    # Run TypeScript checks
pnpm lint         # Run ESLint
pnpm format       # Format with Prettier
```

## 🎯 Adding New Features

### 1. Create Route
```bash
mkdir src/app/new-feature
touch src/app/new-feature/page.tsx
```

### 2. Add Components
```bash
mkdir src/components/features/new-feature
touch src/components/features/new-feature/NewFeatureComponent.tsx
```

### 3. Create Validators
```bash
touch src/lib/validators/new-feature.ts
```

### 4. Add API Calls
```bash
touch src/lib/api/new-feature.ts
```

### 5. Update Navigation
Add new route to `src/components/layout/Navigation.tsx`

## 🔒 Environment Variables

Required environment variables:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_NAME="My App"
NEXT_PUBLIC_APP_DESCRIPTION="A modern SaaS application"
```

## 🎨 Customization

### Theming
- Update CSS variables in `src/app/globals.css`
- Modify Tailwind config in `tailwind.config.js`
- Customize component variants in individual component files

### Branding
- Update app name in `src/app/layout.tsx`
- Modify navigation in `src/components/layout/Navigation.tsx`
- Update metadata in page components

### Adding New UI Components
1. Create component in `src/components/ui/`
2. Follow shadcn/ui patterns
3. Export from component file
4. Add to component index if needed

## 📚 Best Practices

### Code Quality
- Always use TypeScript strict mode
- No `any` types allowed
- ESLint must pass before commits
- Use Zod for all data validation

### Accessibility
- Semantic HTML elements
- ARIA attributes where needed
- Keyboard navigation support
- Focus management for modals/dialogs

### Performance
- Server Components by default
- Client Components only when needed
- Optimize images and assets
- Use Next.js built-in optimizations

### Security
- Validate all inputs with Zod
- Sanitize user data
- Use environment variables for secrets
- Implement proper error handling

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

### Other Platforms
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

1. Follow established patterns
2. Ensure all tests pass
3. Add proper TypeScript types
4. Include accessibility features
5. Update documentation

## 📄 License

MIT License - Use this boilerplate for your projects!
