import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Каталог", href: "#catalog" },
  { label: "Торги", href: "#auctions" },
  { label: "Аналитика", href: "#analytics" },
  { label: "О платформе", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-grain-border bg-grain-dark/90 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded green-gradient flex items-center justify-center">
              <Icon name="Wheat" size={18} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-bold text-grain-text tracking-tight font-golos">Рынок Зерна</span>
              <span className="text-[9px] uppercase tracking-widest muted-text">торговая площадка</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-grain-text border border-grain-border rounded hover:border-grain-green transition-colors">
              Войти
            </button>
            <button className="px-4 py-2 text-sm btn-gold rounded">
              Регистрация
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-grain-text"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-grain-border bg-grain-dark-2 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2 border-t border-grain-border">
            <button className="flex-1 py-2 text-sm text-grain-text border border-grain-border rounded">Войти</button>
            <button className="flex-1 py-2 text-sm btn-gold rounded">Регистрация</button>
          </div>
        </div>
      )}
    </header>
  );
}
