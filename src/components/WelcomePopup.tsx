import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const WelcomePopup = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 1 minute
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleGetOffer = () => {
    setIsOpen(false);
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-card border border-border">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
        </button>

        <DialogHeader className="text-center space-y-4 pt-6">
          <DialogTitle className="text-2xl font-bold text-foreground">
            {t('popup.title')}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Otevřete vlastní kávovnu za pouhých{" "}
              <span className="font-bold text-primary">318 000 Kč</span>
            </p>
            
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">
                70 000 Kč
              </div>
              <div className="text-sm text-muted-foreground">
                měsíční výnos od
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Omezeného počtu franchis na rok 2025
            </p>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleGetOffer}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Chci získat nabídku
            </Button>
            <Button 
              onClick={handleClose}
              variant="outline"
              className="flex-1"
            >
              Možná později
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;