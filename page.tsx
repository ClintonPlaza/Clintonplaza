"use client";
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import Image from "next/image";

export default function Home() {
  const tenants = [
    { name: "Family Dollar", description: "Discount retail chain offering household goods, food, and more." },
    { name: "Boost Mobile", description: "Wireless service and mobile phones." },
    { name: "City Trends", description: "Trendy urban clothing and accessories at affordable prices." },
    { name: "Barber Shop", description: "Local barbers offering expert cuts and grooming." }
  ];

  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      <header className="text-center space-y-4">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Clinton Plaza Logo" width={200} height={200} />
        </div>
        <h1 className="text-4xl font-bold">Clinton Plaza Shopping Center</h1>
        <p className="text-lg">Retail space available in a high-traffic location — Wilson, NC</p>
      </header>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Now Leasing</h2>
        <p className="max-w-xl mx-auto">Clinton Plaza offers competitive rates, high visibility, and a strong customer base. Perfect for retail, service, or office space.</p>
        <Button className="text-lg">Contact Us to Lease</Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Our Tenants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tenants.map((tenant, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">{tenant.name}</h3>
                <p>{tenant.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" rows={5} required />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600 space-y-2">
          <p><strong>Mailing Address:</strong> Clinton Plaza / Granny Scott LLC, PO BOX 7742, Wilson, NC 27895</p>
          <p><strong>Deanne Worrell:</strong> Cell: 252-315-6516 | Email: <a href="mailto:Sdworrell79@yahoo.com" className="text-blue-500 underline">Sdworrell79@yahoo.com</a></p>
          <p><strong>Derrick Scott:</strong> Cell: 252-236-7635</p>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Clinton Plaza. All rights reserved.
      </footer>
    </div>
  );
}
