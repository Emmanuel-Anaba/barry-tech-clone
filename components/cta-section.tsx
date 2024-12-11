"use client";
import { contactRef } from "@/lib/lists";
import { Button } from "./ui/button";

export default function CtaSection() {
  return (
    <section className="py-12  relative">
      <div className="conic-gradient" />
      <div className="my-container grid place-items-center gap-12 rounded-xl py-12 glass">
        <h1 className="text-center gradient-text">
          Ready To Transform Your Digital Experience?
        </h1>
        <Button
          size="lg"
          className="rounded-full"
          onClick={() => contactRef.current?.scrollIntoView()}>
          Contact Us
        </Button>
      </div>
    </section>
  );
}
