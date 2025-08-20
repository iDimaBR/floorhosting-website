import { Accordion } from "../../components/ui/accordion";
import FAQItem from "../../components/FAQItem";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the 30-day guarantee work?",
      answer:
        "We offer a full 30-day guarantee. If you are not satisfied with our services for any reason, we refund 100% of the amount paid, no questions asked. Simply contact our support within the first 30 days after purchase.",
    },
    {
      question: "Do you offer free migration?",
      answer:
        "Yes! Our technical team will handle a complete migration of your website for free. This includes transferring files, databases, emails, and settings. The process usually takes 24-48 hours and is done without interrupting your current site.",
    },
    {
      question: "What is the account activation time?",
      answer:
        "Accounts are automatically activated after payment confirmation. For credit card or PIX payments, activation is immediate. For bank slips, activation occurs within 2 business days after clearing.",
    },
    {
      question: "How does technical support work?",
      answer: "We offer 24/7 support via online chat, email, and phone. Our team consists of web hosting specialists ready to help with any technical issue. Average email response time is 2 hours.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan at any time through the control panel or by contacting support. Upgrades are charged proportionally for the remaining period. Downgrades are adjusted at the next renewal.",
    },
    {
      question: "Are backups automatic?",
      answer: "Yes, we perform daily automatic backups of all files and databases. Backups are kept for 30 days and can be restored at any time via the control panel or by contacting support.",
    },
    {
      question: "How does free SSL work?",
      answer:
        "All our plans include a free Let's Encrypt SSL certificate, automatically installed upon account activation. The certificate is automatically renewed every 90 days, ensuring your site is always protected.",
    },
    {
      question: "Are there traffic or bandwidth limits?",
      answer:
        "We do not impose strict traffic limits. Our plans include 'unlimited' traffic for normal website usage. Only in cases of abuse or DDoS attacks might we temporarily limit traffic to protect our servers.",
    },
    {
      question: "Can I host multiple websites?",
      answer:
        "It depends on the chosen plan. The Starter plan allows 1 site, Professional allows up to 5 sites, and Business/Enterprise plans allow unlimited sites. All sites share the plan's resources (storage, email, etc.).",
    },
    {
      question: "What is the refund policy?",
      answer:
        "In addition to the 30-day guarantee, we offer proportional refunds for cancellations. For annual contracts, refunds are calculated proportionally to the unused period, subtracting any discounts received at purchase.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#ffffff] text-[#1a1a1a]">
      <section className="bg-gradient-to-br from-[#ffffff] to-[#f5f4f7] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently <span className="text-[#6b21a8]">Asked Questions</span>
            </h1>
            <p className="text-lg text-[#777177]">
              Find answers to the most common questions about our hosting services. If you can't find what you're looking for, our support team is always ready to help.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4 slide-up">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} value={`item-${index}`} />
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#f5f4f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto fade-in">
            <h2 className="text-3xl font-bold mb-4">Didn't find your answer?</h2>
            <p className="text-[#777177] mb-8">Our specialized support team is available 24/7 to help with any questions or technical issues.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#ffffff] rounded-lg p-6 border border-[#d6cce1]">
                <h3 className="font-semibold mb-2">Online Chat</h3>
                <p className="text-sm text-[#777177]">Available 24/7 in the control panel</p>
              </div>
              <div className="bg-[#ffffff] rounded-lg p-6 border border-[#d6cce1]">
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-[#777177]">support@floorhosting.com</p>
              </div>
              <div className="bg-[#ffffff] rounded-lg p-6 border border-[#d6cce1]">
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-[#777177]">+55 (11) 9999-9999</p>
              </div>
            </div>
            <Button size="lg">Contact Support</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
