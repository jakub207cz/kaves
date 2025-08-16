import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: t('faq.questions.investment'),
      answer: t('faq.questions.investmentAnswer')
    },
    {
      question: t('faq.questions.profit'),
      answer: t('faq.questions.profitAnswer')
    },
    {
      question: t('faq.questions.operation'),
      answer: t('faq.questions.operationAnswer')
    },
    {
      question: t('faq.questions.water'),
      answer: t('faq.questions.waterAnswer')
    },
    {
      question: t('faq.questions.payback'),
      answer: t('faq.questions.paybackAnswer')
    },
    {
      question: t('faq.questions.costs'),
      answer: t('faq.questions.costsAnswer')
    },
    {
      question: t('faq.questions.coffeeType'),
      answer: t('faq.questions.coffeeTypeAnswer')
    },
    {
      question: t('faq.questions.payment'),
      answer: t('faq.questions.paymentAnswer')
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="coffee-card overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 coffee-transition"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-primary text-xl">👉</span>
                  <h3 className="font-semibold text-foreground text-lg">{faq.question}</h3>
                </div>
                <span className={`text-primary text-2xl coffee-transition ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  ↓
                </span>
              </button>
              
              <div className={`overflow-hidden coffee-transition ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 pt-0 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <Card className="coffee-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('faq.stillQuestions')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('faq.happyToAnswer')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText('+420 777 445 798');
                    // Show feedback
                    const button = document.getElementById('phone-button');
                    if (button) {
                      const originalText = button.innerHTML;
                      button.innerHTML = `<Check className="w-4 h-4 mr-2" /> ${t('faq.copied')}`;
                      button.classList.add('bg-green-600', 'hover:bg-green-700');
                      
                      // Reset after 2 seconds
                      setTimeout(() => {
                        button.innerHTML = originalText;
                        button.classList.remove('bg-green-600', 'hover:bg-green-700');
                      }, 2000);
                    }
                  } catch (err) {
                    console.error('Failed to copy phone number: ', err);
                  }
                }}
                id="phone-button"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 coffee-transition flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +420 777 445 798
              </button>
              <button 
                onClick={() => {
                  window.location.href = 'mailto:info@kaves.cz';
                }}
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-semibold hover:bg-secondary/90 coffee-transition"
              >
                {t('faq.writeEmail')}
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;