"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { AlertTriangle, MapPin } from "lucide-react";

type MapViewProps = {
  lat: number;
  lng: number;
  storeName: string;
};

export default function MapView({ lat, lng, storeName }: MapViewProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full min-h-[200px] w-full items-center justify-center rounded-lg bg-muted">
        <div className="text-center text-muted-foreground">
          <AlertTriangle className="mx-auto h-8 w-8 text-amber-500" />
          <p className="mt-2 font-semibold">Map not available</p>
          <p className="text-sm">Google Maps API key is missing.</p>
        </div>
      </div>
    );
  }

  const position = { lat, lng };

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-full min-h-[400px] w-full">
        <Map
          defaultCenter={position}
          defaultZoom={15}
          mapId="localiq-map"
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          <AdvancedMarker position={position} title={storeName}>
            <MapPin className="h-8 w-8 text-primary drop-shadow-md" />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
