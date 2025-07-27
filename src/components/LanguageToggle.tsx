import React from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  isHindi: boolean;
  onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ isHindi, onToggle }) => {
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={onToggle}
      className="fixed top-4 right-4 z-50"
    >
      <Languages className="h-4 w-4 mr-2" />
      {isHindi ? "English" : "हिंदी"}
    </Button>
  );
};

export default LanguageToggle;