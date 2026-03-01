import { ImageIcon, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ],
  Bedrijf: [
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/over-ons#contact" },
    { label: "Privacy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="mb-4 flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-accent transition-transform duration-200 group-hover:scale-105">
                <ImageIcon size={18} strokeWidth={2} />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-primary">
                Beeldenbank
              </span>
            </a>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-text-muted">
              De AI-beeldenbank voor architectenbureaus. Organiseer, vind en
              deel al je projectfoto&apos;s in seconden.
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

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-text">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
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
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Beeldenbank. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-text-muted transition-colors duration-200 hover:text-primary"
            >
              Privacybeleid
            </a>
            <a
              href="#"
              className="text-xs text-text-muted transition-colors duration-200 hover:text-primary"
            >
              Algemene voorwaarden
            </a>
            <a
              href="#"
              className="text-xs text-text-muted transition-colors duration-200 hover:text-primary"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
