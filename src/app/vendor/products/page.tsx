import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Store, PlusCircle } from "lucide-react";
import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function VendorProductsPage() {
  return (
    <div className="space-y-8">
       <div>
         <h1 className="text-3xl font-bold font-headline flex items-center gap-3">
            <Store className="w-8 h-8" />
            My Products
         </h1>
         <p className="text-muted-foreground">Manage your store's products.</p>
       </div>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
            <div>
                <CardTitle>All Products</CardTitle>
                <CardDescription>View and manage all products in your inventory.</CardDescription>
            </div>
            <Button asChild>
                <Link href="/vendor/products/new">
                    <PlusCircle className="mr-2" />
                    Add Product
                </Link>
            </Button>
        </CardHeader>
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[80px]">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="text-right">Price</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={5} className="text-center h-24">
                            No products found.
                        </TableCell>
                    </TableRow>
                ) : (
                    products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <Image 
                                    src={product.imageUrl} 
                                    alt={product.name} 
                                    width={64} 
                                    height={64} 
                                    className="rounded-md object-cover aspect-square"
                                    data-ai-hint="product photo"
                                />
                            </TableCell>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>
                                <Badge variant={product.inventory.stock > 0 ? "default" : "destructive"} className={product.inventory.stock > 0 ? "bg-green-600" : ""}>
                                    {product.inventory.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Badge>
                            </TableCell>
                            <TableCell>{product.inventory.stock}</TableCell>
                            <TableCell className="text-right">K{product.price.toFixed(2)}</TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
