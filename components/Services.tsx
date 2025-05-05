import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Legal Document Review",
      description:
        "Get your contracts and agreements reviewed by experienced attorneys",
      features: [
        "24-hour turnaround",
        "Plain language feedback",
        "Legal risk assessment",
      ],
    },
    {
      title: "Legal Consultations",
      description: "One-on-one video consultations with specialized attorneys",
      features: [
        "30 or 60 minute sessions",
        "Specific legal advice",
        "Follow-up summaries",
      ],
    },
    {
      title: "Dispute Resolution",
      description: "Professional mediation and negotiation services",
      features: [
        "Neutral third-party mediators",
        "Binding and non-binding options",
        "Virtual sessions available",
      ],
    },
    {
      title: "Business Compliance",
      description: "Keep your business legally compliant and up-to-date",
      features: [
        "Regulatory monitoring",
        "Compliance reports",
        "Policy updates",
      ],
    },
  ];

  return (
    <section id="services" className="lawduel-section bg-white">
      <div className="lawduel-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lawduel-navy mb-4">
            Our Legal Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert legal help accessible to individuals and businesses of all
            sizes. Our network of attorneys provides the services you need at
            transparent prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="lawduel-card">
              <CardHeader>
                <CardTitle className="text-xl text-lawduel-navy">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-lawduel-orange mr-2 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
