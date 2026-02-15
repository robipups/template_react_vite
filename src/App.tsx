import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function App() {
  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center gap-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          React + Vite + TailwindCSS + shadcn/ui
        </h1>
        <p className="text-muted-foreground text-lg">
          A modern React template with beautiful components
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl w-full">
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              Multiple button styles for different use cases
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>
              Different sizes for various contexts
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Form Example</CardTitle>
            <CardDescription>
              A simple login form using shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Cancel</Button>
            <Button>Sign In</Button>
          </CardFooter>
        </Card>
      </div>

      <footer className="text-center text-muted-foreground text-sm mt-8">
        <p>Built with React + Vite + TailwindCSS + shadcn/ui</p>
      </footer>
    </div>
  )
}

export default App
