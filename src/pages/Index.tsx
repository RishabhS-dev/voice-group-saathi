import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, HelpCircle } from 'lucide-react';
import VoiceInput from '@/components/VoiceInput';
import OrderCard from '@/components/OrderCard';
import MapView from '@/components/MapView';
import GroupOrderStatus from '@/components/GroupOrderStatus';
import SupplierMessage from '@/components/SupplierMessage';
import HowItWorks from '@/components/HowItWorks';
import LanguageToggle from '@/components/LanguageToggle';
import AIAssistant from '@/components/AIAssistant';
import { useLanguage } from '@/hooks/useLanguage';

const Index = () => {
  const { currentLanguage, translations, changeLanguage } = useLanguage('hi');
  const [currentOrder, setCurrentOrder] = useState<string>('');
  const [hasJoinedGroup, setHasJoinedGroup] = useState(false);
  const [showSupplierMessage, setShowSupplierMessage] = useState(false);
  const [currentBuyers] = useState(7);
  const [targetBuyers] = useState(10);

  const handleVoiceInput = (transcript: string) => {
    setCurrentOrder(transcript);
  };

  const handleJoinGroup = () => {
    setHasJoinedGroup(true);
  };

  const handleViewSupplierMessage = () => {
    setShowSupplierMessage(true);
  };

  const isGroupComplete = currentBuyers >= targetBuyers;

  return (
    <div className="min-h-screen bg-gradient-warm">
      <LanguageToggle 
        currentLanguage={currentLanguage} 
        onLanguageChange={changeLanguage} 
      />
      
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-6 shadow-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">{translations.appTitle}</h1>
          <p className="text-lg opacity-90">
            {translations.appSubtitle}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Voice Input Section */}
          <section className="text-center">
            <VoiceInput onVoiceInput={handleVoiceInput} translations={translations} />
          </section>

          {/* Order Card */}
          {currentOrder && !hasJoinedGroup && (
            <section>
              <OrderCard 
                order={currentOrder} 
                translations={translations}
                onJoinGroup={handleJoinGroup}
              />
            </section>
          )}

          {/* Main Content Grid */}
          {hasJoinedGroup && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Map View */}
              <section>
                <MapView translations={translations} />
              </section>

              {/* Group Order Status */}
              <section>
                <GroupOrderStatus 
                  translations={translations}
                  currentBuyers={currentBuyers}
                  targetBuyers={targetBuyers}
                  timeLeft="15 min"
                  onViewSupplierMessage={handleViewSupplierMessage}
                />
              </section>
            </div>
          )}

          {/* Supplier Message Modal */}
          {showSupplierMessage && (
            <section>
              <SupplierMessage 
                translations={translations}
                onClose={() => setShowSupplierMessage(false)}
              />
            </section>
          )}

          {/* How It Works */}
          <section>
            <HowItWorks translations={translations} />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {translations.callSupport}
            </Button>
            <Button variant="ghost" size="lg" className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              {translations.faqsForVendors}
            </Button>
          </div>
          <div className="text-center mt-6 text-muted-foreground">
            <p>{translations.saveMoneyTogether}</p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant translations={translations} showOrderConfirmation={hasJoinedGroup} />
    </div>
  );
};

export default Index;