"use client";

import { motion } from "framer-motion";
import { Check, Minus, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import TagBadge from "@/components/TagBadge";
import PricingCard from "@/components/PricingCard";
import FAQItem from "@/components/FAQItem";
import Button from "@/components/Button";

const plans = [
  {
    name: "Starter",
    price: "€149",
    description: "Perfect voor kleine bureaus die grip willen op hun beeldarchief.",
    features: [
      "Tot 25.000 afbeeldingen",
      "5 teamleden",
      "Automatisch taggen",
      "Zoek in gewone taal",
      "Vocabulaire beheer",
      "Bulk upload",
      "Favorieten & collecties",
      "5 projectmappen",
      "E-mail support",
    ],
  },
  {
    name: "Professional",
    price: "€249",
    description: "Voor groeiende bureaus die het maximale uit hun beeldarchief halen.",
    features: [
      "Tot 100.000 afbeeldingen",
      "15 teamleden",
      "Automatisch taggen + vocabulaire beheer",
      "Zoek in gewone taal + filters",
      "Onbeperkt projectmappen",
      "Favorieten & collecties",
      "Bulk upload & export",
      "Prioriteit support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Op aanvraag",
    period: "",
    description: "Volledig maatwerk voor grote bureaus en organisaties.",
    features: [
      "Onbeperkt afbeeldingen",
      "Onbeperkt teamleden",
      "Alles in Professional",
      "Op maat inrichten",
      "API-toegang",
      "SSO & geavanceerde beveiliging",
      "Dedicated account manager",
      "SLA met 99.9% uptime",
    ],
    ctaText: "Neem contact op",
  },
];

const comparisonFeatures = [
  { feature: "Afbeeldingen", starter: "25.000", pro: "100.000", enterprise: "Onbeperkt" },
  { feature: "Teamleden", starter: "5", pro: "15", enterprise: "Onbeperkt" },
  { feature: "Automatisch taggen", starter: true, pro: true, enterprise: true },
  { feature: "Zoek in gewone taal", starter: true, pro: true, enterprise: true },
  { feature: "Projectmappen", starter: "5", pro: "Onbeperkt", enterprise: "Onbeperkt" },
  { feature: "Vocabulaire beheer", starter: true, pro: true, enterprise: true },
  { feature: "Bulk upload", starter: true, pro: true, enterprise: true },
  { feature: "Favorieten & collecties", starter: true, pro: true, enterprise: true },
  { feature: "API-toegang", starter: false, pro: false, enterprise: true },
  { feature: "Op maat inrichten", starter: false, pro: false, enterprise: true },
  { feature: "SSO", starter: false, pro: false, enterprise: true },
  { feature: "SLA", starter: false, pro: false, enterprise: true },
];

const faqs = [
  {
    question: "Kan ik Beeldenbank eerst gratis proberen?",
    answer:
      "Ja! Vraag een demo aan en we laten je het systeem zien met jullie eigen foto's. Geen creditcard nodig, geen verplichtingen.",
  },
  {
    question: "Wat gebeurt er als ik mijn limiet bereik?",
    answer:
      "We sturen je een melding als je 80% van je limiet bereikt. Je kunt dan eenvoudig upgraden naar een hoger plan. Je bestaande data blijft altijd behouden.",
  },
  {
    question: "Kan ik op elk moment opzeggen?",
    answer:
      "Ja, je kunt op elk moment opzeggen. Er is geen langetermijncontract. Na opzegging heb je nog toegang tot het einde van je huidige factureringsperiode.",
  },
  {
    question: "Welke bestandsformaten worden ondersteund?",
    answer:
      "Beeldenbank ondersteunt JPG, JPEG, PNG, TIFF, WebP en RAW-formaten (CR2, NEF, ARW). Bestanden worden automatisch geoptimaliseerd voor snelle weergave.",
  },
  {
    question: "Hoe veilig is mijn data?",
    answer:
      "Alle data wordt versleuteld opgeslagen (AES-256) en versleuteld verstuurd (TLS 1.3). Onze servers staan in de EU en we zijn volledig GDPR-compliant.",
  },
  {
    question: "Kan ik mijn bestaande foto's importeren?",
    answer:
      "Ja, je kunt mappen en bestanden uploaden via drag-and-drop, of verbinden met bestaande cloudopslag zoals Google Drive en Dropbox (Professional en hoger).",
  },
  {
    question: "Hoe lang duurt het om te starten?",
    answer:
      "Na een kort onboardinggesprek kun je direct foto's uploaden. Alles wordt meteen automatisch verwerkt. Bij 50.000 foto's is je hele archief snel volledig doorzoekbaar.",
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={16} className="text-accent-dark" strokeWidth={2.5} />
    ) : (
      <Minus size={16} className="text-text-muted/30" />
    );
  }
  return <span className="text-sm text-text">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="bg-surface pb-16 pt-12 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <TagBadge className="mb-6">Pricing</TagBadge>
            <h1 className="mb-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-text sm:text-5xl">
              Transparante prijzen,{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                geen verrassingen
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-[1.7] text-text-muted">
              Kies het plan dat past bij de omvang van je bureau. Upgrade of
              downgrade wanneer je wilt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ Pricing cards ═══ */}
      <SectionWrapper bgColor="bg-background" className="!pt-0">
        <div className="grid items-start gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              period={plan.name === "Enterprise" ? "" : "/maand"}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              ctaText={plan.ctaText}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ═══ Comparison table ═══ */}
      <SectionWrapper bgColor="bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold tracking-[-0.03em] text-text sm:text-3xl">
            Vergelijk alle features
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-base leading-[1.7] text-text-muted">
            Een gedetailleerd overzicht van wat elk plan bevat.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 text-left text-sm font-semibold text-text">
                  Feature
                </th>
                <th className="pb-4 text-center text-sm font-semibold text-text">
                  Starter
                </th>
                <th className="pb-4 text-center text-sm font-semibold text-primary">
                  Professional
                </th>
                <th className="pb-4 text-center text-sm font-semibold text-text">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-border/50 last:border-b-0"
                >
                  <td className="py-3.5 text-sm text-text-muted">
                    {row.feature}
                  </td>
                  <td className="py-3.5 text-center">
                    <div className="flex justify-center">
                      <CellValue value={row.starter} />
                    </div>
                  </td>
                  <td className="py-3.5 text-center">
                    <div className="flex justify-center">
                      <CellValue value={row.pro} />
                    </div>
                  </td>
                  <td className="py-3.5 text-center">
                    <div className="flex justify-center">
                      <CellValue value={row.enterprise} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* ═══ FAQ ═══ */}
      <SectionWrapper bgColor="bg-background">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <TagBadge className="mb-4">FAQ</TagBadge>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.03em] text-text sm:text-3xl">
              Veelgestelde vragen
            </h2>
          </div>
          <div className="rounded-2xl border border-border bg-surface px-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ═══ CTA ═══ */}
      <section className="grain-texture relative overflow-hidden bg-primary-dark py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-primary-light/30 blur-3xl" />
        </div>
        <motion.div
          className="relative mx-auto max-w-3xl px-5 text-center sm:px-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="mb-5 font-heading text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            Benieuwd wat Beeldenbank voor jouw bureau kan betekenen?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-[1.7] text-white/70">
            We laten je graag zien hoe het werkt — met jullie eigen foto&apos;s.
            Geen verplichtingen, geen creditcard nodig.
          </p>
          <Button variant="primary" size="lg" href="#">
            Vraag een demo aan
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </section>
    </>
  );
}
