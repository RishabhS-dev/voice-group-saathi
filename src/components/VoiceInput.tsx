import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';

interface VoiceInputProps {
  onVoiceInput: (transcript: string) => void;
  isHindi: boolean;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onVoiceInput, isHindi }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const simulateVoiceInput = () => {
    if (isRecording) {
      setIsRecording(false);
      setIsProcessing(true);
      
      // Simulate processing time
      setTimeout(() => {
        const sampleOrders = isHindi 
          ? ["5kg tamatar chahiye", "2kg pyaaz mangta hai", "3kg aloo chahiye"] 
          : ["Need 5kg tomatoes", "Want 2kg onions", "Need 3kg potatoes"];
        
        const randomOrder = sampleOrders[Math.floor(Math.random() * sampleOrders.length)];
        onVoiceInput(randomOrder);
        setIsProcessing(false);
      }, 2000);
    } else {
      setIsRecording(true);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Button
        variant="voice"
        size="voice"
        onClick={simulateVoiceInput}
        disabled={isProcessing}
        className={`${isRecording ? 'animate-pulse shadow-glow' : ''} ${isProcessing ? 'opacity-75' : ''}`}
      >
        {isRecording ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
      </Button>
      
      <div className="text-center">
        <p className="text-lg font-semibold text-foreground">
          {isProcessing 
            ? (isHindi ? "आपका ऑर्डर प्रोसेस हो रहा है..." : "Processing your order...")
            : isRecording 
              ? (isHindi ? "बोलिए..." : "Speak now...")
              : (isHindi ? "ऑर्डर रिकॉर्ड करने के लिए दबाएं" : "Press to record your order")
          }
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {isHindi ? "(जैसे: 5kg टमाटर चाहिए)" : "(e.g., Need 5kg tomatoes)"}
        </p>
      </div>
    </div>
  );
};

export default VoiceInput;