import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Provide reliable and affordable web hosting solutions, empowering businesses and individuals to thrive in the digital environment with robust infrastructure and exceptional support.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "Become the preferred hosting platform for developers and businesses that value performance, security, and personalized service, establishing ourselves as a market reference.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Transparency, innovation, reliability, and customer focus. We believe technology should serve people, not the other way around, prioritizing long-lasting relationships.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#ffffff] text-[#1a1a1a]">
      <section className="bg-gradient-to-br from-[#ffffff] to-[#f5f4f7] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-[#6b21a8]">Floor Hosting</span>
            </h1>
            <p className="text-lg text-[#777177] leading-relaxed">
              Since 2018, we have helped thousands of clients get their projects online with security, performance, and dedicated support. Our journey began with a simple vision: democratize access to
              quality web hosting.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 fade-in">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <div className="space-y-4 text-[#777177] leading-relaxed">
                  <p>Floor Hosting was born from the need to offer a hosting service that genuinely cares about the success of its clients. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                  </p>
                </div>
              </div>

              <div className="slide-up stagger-2">
                <div className="bg-gradient-to-br from-[#6b21a8]/10 to-[#6b21a8]/5 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-[#6b21a8] mb-2">5K+</div>
                      <div className="text-sm text-[#777177]">Active Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#6b21a8] mb-2">99.9%</div>
                      <div className="text-sm text-[#777177]">Uptime Guaranteed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#6b21a8] mb-2">24/7</div>
                      <div className="text-sm text-[#777177]">Technical Support</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#6b21a8] mb-2">6+</div>
                      <div className="text-sm text-[#777177]">Years of Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#f5f4f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Pillars</h2>
            <p className="text-lg text-[#777177] max-w-2xl mx-auto">The values that guide us in building solid relationships and delivering exceptional services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className={`text-center border border-[#d6cce1] hover:shadow-md transition-all duration-300 slide-up stagger-${index + 1}`}>
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-[#6b21a8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-[#6b21a8]" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-[#777177] max-w-2xl mx-auto">Passionate professionals dedicated to providing the best web hosting experience.</p>
          </div>

          <div className="text-center slide-up stagger-2">
            <div className="bg-[#f2f0f5] rounded-2xl p-12 max-w-2xl mx-auto">
              <p className="text-[#777177] italic mb-6">
                Our team consists of infrastructure, development, and customer support specialists. We work tirelessly to ensure each client has an exceptional experience with us.
              </p>
              <div className="text-sm text-[#777177]">— Floor Hosting Team</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
