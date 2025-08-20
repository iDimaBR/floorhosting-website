import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Shield, Zap, Clock, Headphones } from "lucide-react";
import heroImage from "@/assets/host.gif";
import LottieAnimation from "@/components/Lottie";

const features = [
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Free SSL protection and automatic backups to ensure your data is safe.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Ultra-fast SSD servers with global CDN for maximum speed.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "We guarantee maximum availability with redundant infrastructure and 24/7 monitoring.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Technical team available 24/7 to help whenever you need it.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <section className="relative pt-30 pb-16 overflow-hidden bg-gradient-to-br from-[#ffffff] to-[#f5f4f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-8 animate-fade-in max-w-lg">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1a1a1a]">
                  Reliable
                  <span className="text-[#6b21a8] block">Hosting</span>
                  for your project
                </h1>
                <p className="text-lg text-[#777177]">Have peace of mind knowing your website is in good hands. We offer robust infrastructure, expert support, and exceptional performance.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/services">View Plans</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#6b21a8] text-[#6b21a8]">
                  Talk to an Expert
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-[#777177]">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#6b21a8] rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-lg hidden lg:block">
              <LottieAnimation />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1a1a1a]">Why choose Floor Hosting?</h2>
            <p className="text-lg max-w-2xl mx-auto text-[#777177]">We combine cutting-edge technology with personalized service to deliver the best web hosting experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`text-center border border-[#d6cce1]`}>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-[#6b21a8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-[#6b21a8]" />
                  </div>
                  <CardTitle className="text-lg text-[#1a1a1a]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#777177]">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#6b21a8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#ffffff]">Ready to get started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-[#ffffffCC] font-semibold">
            Try our hosting for 30 days risk-free.
            <br />
            If you're not satisfied, we'll refund your money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">Get Started Now</Link>
            </Button>
            <Button size="lg" variant="secondary">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
