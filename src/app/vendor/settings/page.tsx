
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Settings, Upload, Camera, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

export default function VendorSettingsPage() {
  return (
    <div className="space-y-8">
       <div>
         <h1 className="text-3xl font-bold font-headline flex items-center gap-3">
            <Settings className="w-8 h-8" />
            Store Settings
         </h1>
         <p className="text-muted-foreground">Manage your store's information and appearance.</p>
       </div>
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>Update your store's public details.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20 rounded-lg">
            <AvatarImage src="https://picsum.photos/200" data-ai-hint="company logo" />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Your Store</h3>
            <p className="text-muted-foreground">Update your store logo and cover image.</p>
            <Button variant="outline" size="sm">Change Logo</Button>
          </div>
        </div>
        
        <Separator />
        
        <form className="space-y-6 max-w-2xl">
          <div className="space-y-2">
            <Label htmlFor="store-name">Store Name</Label>
            <Input id="store-name" defaultValue="My Awesome Store" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="store-description">Store Description</Label>
            <Textarea id="store-description" defaultValue="The best place to find amazing products." />
          </div>
          
           <div className="space-y-2">
                <Label>Cover Image</Label>
                <div className="w-full aspect-video relative rounded-lg bg-muted flex items-center justify-center overflow-hidden border">
                    <Image src={"https://picsum.photos/800/400"} alt="Cover preview" layout="fill" objectFit="cover" data-ai-hint="store cover" />
                    <Button variant="secondary" className="absolute bottom-4 right-4">
                        <Upload className="mr-2 h-4 w-4"/>
                        Change Cover
                    </Button>
                </div>
            </div>

          <div className="flex justify-end pt-4 border-t">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>

      </CardContent>
    </Card>
    </div>
  );
}
