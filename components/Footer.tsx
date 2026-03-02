import { ImageIcon, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/over-ons#contact" },
  { label: "Privacy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Brand column */}
          <div>
            <a href="/" className="mb-4 flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-accent transition-transform duration-200 group-hover:scale-105">
                <ImageIcon size={18} strokeWidth={2} />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-primary">
                Beeldenbank
              </span>
            </a>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-text-muted">
              De beeldenbank voor architectenbureaus. Organiseer, vind en deel al
              je projectfoto&apos;s in seconden.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-text-muted">
                <Mail size={15} className="shrink-0" />
                info@lyfta.nl
              </div>
              <div className="flex items-center gap-2.5 text-sm text-text-muted">
                <MapPin size={15} className="shrink-0" />
                Lelystad, Nederland
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text">
              Navigatie
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Beeldenbank. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
