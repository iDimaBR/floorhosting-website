import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

const PricingCard = ({ title, price, description, features, isPopular = false, buttonText = "Choose Plan" }: PricingCardProps) => {
  return (
    <Card className={`relative h-full flex flex-col justify-between transition-all duration-300 ${isPopular ? "border-[#6b21a8] shadow-lg" : "border-[#d6cce1] hover:shadow-md"}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#6b21a8] text-[#ffffff] text-xs font-medium px-3 py-1 rounded-full">Most Popular</span>
        </div>
      )}

      <CardHeader className="text-center pb-6">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-3xl font-bold text-[#6b21a8]">{price}</span>
          <span className="text-[#777177]">/month</span>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="pt-0 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="h-4 w-4 text-[#6b21a8] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-[#777177]">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="p-4 pt-0">
        <Button className="w-full" variant={isPopular ? "default" : "outline"}>
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
