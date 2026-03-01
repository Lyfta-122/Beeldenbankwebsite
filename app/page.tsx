"use client";

import { motion } from "framer-motion";
import {
  Search,
  Upload,
  Sparkles,
  Tag,
  FolderOpen,
  Users,
  BookOpen,
  Building2,
  TreePine,
  Palette,
  Home,
  Landmark,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import DashboardMockup from "@/components/DashboardMockup";
import FeatureCard from "@/components/FeatureCard";
import TagBadge from "@/components/TagBadge";

/* ─── Stagger container ─── */
const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ─── Data ─── */
const features = [
  {
    icon: Tag,
    title: "AI-tagging met vakjargon",
    description:
      "Automatische tags zoals 'gevel', 'baksteen', 'duurzaam' — in de taal van architecten.",
  },
  {
    icon: Search,
    title: "Semantic search",
    description:
      "Zoek op beschrijvingen als 'modern kantoor met groene gevel' en vind exact wat je bedoelt.",
  },
  {
    icon: FolderOpen,
    title: "Projectmappen",
    description:
      "Organiseer foto's per project, fase of locatie. Altijd overzicht, nooit chaos.",
  },
  {
    icon: Users,
    title: "Team accounts",
    description:
      "Werk samen met je team. Deel favorieten, geef feedback en houd alles centraal.",
  },
  {
    icon: Upload,
    title: "Bulk upload",
    description:
      "Sleep honderden foto's tegelijk. AI analyseert alles automatisch op de achtergrond.",
  },
  {
    icon: BookOpen,
    title: "Vocabulaire beheer",
    description:
      "Pas het AI-vocabulaire aan op jouw bureau. Voeg vaktermen toe die voor jullie relevant zijn.",
  },
];

const doelgroepen = [
  { icon: Building2, label: "Architectenbureaus" },
  { icon: TreePine, label: "Landschapsarchitecten" },
  { icon: Palette, label: "Interieurarchitecten" },
  { icon: Home, label: "Woningbouwers" },
  { icon: Landmark, label: "Erfgoedspecialisten" },
  { icon: Users, label: "Vastgoedontwikkelaars" },
];

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload je foto's",
    description:
      "Sleep foto's of volledige mappen naar Beeldenbank. Bulk upload van honderden bestanden tegelijk.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI analyseert alles",
    description:
      "Onze AI herkent materialen, stijlen, omgevingen en details — en voegt automatisch vakjargon-tags toe.",
  },
  {
    icon: Search,
    step: "03",
    title: "Zoek en vind",
    description:
      "Typ wat je zoekt in gewone taal. De juiste foto's verschijnen in seconden, niet in uren.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-surface pb-16 pt-12 md:pb-24 md:pt-20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <TagBadge className="mb-6">
                <Sparkles size={14} className="mr-1.5" />
                AI-powered beeldmanagement
              </TagBadge>
            </motion.div>

            <motion.h1
              className="mb-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-text sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Vind elke projectfoto{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                in seconden
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-xl text-lg leading-[1.7] text-text-muted"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Architectenbureaus verspillen gemiddeld 200 uur per jaar aan het
              zoeken naar de juiste foto. Beeldenbank organiseert al je
              projectbeelden met AI — zodat jij kunt ontwerpen.
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Button variant="primary" size="lg" href="#">
                Vraag een demo aan
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="/features">
                Bekijk features
              </Button>
            </motion.div>
          </div>

          {/* Dashboard mockup */}
          <div className="mt-16 md:mt-20">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ═══════════ PROBLEEM ═══════════ */}
      <SectionWrapper bgColor="bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <TagBadge className="mb-4">Het probleem</TagBadge>
          <h2 className="mb-5 font-heading text-3xl font-bold tracking-[-0.03em] text-text sm:text-4xl">
            Je weet dat die foto bestaat — maar je kunt hem niet vinden
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-base leading-[1.7] text-text-muted">
            Mapjes op de server, foto&apos;s op persoonlijke harde schijven, Google
            Drive, USB-sticks, e-mail bijlages. Iedereen heeft zijn eigen systeem.
            Het resultaat: je gebruikt een mindere foto in je offerte, of grijpt
            naar een stock foto — terwijl de perfecte opname ergens in je archief
            zit.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: "200+", label: "uur per jaar verspild aan zoeken" },
            { value: "50.000+", label: "foto's gemiddeld per bureau" },
            { value: "10+", label: "opslaglocaties per team" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-border bg-surface p-8 text-center"
              variants={fadeUp}
            >
              <p className="mb-2 font-heading text-4xl font-extrabold tracking-tight text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ═══════════ OPLOSSING (3 stappen) ═══════════ */}
      <SectionWrapper bgColor="bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <TagBadge className="mb-4">Zo werkt het</TagBadge>
          <h2 className="mb-5 font-heading text-3xl font-bold tracking-[-0.03em] text-text sm:text-4xl">
            Van chaos naar overzicht in 3 stappen
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-base leading-[1.7] text-text-muted">
            Geen ingewikkelde setup. Upload je foto&apos;s en laat AI het werk
            doen.
          </p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl border border-border bg-background p-8"
              variants={fadeUp}
            >
              <span className="mb-4 block font-heading text-sm font-bold text-accent-dark">
                Stap {s.step}
              </span>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent">
                <s.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text">
                {s.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-text-muted">
                {s.description}
              </p>
              {i < 2 && (
                <div className="pointer-events-none absolute top-1/2 -right-4 hidden h-px w-8 bg-border md:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ═══════════ FEATURES ═══════════ */}
      <SectionWrapper bgColor="bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <TagBadge className="mb-4">Features</TagBadge>
          <h2 className="mb-5 font-heading text-3xl font-bold tracking-[-0.03em] text-text sm:text-4xl">
            Alles wat je nodig hebt, niets dat je niet nodig hebt
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-base leading-[1.7] text-text-muted">
            Beeldenbank is specifiek gebouwd voor de werkwijze van
            architectenbureaus.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              icon={f.icon}
              title={f.title}
              description={f.description}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ═══════════ DOELGROEPEN ═══════════ */}
      <SectionWrapper bgColor="bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <TagBadge className="mb-4">Voor wie</TagBadge>
          <h2 className="mb-5 font-heading text-3xl font-bold tracking-[-0.03em] text-text sm:text-4xl">
            Gebouwd voor de architectuursector
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-base leading-[1.7] text-text-muted">
            Van landschapsontwerp tot interieur — elke discipline die met
            projectfoto&apos;s werkt.
          </p>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {doelgroepen.map((d, i) => (
            <motion.div
              key={i}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-200 ease-out hover:border-primary/20 hover:shadow-[0_4px_20px_rgba(27,59,42,0.06)]"
              variants={fadeUp}
              whileHover={{ y: -2 }}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tag-bg text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-accent">
                <d.icon size={20} strokeWidth={1.5} />
              </div>
              <span className="text-base font-medium text-text">
                {d.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
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
            Klaar om je beeldenbank te transformeren?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-[1.7] text-white/70">
            We laten je graag zien hoe het werkt — met jullie eigen foto&apos;s.
            Geen verplichtingen, geen creditcard nodig.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="#">
              Vraag een demo aan
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/pricing"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Bekijk pricing
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
