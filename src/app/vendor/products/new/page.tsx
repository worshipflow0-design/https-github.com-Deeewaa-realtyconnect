import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";

export default function NewProductPage() {
  return (
    <div className="space-y-8">
       <div>
         <h1 className="text-3xl font-bold font-headline flex items-center gap-3">
            <PlusCircle className="w-8 h-8" />
            Add New Product
         </h1>
         <p className="text-muted-foreground">Fill in the details below to add a new product to your store.</p>
       </div>

      <Card>
        <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>Provide information about your new product.</CardDescription>
        </CardHeader>
        <CardContent>
            <form className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="product-name">Product Name</Label>
                        <Input id="product-name" placeholder="e.g. Fresh Organic Apples" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="product-price">Price (K)</Label>
                        <Input id="product-price" type="number" placeholder="e.g. 15.99" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="product-description">Description</Label>
                    <Textarea id="product-description" placeholder="Describe the product..." />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="product-image">Image URL</Label>
                    <Input id="product-image" placeholder="https://picsum.photos/400/400" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="stock-quantity">Stock Quantity</Label>
                        <Input id="stock-quantity" type="number" placeholder="e.g. 100" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="low-stock">Low Stock Threshold</Label>
                        <Input id="low-stock" type="number" placeholder="e.g. 10" />
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Product</Button>
                </div>
            </form>
        </CardContent>
      </Card>
    </div>
  );
}
