"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    bericht: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — no backend
    alert("Bedankt voor je bericht! We nemen zo snel mogelijk contact op.");
    setFormData({ naam: "", email: "", bericht: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="naam"
          className="mb-1.5 block text-sm font-medium text-text"
        >
          Naam
        </label>
        <input
          type="text"
          id="naam"
          required
          value={formData.naam}
          onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-accent/20"
          placeholder="Je naam"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-text"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-accent/20"
          placeholder="je@email.nl"
        />
      </div>
      <div>
        <label
          htmlFor="bericht"
          className="mb-1.5 block text-sm font-medium text-text"
        >
          Bericht
        </label>
        <textarea
          id="bericht"
          required
          rows={5}
          value={formData.bericht}
          onChange={(e) =>
            setFormData({ ...formData, bericht: e.target.value })
          }
          className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-accent/20"
          placeholder="Hoe kunnen we je helpen?"
        />
      </div>
      <Button type="submit" variant="secondary" size="md" className="w-full">
        Verstuur bericht
      </Button>
    </form>
  );
}
