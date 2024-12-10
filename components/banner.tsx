"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "./ui/button";
import { sectionRefs } from "@/lib/lists";

const banners = [
  {
    title: "Photo Studio and Graphics",
    description:
      "Transform moments into timeless art with professional photography editing. Preserve your memories perfectly",
    image: "/banner-1.png",
  },
  {
    title: "Computer Training Center",
    description:
      "Unlock your digital potential. Learn from experts. Get certified. From basics to advanced programming.",
    image: "/banner-2.png",
  },
  {
    title: "Computer Service and Printing",
    description:
      "Power up your productivity, with fast, reliable and affordable solutions to all your computer needs",
    image: "/banner-3.png",
  },
];

export default function Banner() {
  return (
    <section ref={sectionRefs[0]}>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000 }}
        className="h-svh">
        {banners.map(({ image, title, description }, index) => (
          <SwiperSlide key={index} style={{ backgroundImage: `url(${image})` }}>
            <div className="overlay" />
            <div className="content">
              <h1 className="mb-4">{title}</h1>
              <p>{description}</p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
