import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <User className="w-6 h-6" />
          <CardTitle>My Profile</CardTitle>
        </div>
        <CardDescription>Manage your personal information and settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://picsum.photos/200/200" data-ai-hint="person avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">User</h3>
            <p className="text-muted-foreground">user@email.com</p>
            <Button variant="outline" size="sm">Change Photo</Button>
          </div>
        </div>
        
        <Separator />
        
        <form className="space-y-6 max-w-lg">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="User" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue="user@email.com" />
          </div>
           <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+1 234 567 890" />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>

        <Separator />

         <div className="space-y-4">
            <h3 className="text-lg font-semibold">Security</h3>
             <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                    <Label>Password</Label>
                    <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                </div>
                <Button variant="outline">Change Password</Button>
             </div>
         </div>

      </CardContent>
    </Card>
  );
}
