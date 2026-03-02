"use client";

import { motion } from "framer-motion";
import {
  Tag,
  Search,
  FolderOpen,
  Users,
  Pencil,
  Upload,
  BookOpen,
  Sparkles,
  ArrowRight,
  Star,
  Brain,
  GripVertical,
  Camera,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import TagBadge from "@/components/TagBadge";
import Button from "@/components/Button";



interface FeatureSectionData {
  tag: string;
  title: React.ReactNode;
  description: string;
  bullets: string[];
  icon: React.ElementType;
  visual: React.ReactNode;
}

function FeatureVisual({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[0_8px_30px_rgba(27,59,42,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

const featureSections: FeatureSectionData[] = [
  {
    tag: "Automatisch taggen",
    title: (
      <>
        <span className="font-heading">Automatisch getagd met jullie </span>
        <span className="font-display italic">vakjargon</span>
      </>
    ),
    description:
      "Elke foto wordt automatisch herkend en getagd. Materialen, stijlen, constructies — in de taal die je team dagelijks gebruikt. Niet 'wall' of 'brick', maar 'gevel' en 'baksteen'.",
    bullets: [
      "Herkent 500+ architectuurtermen automatisch",
      "Tags in het Nederlands en Engels",
      "Leert van jouw correcties en aanpassingen",
      "Materiaalherkenning: baksteen, beton, hout, staal, glas",
    ],
    icon: Tag,
    visual: (
      <FeatureVisual>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-xl bg-background p-3">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-tag-bg">
              <Camera size={24} className="text-primary/50" />
            </div>
            <div className="flex-1">
              <p className="mb-2 text-xs font-medium text-text">
                Villa Parkzicht — Voorgevel
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Gevel",
                  "Baksteen",
                  "Modern",
                  "Duurzaam",
                  "Groen dak",
                ].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1 rounded-full bg-tag-bg px-2 py-0.5 text-[10px] font-medium text-tag-text"
                  >
                    <Tag size={8} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-background p-3">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-tag-bg">
              <Camera size={24} className="text-primary/50" />
            </div>
            <div className="flex-1">
              <p className="mb-2 text-xs font-medium text-text">
                Kantoor West — Interieur lobby
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Interieur", "Beton", "Minimalistisch", "Open plan"].map(
                  (t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1 rounded-full bg-tag-bg px-2 py-0.5 text-[10px] font-medium text-tag-text"
                    >
                      <Tag size={8} />
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2">
            <Sparkles size={14} className="text-accent-dark" />
            <span className="text-xs text-accent-dark font-medium">
              12 tags automatisch toegevoegd
            </span>
          </div>
        </div>
      </FeatureVisual>
    ),
  },
  {
    tag: "Zoek in gewone taal",
    title: (
      <>
        <span className="font-heading">Zoek zoals je praat, vind wat je </span>
        <span className="font-display italic">bedoelt</span>
      </>
    ),
    description:
      "Vergeet exacte bestandsnamen. Beschrijf gewoon wat je zoekt — 'moderne villa met houten gevel' — en Beeldenbank vindt de juiste foto's. De zoekfunctie begrijpt context en synoniemen.",
    bullets: [
      "Zoek op beschrijvingen, niet op bestandsnamen",
      "Begrijpt synoniemen en context",
      "Combineert meerdere criteria",
      "Resultaten gesorteerd op relevantie",
    ],
    icon: Search,
    visual: (
      <FeatureVisual>
        <div className="space-y-3">
          <div className="flex items-center gap-2 rounded-xl bg-background px-4 py-3">
            <Search size={16} className="shrink-0 text-text-muted" />
            <span className="text-sm text-text">
              &quot;moderne gevel met baksteen en groen&quot;
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg bg-tag-bg"
              >
                <div className="flex aspect-square items-center justify-center">
                  <Camera size={20} className="text-primary/40" />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent px-1.5 pb-1 pt-4">
                  <span className="text-[9px] text-white font-medium">
                    {i === 1
                      ? "98% match"
                      : i === 2
                        ? "94% match"
                        : "91% match"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-text-muted">
            23 resultaten gevonden in 0.3 seconden
          </p>
        </div>
      </FeatureVisual>
    ),
  },
  {
    tag: "Organisatie",
    title: (
      <>
        <span className="font-heading">Projectmappen die </span>
        <span className="font-display italic">meedenken</span>
      </>
    ),
    description:
      "Structureer je beeldenbank per project, fase of locatie. Met slimme mappen heb je altijd overzicht — hoe groot je archief ook wordt.",
    bullets: [
      "Onbeperkt projectmappen aanmaken",
      "Automatische categorisatie per project",
      "Submappen voor fases en locaties",
      "Snelle navigatie en breadcrumbs",
    ],
    icon: FolderOpen,
    visual: (
      <FeatureVisual>
        <div className="space-y-2">
          {[
            {
              name: "Villa Parkzicht",
              count: "234 foto's",
              active: true,
            },
            {
              name: "Kantoor West",
              count: "189 foto's",
              active: false,
            },
            {
              name: "Museum Oost",
              count: "412 foto's",
              active: false,
            },
            {
              name: "Stadsappartement",
              count: "67 foto's",
              active: false,
            },
          ].map((project) => (
            <div
              key={project.name}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 ${project.active
                  ? "bg-tag-bg border border-primary/10"
                  : "bg-background"
                }`}
            >
              <FolderOpen
                size={16}
                className={
                  project.active ? "text-primary" : "text-text-muted"
                }
              />
              <span
                className={`flex-1 text-sm ${project.active
                    ? "font-medium text-primary"
                    : "text-text-muted"
                  }`}
              >
                {project.name}
              </span>
              <span className="text-xs text-text-muted">{project.count}</span>
            </div>
          ))}
        </div>
      </FeatureVisual>
    ),
  },
  {
    tag: "Samenwerking",
    title: (
      <>
        <span className="font-heading">Team accounts & </span>
        <span className="font-display italic">favorieten</span>
      </>
    ),
    description:
      "Werk samen met je hele team. Iedereen zijn eigen login, eigen favorieten en eigen collecties — alles op één plek die voor iedereen toegankelijk is.",
    bullets: [
      "Onbeperkt teamleden toevoegen",
      "Persoonlijke favorieten per gebruiker",
      "Gedeelde collecties voor presentaties",
      "Rolgebaseerde rechten (admin, editor, viewer)",
    ],
    icon: Users,
    visual: (
      <FeatureVisual>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-text">Teamleden</span>
            <span className="rounded-full bg-tag-bg px-2 py-0.5 text-[10px] font-medium text-primary">
              5 actief
            </span>
          </div>
          {[
            { name: "Martijn de Vries", role: "Admin", initial: "M" },
            { name: "Lisa van Dijk", role: "Editor", initial: "L" },
            { name: "Tom Bakker", role: "Editor", initial: "T" },
          ].map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-3 rounded-xl bg-background px-4 py-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-accent">
                {member.initial}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text">{member.name}</p>
                <p className="text-[11px] text-text-muted">{member.role}</p>
              </div>
              <Star size={14} className="text-yellow-400" />
            </div>
          ))}
        </div>
      </FeatureVisual>
    ),
  },
  {
    tag: "Bewerken",
    title: (
      <>
        <span className="font-heading">Tags aanpassen — het systeem </span>
        <span className="font-display italic">leert mee</span>
      </>
    ),
    description:
      "Pas tags aan, verwijder irrelevante labels of voeg je eigen termen toe. Het systeem leert van je aanpassingen en wordt steeds slimmer voor jouw bureau.",
    bullets: [
      "Tags toevoegen, verwijderen en hernoemen",
      "Het systeem leert van elke correctie",
      "Suggesties worden steeds relevanter",
      "Bulk tag-bewerkingen voor meerdere foto's",
    ],
    icon: Pencil,
    visual: (
      <FeatureVisual>
        <div className="space-y-3">
          <div className="rounded-xl bg-background p-3">
            <p className="mb-2 text-xs font-medium text-text">
              Tags bewerken — Villa Parkzicht, Foto 14
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Gevel", "Baksteen", "Modern"].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1 rounded-full bg-tag-bg px-2 py-0.5 text-[10px] font-medium text-tag-text"
                >
                  {t} ×
                </span>
              ))}
              <span className="flex items-center gap-1 rounded-full border border-dashed border-primary/30 px-2 py-0.5 text-[10px] text-primary">
                + Tag toevoegen
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2">
            <Brain size={14} className="text-accent-dark" />
            <span className="text-xs font-medium text-accent-dark">
              Geleerd: &quot;duurzaam&quot; relevanter voor dit projecttype
            </span>
          </div>
        </div>
      </FeatureVisual>
    ),
  },
  {
    tag: "Upload",
    title: (
      <>
        <span className="font-heading">Bulk upload & </span>
        <span className="font-display italic">drag-and-drop</span>
      </>
    ),
    description:
      "Sleep volledige mappen of honderden bestanden tegelijk naar Beeldenbank. Alles wordt op de achtergrond verwerkt — je kunt gewoon doorwerken.",
    bullets: [
      "Drag-and-drop van mappen en bestanden",
      "Ondersteunt JPG, PNG, TIFF, RAW",
      "Achtergrondverwerking — niet wachten",
      "Voortgangsindicator per batch",
    ],
    icon: Upload,
    visual: (
      <FeatureVisual>
        <div className="space-y-3">
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/20 bg-background py-8">
            <Upload size={28} className="mb-2 text-primary/30" />
            <p className="text-xs font-medium text-text-muted">
              Sleep bestanden hierheen
            </p>
            <p className="text-[10px] text-text-muted/60">
              of klik om te uploaden
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 rounded-lg bg-background px-3 py-2">
              <GripVertical size={12} className="text-text-muted/40" />
              <span className="flex-1 text-xs text-text">
                batch_villa_parkzicht.zip
              </span>
              <span className="text-[10px] text-accent-dark font-medium">
                Voltooid
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-background px-3 py-2">
              <GripVertical size={12} className="text-text-muted/40" />
              <span className="flex-1 text-xs text-text">
                kantoor_west_fase2/
              </span>
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-border">
                <div className="h-full w-3/4 rounded-full bg-accent-dark" />
              </div>
            </div>
          </div>
        </div>
      </FeatureVisual>
    ),
  },
  {
    tag: "Vocabulaire",
    title: (
      <>
        <span className="font-heading">Jullie taal, jullie </span>
        <span className="font-display italic">zoekresultaten</span>
      </>
    ),
    description:
      "Elk bureau heeft eigen termen en jargon. Met vocabulaire beheer pas je de zoekfunctie aan op jullie specifieke taal, zodat tags en resultaten altijd relevant zijn.",
    bullets: [
      "Eigen woordenlijst per bureau",
      "Synoniemen en gerelateerde termen",
      "Import/export van vocabulaire",
      "Taalondersteuning Nederlands & Engels",
    ],
    icon: BookOpen,
    visual: (
      <FeatureVisual>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-text">
              Bureau vocabulaire
            </span>
            <span className="text-[10px] text-text-muted">148 termen</span>
          </div>
          {[
            { term: "Klimaatadaptief", synonyms: "waterbestendig, duurzaam" },
            { term: "Biobased", synonyms: "biologisch, natuurlijk" },
            { term: "Circulair", synonyms: "herbruikbaar, recycleerbaar" },
          ].map((item) => (
            <div
              key={item.term}
              className="rounded-xl bg-background px-4 py-3"
            >
              <p className="text-sm font-medium text-text">{item.term}</p>
              <p className="text-[11px] text-text-muted">
                Synoniemen: {item.synonyms}
              </p>
            </div>
          ))}
        </div>
      </FeatureVisual>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* ═══ Hero — dark green ═══ */}
      <section className="bg-primary pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/70">
              Features
            </span>
            <h1 className="mt-4 mb-5 text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl">
              <span className="font-heading">
                Alles wat je nodig hebt om je projectfoto&apos;s{" "}
              </span>
              <span className="font-display italic text-accent">onder controle</span>
              <span className="font-heading"> te krijgen</span>
            </h1>
            <p className="max-w-xl text-lg leading-[1.7] text-white/60">
              Praktische tools die aansluiten bij hoe jullie werken. Geen
              ingewikkelde systemen, gewoon resultaat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ Feature sections ═══ */}
      {featureSections.map((feature, i) => (
        <SectionWrapper
          key={i}
          bgColor={i % 2 === 0 ? "bg-background" : "bg-surface"}
        >
          <div
            className={`grid items-center gap-12 lg:grid-cols-2`}
          >
            {/* Text side */}
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <TagBadge className="mb-4">
                <feature.icon size={14} className="mr-1.5" />
                {feature.tag}
              </TagBadge>
              <h2 className="mb-4 text-2xl font-bold tracking-[-0.03em] text-text sm:text-3xl">
                {feature.title}
              </h2>
              <p className="mb-6 text-base leading-[1.7] text-text-muted">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.bullets.map((bullet, j) => (
                  <motion.li
                    key={j}
                    className="flex items-start gap-3 text-sm text-text-muted"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: j * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent-dark" />
                    </div>
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Visual side */}
            <motion.div
              className={i % 2 === 1 ? "lg:order-1" : ""}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {feature.visual}
            </motion.div>
          </div>
        </SectionWrapper>
      ))}

      {/* ═══ Bottom CTA ═══ */}
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
            <span className="font-heading">Overtuigd? </span>
            <span className="font-display italic">Bekijk het zelf.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-[1.7] text-white/70">
            We laten je graag zien hoe het werkt — met jullie eigen foto&apos;s.
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
