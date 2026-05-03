import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Каталог", href: "#catalog" },
  { label: "Торги", href: "#auctions" },
  { label: "Аналитика", href: "#analytics" },
  { label: "О платформе", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

type Mode = "buyer" | "seller";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("buyer");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top micro-bar: роль пользователя */}
      <div className="bg-grain-dark-2 border-b border-grain-border/60 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-1">
            <span className="text-[11px] muted-text mr-2">Вы на платформе как:</span>
            <button
              onClick={() => setMode("buyer")}
              className={`text-[11px] px-3 py-0.5 rounded-full font-medium transition-all ${
                mode === "buyer"
                  ? "bg-grain-green/20 text-green-400 border border-grain-green/30"
                  : "muted-text hover:text-grain-text"
              }`}
            >
              🛒 Покупатель
            </button>
            <button
              onClick={() => setMode("seller")}
              className={`text-[11px] px-3 py-0.5 rounded-full font-medium transition-all ${
                mode === "seller"
                  ? "bg-amber-500/15 text-amber-400 border border-amber-500/25"
                  : "muted-text hover:text-grain-text"
              }`}
            >
              📦 Продавец
            </button>
          </div>
          <div className="flex items-center gap-4 text-[11px] muted-text">
            {mode === "buyer" ? (
              <>
                <a href="#catalog" className="hover:text-grain-text transition-colors">Найти лот</a>
                <span className="opacity-30">|</span>
                <a href="#auctions" className="hover:text-grain-text transition-colors">Участвовать в торгах</a>
                <span className="opacity-30">|</span>
                <span className="flex items-center gap-1">
                  <Icon name="Bell" size={10} />
                  Подписаться на культуру
                </span>
              </>
            ) : (
              <>
                <span className="flex items-center gap-1 text-amber-400/80">
                  <Icon name="PlusCircle" size={10} />
                  Разместить лот
                </span>
                <span className="opacity-30">|</span>
                <span>Мои лоты</span>
                <span className="opacity-30">|</span>
                <span>Статистика продаж</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-grain-dark/95 backdrop-blur-md border-b border-grain-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14">
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

            {/* Desktop Nav — меняется под роль */}
            <nav className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side — CTA зависит от роли */}
            <div className="hidden md:flex items-center gap-3">
              {mode === "seller" && (
                <button className="btn-gold px-4 py-2 text-sm rounded flex items-center gap-1.5 font-semibold">
                  <Icon name="PlusCircle" size={14} />
                  Разместить лот
                </button>
              )}
              {mode === "buyer" && (
                <button className="btn-green px-4 py-2 text-sm rounded flex items-center gap-1.5 font-semibold">
                  <Icon name="Search" size={14} />
                  Найти зерно
                </button>
              )}
              <button className="px-4 py-2 text-sm text-grain-text border border-grain-border rounded hover:border-grain-green transition-colors">
                Войти
              </button>
              <button className="px-4 py-2 text-sm border border-grain-border rounded text-grain-text hover:border-grain-green transition-colors">
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-grain-border bg-grain-dark-2 px-4 py-4 flex flex-col gap-4">
          {/* Role switcher mobile */}
          <div className="flex gap-2 pb-3 border-b border-grain-border">
            <button
              onClick={() => setMode("buyer")}
              className={`flex-1 py-2 text-xs rounded font-medium transition-all ${
                mode === "buyer" ? "bg-grain-green/20 text-green-400 border border-grain-green/30" : "border border-grain-border muted-text"
              }`}
            >
              🛒 Покупатель
            </button>
            <button
              onClick={() => setMode("seller")}
              className={`flex-1 py-2 text-xs rounded font-medium transition-all ${
                mode === "seller" ? "bg-amber-500/15 text-amber-400 border border-amber-500/25" : "border border-grain-border muted-text"
              }`}
            >
              📦 Продавец
            </button>
          </div>

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
            {mode === "seller"
              ? <button className="flex-1 py-2 text-sm btn-gold rounded">Разместить лот</button>
              : <button className="flex-1 py-2 text-sm btn-green rounded">Найти зерно</button>
            }
          </div>
        </div>
      )}
    </header>
  );
}
