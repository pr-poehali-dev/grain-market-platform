import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/17be051d-68c7-4361-b662-2b9dcf8f8093/files/184beeb3-5a28-4722-8e27-1bf6f839b2da.jpg)",
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative green line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 green-gradient opacity-60" />

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-medium status-active">
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Платформа работает — 2 847 активных лотов
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-golos">
            Торговая площадка
            <br />
            <span className="gold-text">зерновых культур</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
            Покупайте и продавайте зерно напрямую. Прозрачные торги, актуальные цены,
            надёжная верификация партнёров.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-14">
            <button className="btn-gold px-6 py-3 rounded text-sm font-semibold flex items-center gap-2">
              <Icon name="PlusCircle" size={16} />
              Разместить лот
            </button>
            <button className="btn-green px-6 py-3 rounded text-sm font-semibold flex items-center gap-2">
              <Icon name="Search" size={16} />
              Найти зерно
            </button>
            <button className="px-6 py-3 rounded text-sm font-semibold border border-white/25 text-white hover:border-white/50 transition-colors flex items-center gap-2">
              <Icon name="TrendingUp" size={16} />
              Смотреть торги
            </button>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: "12 300+", label: "Участников" },
              { value: "₽4.2 млрд", label: "Объём торгов" },
              { value: "89", label: "Регионов России" },
              { value: "24/7", label: "Поддержка" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold gold-text font-oswald">{stat.value}</div>
                <div className="text-xs muted-text mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
        <span className="text-xs muted-text uppercase tracking-widest">Прокрутить</span>
        <Icon name="ChevronDown" size={16} className="muted-text" />
      </div>
    </section>
  );
}
