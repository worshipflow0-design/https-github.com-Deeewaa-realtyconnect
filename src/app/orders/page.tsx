import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";
import { orders } from "@/lib/data";
import { format } from "date-fns";

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
            <Package className="w-6 h-6" />
            <CardTitle>My Orders</CardTitle>
        </div>
        <CardDescription>View your past and current orders.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Store</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.code}</TableCell>
                <TableCell>{order.store.name}</TableCell>
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
                <TableCell className="text-right">${order.totals.total.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
