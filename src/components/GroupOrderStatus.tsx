import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Users, Clock, CheckCircle } from 'lucide-react';

import { Translations } from '@/constants/translations';

interface GroupOrderStatusProps {
  translations: Translations;
  currentBuyers: number;
  targetBuyers: number;
  timeLeft: string;
  onViewSupplierMessage: () => void;
}

const GroupOrderStatus: React.FC<GroupOrderStatusProps> = ({ 
  translations,
  currentBuyers, 
  targetBuyers, 
  timeLeft,
  onViewSupplierMessage 
}) => {
  const progress = (currentBuyers / targetBuyers) * 100;
  const isComplete = currentBuyers >= targetBuyers;

  return (
    <Card className="w-full shadow-warm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Users className="h-6 w-6" />
          {translations.groupOrderStatus}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            {currentBuyers}/{targetBuyers}
          </div>
          <p className="text-muted-foreground">
            {isHindi ? "खरीदार शामिल हुए" : "buyers joined"}
          </p>
        </div>

        <Progress value={progress} className="h-3" />

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{timeLeft} {isHindi ? "बचा है" : "left"}</span>
          </div>
          {isComplete && (
            <div className="flex items-center gap-1 text-success">
              <CheckCircle className="h-4 w-4" />
              <span>{isHindi ? "पूरा हुआ!" : "Complete!"}</span>
            </div>
          )}
        </div>

        {isComplete ? (
          <div className="space-y-3">
            <div className="bg-success/20 border border-success/30 rounded-lg p-4 text-center">
              <p className="text-success font-semibold">
                {isHindi 
                  ? "🎉 ग्रुप ऑर्डर तैयार! सप्लायर को मैसेज भेजा गया।" 
                  : "🎉 Group order ready! Message sent to suppliers."}
              </p>
            </div>
            <Button 
              variant="success" 
              onClick={onViewSupplierMessage}
              className="w-full"
              size="lg"
            >
              {isHindi ? "सप्लायर मैसेज देखें" : "View Supplier Message"}
            </Button>
          </div>
        ) : (
          <div className="bg-accent/20 border border-accent/30 rounded-lg p-4 text-center">
            <p className="text-accent-foreground">
              {isHindi 
                ? `अभी ${targetBuyers - currentBuyers} और खरीदार चाहिए` 
                : `Need ${targetBuyers - currentBuyers} more buyers`}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GroupOrderStatus;