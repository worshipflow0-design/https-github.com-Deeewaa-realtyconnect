import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";
import { orders } from "@/lib/data";
import { format } from "date-fns";

const vendorOrders = orders.slice(0, 2); // Show some orders for the vendor view

export default function VendorOrdersPage() {
  return (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold font-headline flex items-center gap-3">
                <Package className="w-8 h-8" />
                Store Orders
            </h1>
            <p className="text-muted-foreground">View and manage orders for your store.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>A list of the most recent orders for your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vendorOrders.length === 0 ? (
                     <TableRow>
                        <TableCell colSpan={5} className="text-center h-24">
                            No orders found.
                        </TableCell>
                    </TableRow>
                ) : (
                    vendorOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.code}</TableCell>
                        <TableCell>{order.customer.name}</TableCell>
                        <TableCell>{format(new Date(order.createdAt), "PPP")}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              order.status === "COMPLETED" ? "default" :
                              order.status === "CANCELED" ? "destructive" :
                              "secondary"
                            }
                            className={order.status === "COMPLETED" ? "bg-green-600 capitalize" : "capitalize"}
                          >
                            {order.status.toLowerCase()}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">K{order.totals.total.toFixed(2)}</TableCell>
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
