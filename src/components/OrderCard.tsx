import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MapPin, Clock } from 'lucide-react';

interface OrderCardProps {
  order: string;
  isHindi: boolean;
  onJoinGroup: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, isHindi, onJoinGroup }) => {
  return (
    <Card className="w-full max-w-md mx-auto shadow-warm border-2 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-center text-primary">
          {isHindi ? "आपका ऑर्डर" : "Your Order"}
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
              {isHindi ? "3 खरीदार" : "3 buyers"}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="h-5 w-5 text-secondary mb-1" />
            <span className="text-muted-foreground">
              {isHindi ? "500m दूर" : "500m away"}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-5 w-5 text-accent mb-1" />
            <span className="text-muted-foreground">
              {isHindi ? "2 मिनट" : "2 mins"}
            </span>
          </div>
        </div>
        
        <Button 
          onClick={onJoinGroup}
          className="w-full"
          size="lg"
        >
          {isHindi ? "ग्रुप ऑर्डर में शामिल हों" : "Join Group Order"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderCard;