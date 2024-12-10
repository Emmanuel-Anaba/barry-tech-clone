"use client";
import { contactRef } from "@/lib/lists";
import ContactForm from "./contactform";
import { MdFingerprint } from "react-icons/md";

export default function Contact() {
  return (
    <section ref={contactRef} className="py-12">
      <h2>
        Get In T<MdFingerprint size={20} />
        uch
      </h2>
      <div className="my-container grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xl font-semibold">Contact Information</p>
          <ul className="space-y-2">
            <li>Address: 2 Cleveland Cresent, Orimerunmu, Ogun, Nigeria</li>
            <li>Phone: +2341234567890</li>
            <li>Email: info@secureadvanceinnovation.com</li>
          </ul>
          <p className="mb-4 mt-8 text-xl font-semibold">Business Hours</p>
          <ul className="space-y-2">
            <li>Monday to Friday: 9AM - 6PM</li>
            <li>Saturday: 10AM - 4PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
