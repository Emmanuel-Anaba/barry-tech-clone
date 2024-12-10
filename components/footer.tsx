import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { PiEnvelope, PiMapPin, PiPhone } from "react-icons/pi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  const contactInfo = [
    {
      Icon: PiPhone,
      text: "+2341234567890",
    },
    {
      Icon: PiMapPin,
      text: "Orimerunmu, Ogun, Nigeria",
    },
    {
      Icon: PiEnvelope,
      text: "info@secureadvanceinnovation.com",
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="my-container">
        <div className="grid gap-8 py-12 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Join our <span className="text-primary">community</span> today
            </h3>
            <p className="mb-6 text-muted-foreground">
              Join 100+ individuals and businesses who use our services to
              receive update about our solutions.
            </p>
            <div className="flex max-w-md space-x-2">
              <Input type="email" placeholder="Email Address" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mb-4 text-lg font-semibold">Contact</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {contactInfo.map(({ Icon, text }, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <Icon size={16} /> <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground">
                  <FaFacebookF className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground">
                  <FaXTwitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground">
                  <FaLinkedinIn className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground">
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground">
                  <FaYoutube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Secure Advance Innovation. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:underline">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
