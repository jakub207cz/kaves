import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cooperationModel: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            cooperation_model: formData.cooperationModel || null,
            message: formData.message || null,
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: t('contact.formSuccess'),
        description: t('contact.formSuccessDesc'),
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        cooperationModel: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: t('contact.formError'),
        description: t('contact.formErrorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Function to handle scroll and focus
  const handleScrollAndFocus = () => {
    const formSection = document.getElementById('contact-form-section');
    const firstInput = document.getElementById('first-input');
    
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Small delay to ensure the form is in view before focusing
    setTimeout(() => {
      if (firstInput) {
        firstInput.focus();
      }
    }, 500);
  };

  return (
    <section id="contact-form-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/foto-uploads/c070cc0f-12b7-4933-b65b-885e034832df.png" alt={t('alt.kavesLogo')} className="h-10 w-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="coffee-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t('contact.formTitle')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    {t('contact.name')} *
                  </label>
                  <Input
                    id="first-input"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={t('contact.namePlaceholder')}
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    {t('contact.email')} *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={t('contact.emailPlaceholder')}
                    required
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    {t('contact.phone')} *
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder={t('contact.phonePlaceholder')}
                    required
                    className="bg-input border-border"
                  />
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    {t('contact.cooperationModel')}
                  </label>
                  <Select onValueChange={(value) => handleInputChange("cooperationModel", value)}>
                    <SelectTrigger className="bg-input border-border w-full">
                      <SelectValue placeholder={t('contact.selectModel')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nakup">{t('contact.buyModel')}</SelectItem>
                      <SelectItem value="pronajem">{t('contact.rentModel')}</SelectItem>
                      <SelectItem value="sdileni">{t('contact.shareModel')}</SelectItem>
                      <SelectItem value="nevim">{t('contact.dontKnowModel')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  {t('contact.message')}
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder={t('contact.messagePlaceholder')}
                  className="bg-input border-border min-h-24"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full mb-2" disabled={isSubmitting}>
                {isSubmitting ? t('contact.submitting') : t('contact.getOffer')}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                {t('contact.privacyText')} {" "}
                <Link 
                  to="/zasady-ochrany-osobnich-udaju" 
                  className="text-primary hover:underline"
                >
                  {t('contact.privacyLink')}
                </Link>
                .
              </p>
            </form>
          </Card>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            <Card className="coffee-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {t('contact.contactInfo')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img src="/foto-uploads/phone.png" alt={t('alt.phoneIcon')} className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-foreground">{t('contact.phone')}</div>
                    <div className="text-muted-foreground">+420 777 445 798</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src="/foto-uploads/email.png" alt="E-mail" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-foreground">{t('contact.email')}</div>
                    <div className="text-muted-foreground">info@joinkaves.cz</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src="/foto-uploads/socialmedia.png" alt={t('alt.socialMediaIcon')} className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-foreground">Instagram</div>
                    <div className="text-muted-foreground">@kaves_cz</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="coffee-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {t('contact.benefits.title')}
              </h3>
              <ul className="space-y-3">
                {(t('contact.benefits.items', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="coffee-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('contact.fastResponse.title')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('contact.fastResponse.subtitle')}
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-primary font-semibold">⚡ {t('contact.fastResponse.express')}</div>
                <div className="text-foreground text-sm">{t('contact.fastResponse.callDirect')}</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;