import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

const orders = [
  { id: "#3210", date: "July 20, 2024", status: "Delivered", total: "$42.50", store: "GreenLeaf Organics" },
  { id: "#3209", date: "July 18, 2024", status: "Cancelled", total: "$120.00", store: "Urban Threads Boutique" },
  { id: "#3205", date: "July 15, 2024", status: "Delivered", total: "$249.99", store: "GadgetHub" },
  { id: "#3201", date: "July 12, 2024", status: "Delivered", total: "$15.75", store: "GreenLeaf Organics" },
];

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
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.store}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      order.status === "Delivered" ? "default" :
                      order.status === "Cancelled" ? "destructive" :
                      "secondary"
                    }
                    className={order.status === "Delivered" ? "bg-green-600" : ""}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
