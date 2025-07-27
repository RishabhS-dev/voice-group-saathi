import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Copy, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import { Translations } from '@/constants/translations';

interface SupplierMessageProps {
  translations: Translations;
  onClose: () => void;
}

const SupplierMessage: React.FC<SupplierMessageProps> = ({ translations, onClose }) => {
  const { toast } = useToast();

  const messageText = isHindi 
    ? "🛒 नमस्ते! 10 दुकानदार मिलकर 100kg प्याज ₹30/kg पर खरीदना चाहते हैं। कुल: ₹3,000। आज दोपहर 2 बजे डिलीवरी। रुचि है तो कॉल करें: 98765-43210"
    : "🛒 Hello! 10 vendors want to buy 100kg onions at ₹30/kg. Total: ₹3,000. Delivery today 2 PM. Interested? Call: 98765-43210";

  const copyMessage = () => {
    navigator.clipboard.writeText(messageText);
    toast({
      title: isHindi ? "कॉपी हो गया!" : "Copied!",
      description: isHindi ? "मैसेज कॉपी हो गया है" : "Message copied to clipboard",
    });
  };

  return (
    <Card className="w-full shadow-warm border-2 border-success/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-success">
          <MessageSquare className="h-6 w-6" />
          {isHindi ? "सप्लायर को भेजा गया मैसेज" : "Message Sent to Suppliers"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-success/10 border border-success/20 rounded-lg p-4">
          <p className="text-foreground leading-relaxed">
            {messageText}
          </p>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={copyMessage}
            className="flex-1"
          >
            <Copy className="h-4 w-4 mr-2" />
            {isHindi ? "कॉपी करें" : "Copy"}
          </Button>
          <Button 
            variant="secondary"
            className="flex-1"
          >
            <Phone className="h-4 w-4 mr-2" />
            {isHindi ? "कॉल करें" : "Call"}
          </Button>
        </div>

        <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
          <p className="text-sm text-accent-foreground">
            💰 {isHindi 
              ? "अनुमानित बचत: ₹200-500 प्रति व्यक्ति" 
              : "Estimated savings: ₹200-500 per person"}
          </p>
        </div>

        <Button 
          variant="ghost" 
          onClick={onClose}
          className="w-full"
        >
          {isHindi ? "बंद करें" : "Close"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SupplierMessage;