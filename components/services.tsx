"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionRefs } from "@/lib/lists";
import { cn } from "@/lib/utils";
import {
  FaCloud,
  FaCode,
  FaGraduationCap,
  FaHandshake,
  FaShieldAlt,
  FaWrench,
} from "react-icons/fa";

const services = [
  {
    title: "IT Consulting & Support",
    description:
      "Our team provides reliable IT consulting and support to streamline your operations and optimize your technology infrastructure.",
    Icon: FaHandshake,
    color: { bg: "bg-blue-100", text: "text-blue-600" },
  },
  {
    title: "Networking & Cybersecurity",
    description:
      "Secure your business operations with our robust networking solutions and proactive cybersecurity strategies.",
    Icon: FaShieldAlt,
    color: { bg: "bg-green-100", text: "text-green-600" },
  },
  {
    title: "Cloud Solutions & Hosting",
    description:
      "Leverage reliable cloud solutions and hosting services tailored to your business needs for scalability and performance.",
    Icon: FaCloud,
    color: { bg: "bg-red-100", text: "text-red-600" },
  },
  {
    title: "Training and Certification Programs",
    description:
      "Upskill yourself or your team with our expert-led training and certification programs, covering the latest technologies.",
    Icon: FaGraduationCap,
    color: { bg: "bg-purple-100", text: "text-purple-600" },
  },
  {
    title: "Custom Software Development",
    description:
      "Build tailored software solutions to meet your unique business requirements, ensuring efficiency and scalability.",
    Icon: FaCode,
    color: { bg: "bg-yellow-100", text: "text-yellow-600" },
  },
  {
    title: "Technical Support and Maintenance",
    description:
      "Receive ongoing technical support and system maintenance to keep your operations running smoothly.",
    Icon: FaWrench,
    color: { bg: "bg-orange-100", text: "text-orange-600" },
  },
];

export default function Services() {
  return (
    <section ref={sectionRefs[2]} className="py-12">
      <h2>What We Offer</h2>
      <div className="my-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(
          ({ Icon, title, description, color: { bg, text } }, i) => (
            <Card key={i} className="border shadow-lg">
              <CardHeader>
                <div
                  className={cn(
                    "w-14 h-14 grid place-items-center rounded-full p-2 mb-4",
                    bg
                  )}>
                  <Icon size={32} className={text} />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
}
