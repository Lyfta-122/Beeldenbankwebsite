"use client";

import { motion } from "framer-motion";
import {
  Search,
  Upload,
  Tag,
  FolderOpen,
  Users,
  BookOpen,
  Building2,
  ArrowRight,
  Quote,
  Check,
} from "lucide-react";
import Button from "@/components/Button";
import DashboardMockup from "@/components/DashboardMockup";
import FeatureCard from "@/components/FeatureCard";
import TagBadge from "@/components/TagBadge";

/* ─── Animation helpers ─── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
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
    title: "Automatisch getagd met vakjargon",
    description:
      "Upload een foto en hij wordt direct herkend. Materialen, stijlen, elementen — in de taal die jullie dagelijks gebruiken.",
  },
  {
    icon: Search,
    title: "Zoek in gewone taal",
    description:
      "Typ 'moderne villa met houten gevel' en vind precies wat je zoekt. Geen bestandsnamen onthouden.",
  },
  {
    icon: FolderOpen,
    title: "Projectmappen",
    description:
      "Orden foto's per project, fase of locatie. Je hele team ziet hetzelfde overzicht.",
  },
  {
    icon: Users,
    title: "Team accounts",
    description:
      "Iedereen zijn eigen login, eigen favorieten. Geen gedeelde Google Drive meer.",
  },
  {
    icon: Upload,
    title: "Bulk upload",
    description:
      "Sleep een hele projectmap erin. Alles wordt automatisch verwerkt.",
  },
  {
    icon: BookOpen,
    title: "Vocabulaire beheer",
    description:
      "Voeg jullie eigen vaktermen toe. De zoekfunctie leert mee met hoe jullie zoeken.",
  },
];

const doelgroepen = [
  { label: "Architectenbureaus", description: "Projectfoto's, renders en opleveringen overzichtelijk" },
  { label: "Landschapsarchitecten", description: "Beplanting, materialen en buitenruimtes direct vindbaar" },
  { label: "Interieurarchitecten", description: "Materiaalpaletten, sfeerbeelden en details op één plek" },
  { label: "Woningbouwers", description: "Bouwfases en opleveringsfoto's gestructureerd" },
  { label: "Erfgoedspecialisten", description: "Monumentdetails en restauratiefoto's gearchiveerd" },
  { label: "Vastgoedontwikkelaars", description: "Projectdocumentatie en visualisaties centraal" },
];

const steps = [
  { icon: Upload, step: "01", title: "Upload je foto's", description: "Sleep foto's of volledige mappen naar Beeldenbank. Bulk upload van honderden bestanden tegelijk." },
  { icon: Tag, step: "02", title: "Automatisch herkend en getagd", description: "Materialen, stijlen, omgevingen en details worden automatisch herkend — en voorzien van tags in jullie vaktaal." },
  { icon: Search, step: "03", title: "Zoek en vind", description: "Typ wat je zoekt in gewone taal. De juiste foto's verschijnen in seconden, niet in uren." },
];

const testimonials = [
  { quote: "Eindelijk geen uren meer zoeken naar die ene foto.", author: "Projectleider", company: "architectenbureau" },
  { quote: "Het hele team gebruikt het dagelijks. Onmisbaar geworden.", author: "Directeur", company: "landschapsarchitecten" },
  { quote: "De zoekfunctie begrijpt echt hoe wij zoeken. Dat had ik niet verwacht.", author: "Senior ontwerper", company: "interieurarchitecten" },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO — dark green ═══════════ */}
      <section className="relative overflow-hidden bg-primary pb-0 pt-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-light/30 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
                <Building2 size={14} className="mr-1.5 text-accent" />
                Gebouwd voor architectenbureaus
              </span>
            </motion.div>

            <motion.h1
              className="mb-6 mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-heading">Vind elke projectfoto</span>
              <br />
              <span className="font-display italic text-accent">in seconden</span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-10 max-w-xl text-lg leading-[1.7] text-white/60"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Geen eindeloos zoeken meer in mapjes en harde schijven. Al je
              projectfoto&apos;s op één plek — direct vindbaar met de zoektermen
              die je dagelijks gebruikt.
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button variant="primary" size="lg" href="#">
                Vraag een demo aan
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/features"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                Bekijk features
              </Button>
            </motion.div>
          </div>

          {/* Dashboard — overlaps into next section */}
          <motion.div
            className="relative z-10 mx-auto mt-14 max-w-6xl md:mt-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardMockup />
          </motion.div>
        </div>

        {/* Bottom fade into next section */}
        <div className="h-32 bg-gradient-to-b from-primary to-background md:h-48" />
      </section>

      {/* ═══════════ PROBLEEM — warm cream ═══════════ */}
      <section className="bg-background py-20 md:py-28">
        <motion.div
          className="mx-auto max-w-7xl px-5 sm:px-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <TagBadge className="mb-4">Het probleem</TagBadge>
              <h2 className="mb-5 text-3xl font-bold tracking-[-0.03em] text-text sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
                <span className="font-heading">Je </span>
                <span className="font-display italic">weet</span>
                <span className="font-heading"> dat die foto bestaat — maar je kunt hem niet vinden</span>
              </h2>
              <p className="mb-8 max-w-lg text-base leading-[1.7] text-text-muted">
                Mapjes op de server, foto&apos;s op persoonlijke harde schijven,
                Google Drive, USB-sticks, e-mail bijlages. Iedereen heeft zijn
                eigen systeem.
              </p>
              <p className="max-w-lg text-base leading-[1.7] text-text-muted italic">
                Het resultaat? Je gebruikt een mindere foto in je offerte. Of je
                grijpt naar een stockfoto — terwijl de perfecte opname ergens in
                jullie archief zit. Herkenbaar?
              </p>
            </div>

            <motion.div
              className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4"
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
                  className="flex items-center gap-5 rounded-2xl border border-border bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                  variants={fadeUp}
                >
                  <p className="font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-sm leading-snug text-text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════ HOE HET WERKT — dark green ═══════════ */}
      <section className="grain-texture relative overflow-hidden bg-primary py-20 md:py-28">
        <motion.div
          className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-14 max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/70">
              Zo werkt het
            </span>
            <h2 className="mt-4 mb-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
              <span className="font-heading">Van chaos naar overzicht in </span>
              <span className="font-display italic text-accent">3 stappen</span>
            </h2>
            <p className="max-w-lg text-base leading-[1.7] text-white/60">
              Geen ingewikkelde setup. Upload je foto&apos;s en de rest gaat vanzelf.
            </p>
          </div>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                variants={fadeUp}
              >
                <span className="mb-4 block font-annotation text-lg text-accent">
                  Stap {s.step}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <s.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/60">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════ FEATURES — light green tint ═══════════ */}
      <section className="bg-[#EEF6EF] py-20 md:py-28">
        <motion.div
          className="mx-auto max-w-7xl px-5 sm:px-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-14 max-w-2xl">
            <TagBadge className="mb-4">Features</TagBadge>
            <h2 className="mb-5 text-3xl font-bold tracking-[-0.03em] text-text sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
              <span className="font-heading">Alles wat je nodig hebt, </span>
              <span className="font-display italic">niets</span>
              <span className="font-heading"> dat je niet nodig hebt</span>
            </h2>
            <p className="max-w-lg text-base leading-[1.7] text-text-muted">
              Beeldenbank is specifiek gebouwd voor de werkwijze van architectenbureaus.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} index={i} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════ DOELGROEPEN — warm cream ═══════════ */}
      <section className="bg-background py-20 md:py-28">
        <motion.div
          className="mx-auto max-w-7xl px-5 sm:px-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <TagBadge className="mb-4">Voor wie</TagBadge>
              <h2 className="mb-5 text-3xl font-bold tracking-[-0.03em] text-text sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
                <span className="font-heading">Gebouwd voor de </span>
                <span className="font-display italic">architectuursector</span>
              </h2>
              <p className="max-w-lg text-base leading-[1.7] text-text-muted">
                Van landschapsontwerp tot interieur — elke discipline die met projectfoto&apos;s werkt.
              </p>
            </div>

            <motion.ul
              className="space-y-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {doelgroepen.map((d, i) => (
                <motion.li key={i} className="flex items-start gap-3" variants={fadeUp}>
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check size={12} className="text-accent" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-base font-semibold text-text">{d.label}</span>
                    <span className="text-base text-text-muted"> — {d.description}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </section>

      {/* ═══════════ SOCIAL PROOF — white ═══════════ */}
      <section className="bg-white py-20 md:py-28">
        <motion.div
          className="mx-auto max-w-7xl px-5 sm:px-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-14 max-w-2xl">
            <TagBadge className="mb-4">Ervaringen</TagBadge>
            <h2 className="mb-5 text-3xl font-bold tracking-[-0.03em] text-text sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
              <span className="font-heading">Gebouwd </span>
              <span className="font-display italic">samen</span>
              <span className="font-heading"> met architectenbureaus</span>
            </h2>
            <p className="max-w-lg text-base leading-[1.7] text-text-muted">
              We ontwikkelen Beeldenbank in nauwe samenwerking met bureaus door heel Nederland.
            </p>
          </div>

          <motion.div
            className="grid gap-6 sm:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="rounded-2xl border border-border bg-background p-7"
                variants={fadeUp}
              >
                <Quote size={28} className="mb-4 text-primary/15" strokeWidth={1.5} />
                <p className="mb-6 text-[15px] leading-relaxed text-text">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-medium text-text">{t.author}</p>
                  <p className="text-xs text-text-muted">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════ CTA — dark green ═══════════ */}
      <section className="grain-texture relative overflow-hidden bg-primary-dark py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-primary-light/20 blur-[80px]" />
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="mb-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            <span className="font-heading">Klaar om je beeldenbank te </span>
            <span className="font-display italic">transformeren</span>
            <span className="font-heading">?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-[1.7] text-white/60">
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
              className="border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              Bekijk pricing
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
