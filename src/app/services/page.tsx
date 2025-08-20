import { Button } from "@/components/ui/button";
import PricingCard from "../../components/PricingCard";
import { Shield, Zap, Clock, Headphones, Globe, Repeat, Lock, Star } from "lucide-react";

const features = [
  { name: "Uptime 99.9%", icon: Shield },
  { name: "24/7 Support", icon: Headphones },
  { name: "Free SSL", icon: Lock },
  { name: "cPanel Dashboard", icon: Star },
  { name: "Optimized WordPress", icon: Zap },
  { name: "Free Migration", icon: Repeat },
  { name: "Automatic Backup", icon: Clock },
  { name: "DDoS Protection", icon: Globe },
];

const Services = () => {
  const plans = [
    {
      title: "Starter",
      price: "$ 15",
      description: "Perfect for personal websites and small projects",
      features: ["1 Site included", "5 GB SSD storage", "Unlimited traffic", "Free SSL", "Weekly backup", "Email support", "Intuitive control panel"],
    },
    {
      title: "Professional",
      price: "$ 35",
      description: "Ideal for businesses and higher-traffic websites",
      features: ["5 Sites included", "25 GB SSD storage", "Unlimited traffic", "Free SSL", "Daily backup", "24/7 priority support", "Free CDN", "Unlimited databases", "Professional email"],
      isPopular: true,
    },
    {
      title: "Business",
      price: "$ 65",
      description: "For large projects and high demand",
      features: [
        "Unlimited sites",
        "100 GB SSD storage",
        "Unlimited traffic",
        "Free SSL",
        "Automatic daily backup",
        "Dedicated 24/7 support",
        "Premium CDN",
        "Free staging site",
        "Unlimited professional email",
        "Performance analytics",
      ],
    },
    {
      title: "Enterprise",
      price: "$ 120",
      description: "Complete solution for large companies",
      features: [
        "Unlimited sites",
        "250 GB SSD storage",
        "Unlimited traffic",
        "Free SSL",
        "Real-time backup",
        "Dedicated account manager",
        "Enterprise CDN",
        "Development environments",
        "Unlimited corporate email",
        "Advanced monitoring",
        "Custom firewall",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#ffffff] to-[#f5f4f7] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-6">
              Hosting <span className="text-[#6b21a8]">Plans</span>
            </h1>
            <p className="text-lg text-[#777177] mb-8">Choose the ideal plan for your project. All include expert support, robust infrastructure, and a 30-day money-back guarantee.</p>
            <div className="flex flex-col md:flex-row items-center md:justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-[#777177]">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#22c55e] rounded-full"></div>
                <span>Free migration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#6b21a8] rounded-full"></div>
                <span>Instant setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                <span>30-day guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`slide-up stagger-${index + 1}`}>
                <PricingCard title={plan.title} price={plan.price} description={plan.description} features={plan.features} isPopular={plan.isPopular} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f4f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">Features Included in All Plans</h2>
            <p className="text-lg text-[#777177] max-w-2xl mx-auto">Regardless of the chosen plan, you will have access to essential features to keep your website online with top quality.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-[#ffffff] rounded-xl p-6 shadow-md flex flex-col items-center border border-[#d6cce1]">
                  <div className="mb-4 p-3 bg-[#6b21a8]/10 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#6b21a8]" />
                  </div>
                  <h3 className="font-semibold text-[#3b2c3b] text-center">{feature.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Still have questions?</h2>
            <p className="text-[#777177] mb-8">Check our FAQ section or contact our team of experts.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/faq">
                <Button size="lg" variant="default">
                  View FAQ
                </Button>
              </a>
              <a href="#">
                <Button size="lg" variant="outline">
                  Talk to an Expert
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
