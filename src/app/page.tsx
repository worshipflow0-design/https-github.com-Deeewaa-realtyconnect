import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, ShoppingCart, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-8 w-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-xl font-bold font-headline">vendors</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/home">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              The Hub for Your Local stores
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Discover and shop from the best local stores in your community. Fresh produce, unique crafts, and more—all in one place.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/home">Browse Marketplace</Link>
              </Button>
               <Button size="lg" variant="secondary" asChild>
                <Link href="/vendor/dashboard">Become a Vendor</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why You'll Love vendors</h2>
              <p className="mt-4 text-muted-foreground">
                We connect you with the heart of your local economy.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShoppingCart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Shop Local</h3>
                <p className="mt-2 text-muted-foreground">
                  Access a wide variety of products from stores right in your neighborhood.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Store className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Support Small Businesses</h3>
                <p className="mt-2 text-muted-foreground">
                  Every purchase directly supports local entrepreneurs and your community.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Convenient & Easy</h3>
                <p className="mt-2 text-muted-foreground">
                  Order online for pickup or delivery with a simple, seamless experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-2xl overflow-hidden bg-primary/90 text-primary-foreground p-10 md:p-16">
                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Join the Local Movement?</h2>
                        <p className="mt-4 max-w-xl mx-auto text-lg text-primary-foreground/90">
                           Sign up today and start exploring the best of what your community has to offer.
                        </p>
                        <div className="mt-8">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/signup">
                                    Create Your Account
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 py-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} vendors. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
