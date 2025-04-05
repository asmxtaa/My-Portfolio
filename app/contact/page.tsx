"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Send a message</h2>
          <form className="space-y-4">
            <div>
              <Input placeholder="Your Name" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="h-32" />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <p>mandalasmita2024@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <p>+91 9836756282</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <p>Odisha, Bhubaneshwar</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}