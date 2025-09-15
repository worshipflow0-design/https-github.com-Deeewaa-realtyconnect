import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, ShoppingCart, Store, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Store className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-headline text-foreground">vendors</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Features</Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">Pricing</Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">About</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="transition-smooth">
              <Link href="/signup">Log In</Link>
            </Button>
            <Button asChild className="hover-lift">
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-sm font-medium text-muted-foreground mb-6">
              <Sparkles className="w-4 h-4" />
              Connecting communities through commerce
            </div>
            <h1 className="text-5xl md:text-7xl font-headline text-foreground leading-tight">
              The Future of
              <span className="text-primary block">Local Commerce</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover exceptional local businesses, support your community, and experience commerce reimagined for the modern world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Button size="lg" asChild className="hover-lift h-14 px-8 text-base">
                <Link href="/signup">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover-lift h-14 px-8 text-base">
                <Link href="/home">Browse Marketplace</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="hover-lift h-14 px-8 text-base">
                <Link href="/vendor/onboarding">Join as Vendor</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
                Built for Modern Commerce
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the perfect blend of technology and community, designed to elevate how you discover and support local businesses.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              <Card className="hover-lift border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
                    <ShoppingCart className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Curated Discovery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Find exceptional products from carefully selected local businesses, each with their own unique story and craftsmanship.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
                    <Store className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Community Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every purchase directly supports local entrepreneurs and strengthens the economic fabric of your community.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Seamless Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enjoy a refined, intuitive platform designed for effortless browsing, ordering, and connecting with local vendors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-headline text-foreground mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Local Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-headline text-foreground mb-2">50K+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-headline text-foreground mb-2">25</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-headline text-foreground mb-2">98%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
                "vendors has transformed how we connect with our community. The platform's elegant design and thoughtful features make it a joy to discover and support local businesses."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold">SM</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">Community Leader</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-headline mb-6">
                Ready to Transform Your Local Experience?
              </h2>
              <p className="text-xl text-background/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of community members who are already discovering, supporting, and celebrating local commerce through our platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild className="hover-lift h-14 px-8 text-base">
                  <Link href="/signup">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover-lift h-14 px-8 text-base border-background/20 text-background hover:bg-background hover:text-foreground">
                  <Link href="/home">
                    Explore Marketplace
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA for Vendors */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-headline text-foreground mb-4">
                Are You a Local Business Owner?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Join our growing network of successful vendors and reach customers who value quality and community.
              </p>
              <Button size="lg" asChild className="hover-lift h-14 px-8 text-base">
                <Link href="/vendor/onboarding">
                  Become a Vendor Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Store className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-headline text-foreground">vendors</span>
              </Link>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Connecting communities through thoughtfully curated local commerce experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-smooth">Browse Marketplace</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-smooth">Become a Vendor</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-smooth">Mobile App</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-smooth">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-smooth">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-smooth">Community</Link></li>
              </ul>
            </div>
          </div>
      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Store className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-headline text-foreground">vendors</span>
              </Link>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Connecting communities through thoughtfully curated local commerce experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-smooth">Browse Marketplace</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-smooth">Become a Vendor</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-smooth">Mobile App</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-smooth">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-smooth">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-smooth">Community</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} vendors. Crafted with care for local communities.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-smooth">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-smooth">Terms of Service</Link>
              <Link href="#" className="hover:text-foreground transition-smooth">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

  )
}