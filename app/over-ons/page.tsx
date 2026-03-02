"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Brain,
  Users2,
  Phone,
  ArrowRight,
  Users,
  Target,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import TagBadge from "@/components/TagBadge";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

const values = [
  {
    icon: Building2,
    title: "Gebouwd voor architecten",
    description:
      "Niet nog een generieke opslagtool. Elk detail is ontworpen vanuit hoe architectenbureaus werken.",
  },
  {
    icon: Brain,
    title: "Spreekt jullie vaktaal",
    description:
      "Beeldenbank herkent rabatdelen, cortenstaal en visgraatvloeren. Geen generieke tags, maar jullie taal.",
  },
  {
    icon: Users2,
    title: "Simpel genoeg voor het hele team",
    description:
      "Geen IT-afdeling nodig. Als je kunt googelen, kun je Beeldenbank gebruiken.",
  },
  {
    icon: Phone,
    title: "Altijd bereikbaar",
    description:
      "Wij zijn geen callcenter. Je hebt direct contact met de mensen die het product bouwen.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function OverOnsPage() {
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
            <TagBadge className="mb-6">Over ons</TagBadge>
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-text sm:text-5xl">
              <span className="font-heading">Twee ondernemers, </span>
              <span className="font-display italic text-primary">één missie</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-[1.7] text-text-muted">
              We snappen hoe frustrerend het is om die ene foto niet te vinden.
              Daarom bouwen we de tool die architectenbureaus verdienen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ Verhaal ═══ */}
      <SectionWrapper bgColor="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <TagBadge className="mb-4">Ons verhaal</TagBadge>
            <h2 className="mb-5 text-2xl font-bold tracking-[-0.03em] text-text sm:text-3xl">
              <span className="font-heading">Vanuit frustratie naar </span>
              <span className="font-display italic">oplossing</span>
            </h2>
            <div className="space-y-4 text-base leading-[1.7] text-text-muted">
              <p>
                Beeldenbank is ontstaan vanuit een simpele observatie: architectenbureaus
                besteden een enorme hoeveelheid tijd aan het zoeken, ordenen en
                terugvinden van projectfoto&apos;s. Foto&apos;s verspreid over
                mappen, drives, USB-sticks en e-mails.
              </p>
              <p>
                We zijn geen groot techbedrijf — we zijn twee ondernemers die
                dit probleem willen oplossen. Door continu met bureaus te praten,
                te testen en te verbeteren, bouwen we een product dat echt
                aansluit bij jullie werkwijze.
              </p>
              <p>
                Na maanden van gesprekken met architectenbureaus is Beeldenbank
                ontstaan — een beeldenbank die je vaktaal begrijpt en die je
                team dagelijks kan gebruiken zonder handleiding.
              </p>
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Founder 1 */}
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/5">
                    <Users size={36} className="text-primary/30" />
                  </div>
                  <h3 className="text-base font-semibold text-text">
                    Wester Roeffel
                  </h3>
                  <p className="text-sm text-text-muted">
                    AI & Sales
                  </p>
                </div>
                {/* Founder 2 */}
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/5">
                    <Users size={36} className="text-primary/30" />
                  </div>
                  <h3 className="text-base font-semibold text-text">
                    Lars Roeffel
                  </h3>
                  <p className="text-sm text-text-muted">
                    Product & Engineering
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-tag-bg p-4 text-center">
                <p className="font-annotation text-base text-primary">
                  &quot;We bouwen de tool die architectenbureaus verdienen — praktisch, snel, en zonder gedoe.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ═══ Missie ═══ */}
      <SectionWrapper bgColor="bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <TagBadge className="mb-4">Onze missie</TagBadge>
          <h2 className="mb-5 text-2xl font-bold tracking-[-0.03em] text-text sm:text-3xl">
            <span className="font-heading">Minder zoeken, meer </span>
            <span className="font-display italic">ontwerpen</span>
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-base leading-[1.7] text-text-muted">
            Onze missie is simpel: architectenbureaus bevrijden van repetitief
            werk. Slim beeldbeheer geeft jullie de ruimte voor wat echt telt —
            ontwerpen.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="group rounded-2xl border border-border bg-background p-7 transition-all duration-200 ease-out hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(27,59,42,0.08)]"
              variants={fadeUp}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-tag-bg text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-accent">
                <value.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text">
                {value.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-text-muted">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ═══ Contact ═══ */}
      <SectionWrapper bgColor="bg-background" id="contact">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <TagBadge className="mb-4">Contact</TagBadge>
            <h2 className="mb-5 font-heading text-2xl font-bold tracking-[-0.03em] text-text sm:text-3xl">
              Neem contact op
            </h2>
            <p className="mb-8 text-base leading-[1.7] text-text-muted">
              Heb je vragen over Beeldenbank? Wil je een demo? Of gewoon even
              sparren over hoe wij jullie bureau kunnen helpen? We horen graag van je.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tag-bg text-primary">
                  <Target size={18} />
                </div>
                <div>
                  <p className="font-medium text-text">E-mail</p>
                  <p>info@lyfta.nl</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tag-bg text-primary">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="font-medium text-text">Locatie</p>
                  <p>Lelystad, Nederland</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="rounded-2xl border border-border bg-surface p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm />
          </motion.div>
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
          <h2 className="mb-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            <span className="font-heading">Klaar om </span>
            <span className="font-display italic">samen te werken</span>
            <span className="font-heading">?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-[1.7] text-white/70">
            Benieuwd wat Beeldenbank voor jullie bureau kan betekenen? We laten
            het je graag zien.
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
