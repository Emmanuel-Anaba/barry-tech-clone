"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Scrollspy } from "@makotot/ghostui";
import { cn } from "@/lib/utils";
import { contactRef, navLinks, sectionRefs } from "@/lib/lists";

export default function Navbar() {
  return (
    <header>
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="SAI Logo" width={75} height={24} />
        </Link>
        <Scrollspy offset={-80} sectionRefs={sectionRefs}>
          {({ currentElementIndexInViewport: n }) => (
            <nav>
              {navLinks.map((link, i) => (
                <span
                  key={i}
                  className={cn(n === i && "active")}
                  onClick={() => sectionRefs[i].current.scrollIntoView()}>
                  {link}
                </span>
              ))}
            </nav>
          )}
        </Scrollspy>
        <div>
          <ThemeToggle />
          <Button
            className="rounded-full"
            onClick={() => contactRef.current?.scrollIntoView()}>
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
