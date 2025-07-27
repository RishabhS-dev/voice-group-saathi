import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

interface AIAssistantProps {
  isHindi: boolean;
  showOrderConfirmation: boolean;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isHindi, showOrderConfirmation }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (showOrderConfirmation) {
      setMessage(isHindi 
        ? "आपका ऑर्डर ग्रुप में जोड़ दिया गया है।" 
        : "Your order has been added to a group.");
      setIsVisible(true);
    } else {
      setMessage(isHindi 
        ? "नमस्ते! आपका ऑर्डर रिकॉर्ड करने के लिए mic बटन दबाइए।" 
        : "Namaste! Press mic button to record your order.");
    }
  }, [isHindi, showOrderConfirmation]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <Card className="bg-gradient-primary text-primary-foreground shadow-glow border-none">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="bg-primary-foreground/20 p-2 rounded-full flex-shrink-0">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm leading-relaxed">{message}</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAssistant;