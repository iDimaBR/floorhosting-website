import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f4f7] border-t border-[#d6cce1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold text-[#3b2c3b]">Floor Hosting</span>
            </div>
            <p className="text-[#777177] text-sm">Reliable and professional hosting for your online project.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#3b2c3b] mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[#777177] hover:text-[#3b2c3b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#777177] hover:text-[#3b2c3b] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-[#777177] hover:text-[#3b2c3b] transition-colors">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-[#777177] hover:text-[#3b2c3b] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#3b2c3b] mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-[#777177]">
              <li>Shared Hosting</li>
              <li>VPS</li>
              <li>Dedicated Hosting</li>
              <li>Cloud Hosting</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#3b2c3b] mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-[#777177] mb-4">
              <p>contact@floorhosting.com</p>
              <p>+55 (11) 9999-9999</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-[#777177] hover:text-[#6b21a8] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#777177] hover:text-[#6b21a8] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#777177] hover:text-[#6b21a8] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#777177] hover:text-[#6b21a8] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#d6cce1] mt-8 pt-8 text-center">
          <p className="text-sm text-[#777177]">© 2025 Floor Hosting. All rights reserved.</p>
          <p className="text-sm text-[#4d4a4d]">
            Made with ❤️ by <a href="https://github.com/iDimaBR">@rapha.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
