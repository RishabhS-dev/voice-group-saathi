import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';

import { Translations } from '@/constants/translations';

interface VoiceInputProps {
  onVoiceInput: (transcript: string) => void;
  translations: Translations;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onVoiceInput, translations }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const simulateVoiceInput = () => {
    if (isRecording) {
      setIsRecording(false);
      setIsProcessing(true);
      
      // Simulate processing time
      setTimeout(() => {
        const sampleOrders = ["5kg tamatar chahiye", "2kg pyaaz mangta hai", "3kg aloo chahiye"];
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
            ? "आपका ऑर्डर प्रोसेस हो रहा है..."
            : isRecording 
              ? "बोलिए..."
              : translations.pressMicButton
          }
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {translations.voiceInputPlaceholder}
        </p>
      </div>
    </div>
  );
};

export default VoiceInput;