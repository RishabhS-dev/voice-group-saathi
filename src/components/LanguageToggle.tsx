import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages, ChevronDown } from 'lucide-react';
import { INDIAN_LANGUAGES, getLanguageByCode } from '@/constants/languages';

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (languageCode: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = getLanguageByCode(currentLanguage);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="fixed top-4 right-4 z-50 min-w-[120px]"
        >
          <Languages className="h-4 w-4 mr-2" />
          <span className="flex-1 text-left">
            {currentLang?.nativeName || 'हिंदी'}
          </span>
          <ChevronDown className="h-3 w-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-56 max-h-96 overflow-y-auto"
        sideOffset={5}
      >
        {INDIAN_LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {
              onLanguageChange(language.code);
              setIsOpen(false);
            }}
            className={`cursor-pointer ${
              currentLanguage === language.code 
                ? 'bg-accent text-accent-foreground' 
                : ''
            }`}
          >
            <div className="flex flex-col">
              <span className="font-medium">{language.nativeName}</span>
              <span className="text-xs text-muted-foreground">{language.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;