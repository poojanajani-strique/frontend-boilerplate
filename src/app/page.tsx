import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Your SaaS App
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern, accessible, and type-safe frontend boilerplate built with Next.js, 
          TypeScript, Tailwind CSS, and shadcn/ui.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Type-Safe</CardTitle>
            <CardDescription>
              Built with TypeScript strict mode and Zod validation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Every form has Zod schemas, every API call is typed, and no `any` types allowed.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accessible</CardTitle>
            <CardDescription>
              WCAG compliant with keyboard navigation and screen reader support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Built on Radix UI primitives with proper ARIA attributes and focus management.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Modern</CardTitle>
            <CardDescription>
              Next.js App Router, React Server Components, and Tailwind CSS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Latest React patterns with server-side rendering and optimized performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
