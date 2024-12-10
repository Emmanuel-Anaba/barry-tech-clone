"use client";
import { contactRef } from "@/lib/lists";
import { Button } from "./ui/button";

export default function CtaSection() {
  return (
    <section className="py-12">
      <div className="my-container relative grid place-items-center gap-12 rounded-xl py-12">
        <div className="conic-gradient" />
        <h1 className="text-center">
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
