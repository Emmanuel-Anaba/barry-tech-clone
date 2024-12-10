"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionRefs } from "@/lib/lists";
import {
  FaComputerMouse,
  FaGraduationCap,
  FaTrophy,
  FaUsers,
} from "react-icons/fa6";

export default function AboutUs() {
  const values = [
    {
      Icon: FaTrophy,
      text: "Excellence in service",
    },
    {
      Icon: FaUsers,
      text: "Customer-centric approach",
    },
    {
      Icon: FaGraduationCap,
      text: "Continuous learning",
    },
    {
      Icon: FaComputerMouse,
      text: "Technological innovation",
    },
  ];

  return (
    <section ref={sectionRefs[1]} className="py-12 relative">
      <div className="conic-gradient" />
      <h2>Who We Are</h2>
      <div className="my-container grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We are committed to empowering individuals and businesses
                through innovative technology solutions. We strive to bridge the
                digital divide by providing accessible, high-quality services
                that enhance productivity, creativity, and digital literacy.
              </p>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardHeader>
              <CardTitle>Our Core Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {values.map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-1">
                  <Icon size={16} />
                  {text}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Image
            src="/about-us.jpg"
            alt="Team working together"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
