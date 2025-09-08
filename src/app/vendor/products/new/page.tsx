
"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Upload, Camera, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NewProductPage() {
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | undefined>(undefined);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    return () => {
      // Stop camera stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageDataUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const enableCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setHasCameraPermission(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasCameraPermission(false);
      toast({
        variant: 'destructive',
        title: 'Camera Access Denied',
        description: 'Please enable camera permissions in your browser settings to use this feature.',
      });
    }
  };

  const handleTabChange = (value: string) => {
    if (value === 'camera') {
      enableCamera();
    } else {
      // Stop camera stream when switching away
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    }
  }

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const dataUrl = canvas.toDataURL('image/png');
        setImageDataUrl(dataUrl);
      }
    }
  };

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
                
                <div className="space-y-4">
                  <Label>Product Image</Label>
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div className="space-y-4">
                      <Tabs defaultValue="upload" className="w-full" onValueChange={handleTabChange}>
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="upload"><Upload className="mr-2 h-4 w-4" />Upload</TabsTrigger>
                          <TabsTrigger value="camera"><Camera className="mr-2 h-4 w-4" />Take Photo</TabsTrigger>
                        </TabsList>
                        <TabsContent value="upload">
                           <Label htmlFor="product-image-upload" className="cursor-pointer border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors">
                              <Upload className="w-8 h-8 text-muted-foreground" />
                              <span className="mt-2 text-sm font-semibold">Click to upload an image</span>
                              <span className="mt-1 text-xs text-muted-foreground">PNG, JPG, or GIF up to 10MB</span>
                           </Label>
                           <Input id="product-image-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                        </TabsContent>
                        <TabsContent value="camera">
                          <div className="space-y-4">
                            <div className="w-full aspect-video bg-muted rounded-md overflow-hidden flex items-center justify-center">
                              <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
                              <canvas ref={canvasRef} className="hidden" />
                            </div>
                            {hasCameraPermission === false && (
                               <Alert variant="destructive">
                                  <Camera className="h-4 w-4" />
                                  <AlertTitle>Camera Access Required</AlertTitle>
                                  <AlertDescription>
                                    Please allow camera access to use this feature. You may need to change permissions in your browser settings.
                                  </AlertDescription>
                                </Alert>
                            )}
                            <Button type="button" onClick={captureImage} disabled={!hasCameraPermission} className="w-full">
                                <Camera className="mr-2 h-4 w-4"/>
                                Capture Image
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <div className="space-y-2">
                      <Label>Image Preview</Label>
                      <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                        {imageDataUrl ? (
                          <Image src={imageDataUrl} alt="Product preview" width={400} height={400} className="object-cover w-full h-full" />
                        ) : (
                          <div className="text-center text-muted-foreground">
                            <ImageIcon className="w-12 h-12 mx-auto" />
                            <p className="mt-2 text-sm">Your image will appear here</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
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
                <div className="flex justify-end gap-2 pt-4 border-t">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Product</Button>
                </div>
            </form>
        </CardContent>
      </Card>
    </div>
  );
}
