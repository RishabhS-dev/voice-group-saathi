import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MapPin, Clock } from 'lucide-react';

import { Translations } from '@/constants/translations';

interface OrderCardProps {
  order: string;
  translations: Translations;
  onJoinGroup: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, translations, onJoinGroup }) => {
  return (
    <Card className="w-full max-w-md mx-auto shadow-warm border-2 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-center text-primary">
          {translations.yourOrder}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-accent/20 p-4 rounded-lg">
          <p className="text-lg font-semibold text-center text-foreground">
            "{order}"
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          <div className="flex flex-col items-center">
            <Users className="h-5 w-5 text-primary mb-1" />
            <span className="text-muted-foreground">
              3 {translations.buyers}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="h-5 w-5 text-secondary mb-1" />
            <span className="text-muted-foreground">
              500m {translations.away}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-5 w-5 text-accent mb-1" />
            <span className="text-muted-foreground">
              2 {translations.mins}
            </span>
          </div>
        </div>
        
        <Button 
          onClick={onJoinGroup}
          className="w-full"
          size="lg"
        >
          {translations.joinGroupOrder}
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderCard;