
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function VendorOnboardingPage() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleContinue = () => {
        if (selectedCategory) {
            // Here you would typically save the category choice to your backend
            console.log("Selected category:", selectedCategory);
            router.push("/vendor/dashboard");
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold font-headline">Become a Vendor</CardTitle>
                    <CardDescription>To get started, please select a category for your store.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div>
                        <h3 className="mb-4 text-lg font-medium">Select a Store Category</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.slug}
                                    onClick={() => setSelectedCategory(category.slug)}
                                    className={cn(
                                        "group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg border-2 transition-colors duration-200",
                                        selectedCategory === category.slug
                                            ? "border-primary bg-primary/10"
                                            : "border-transparent bg-background hover:bg-muted"
                                    )}
                                >
                                    <div className={cn("w-16 h-16 rounded-full flex items-center justify-center transition-colors",
                                     selectedCategory === category.slug ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                                    )}>
                                        <category.icon className="w-8 h-8" />
                                    </div>
                                    <span className="text-sm font-semibold text-center">{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-6 border-t">
                        <Button variant="ghost" asChild>
                            <Link href="/home">Maybe later</Link>
                        </Button>
                        <Button onClick={handleContinue} disabled={!selectedCategory}>
                            Continue
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
