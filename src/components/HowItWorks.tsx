import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Users, MessageSquare, PiggyBank } from 'lucide-react';
import howItWorksImage from '@/assets/how-it-works.jpg';

import { Translations } from '@/constants/translations';

interface HowItWorksProps {
  translations: Translations;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ translations }) => {
  const steps = [
    {
      icon: Mic,
      title: isHindi ? "बोलें" : "Speak",
      description: isHindi ? "अपना ऑर्डर बोलकर बताएं" : "Voice your order"
    },
    {
      icon: Users,
      title: isHindi ? "ग्रुप" : "Group",
      description: isHindi ? "AI आसपास के खरीदारों को जोड़ता है" : "AI groups nearby buyers"
    },
    {
      icon: MessageSquare,
      title: isHindi ? "मैसेज" : "Message",
      description: isHindi ? "सप्लायर को बल्क SMS भेजा जाता है" : "Bulk SMS sent to suppliers"
    },
    {
      icon: PiggyBank,
      title: isHindi ? "बचत" : "Save",
      description: isHindi ? "सभी को कम कीमत मिलती है" : "Everyone gets lower prices"
    }
  ];

  return (
    <Card className="w-full shadow-warm">
      <CardHeader>
        <CardTitle className="text-center text-primary text-xl">
          {translations.howItWorks}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative">
          <img 
            src={howItWorksImage} 
            alt="How it works" 
            className="w-full h-32 sm:h-40 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-accent rounded-lg p-4 text-center">
          <p className="text-accent-foreground font-semibold">
            {isHindi 
              ? "📱 पढ़ना-लिखना नहीं आता? कोई बात नहीं! बस बोलिए और बचत करिए।" 
              : "📱 Can't read or write? No problem! Just speak and save money."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HowItWorks;