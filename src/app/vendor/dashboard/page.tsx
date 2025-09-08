
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DollarSign, ShoppingBag, AlertTriangle, Users } from "lucide-react";

const recentOrders: any[] = [];

export default function VendorDashboardPage() {
  return (
    <div className="space-y-8">
       <div>
         <h1 className="text-3xl font-bold font-headline">Vendor Dashboard</h1>
         <p className="text-muted-foreground">Welcome back! Here's what's happening with your store today.</p>
       </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Sales</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">K0.00</div>
                <p className="text-xs text-muted-foreground">No sales yet today</p>
            </CardContent>
        </Card>
         <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">No new orders</p>
            </CardContent>
        </Card>
         <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">Everything is in stock</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Ticket</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">K0.00</div>
                <p className="text-xs text-muted-foreground">No orders to calculate average</p>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>A list of the most recent orders.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Items</TableHead>
                <TableHead className="text-right">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {recentOrders.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={5} className="h-24 text-center">
                            No recent orders.
                        </TableCell>
                    </TableRow>
                ) : (
                    recentOrders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>
                            <Badge variant="outline">{order.status}</Badge>
                        </TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell className="text-right">{order.total}</TableCell>
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
