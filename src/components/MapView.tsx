import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, ShoppingBasket } from 'lucide-react';
import mapImage from '@/assets/map-view.jpg';

import { Translations } from '@/constants/translations';

interface MapViewProps {
  translations: Translations;
}

const MapView: React.FC<MapViewProps> = ({ translations }) => {
  const activeOrders = [
    { id: 1, item: "टमाटर", buyers: 7, distance: "200m" },
    { id: 2, item: "प्याज", buyers: 5, distance: "350m" },
    { id: 3, item: "आलू", buyers: 9, distance: "450m" },
  ];

  return (
    <Card className="w-full shadow-warm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <MapPin className="h-6 w-6" />
          {translations.nearbyGroups}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <img 
            src={mapImage} 
            alt="Map view" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
        </div>
        
        <div className="space-y-3">
          {activeOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <ShoppingBasket className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{order.item}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{order.buyers} {translations.buyers}</span>
                    <span>•</span>
                    <span>{order.distance}</span>
                  </div>
                </div>
              </div>
              <div className="bg-success/20 text-success px-2 py-1 rounded-full text-xs font-medium">
                {isHindi ? "सक्रिय" : "Active"}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MapView;