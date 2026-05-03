import Icon from "@/components/ui/icon";

const adSpots = [
  {
    label: "Реклама",
    company: "АгроХолдинг «Юг»",
    text: "Продаём пшеницу 3кл — 5 000 т, EXW Краснодар. Цена договорная.",
    tag: "🌾 Пшеница",
    href: "#catalog",
  },
  {
    label: "Реклама",
    company: "ТД «СибЗерно»",
    text: "Покупаем кукурузу оптом от 500 т. Работаем напрямую без посредников.",
    tag: "🌽 Кукуруза",
    href: "#catalog",
  },
  {
    label: "Спонсор",
    company: "«АгроЛогистика»",
    text: "Перевозки зерна по всей России. Собственный парк — 200 зерновозов.",
    tag: "🚛 Логистика",
    href: "#contacts",
  },
];

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

      <div className="relative container mx-auto px-4 lg:px-8 pt-28 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* LEFT: Main hero content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-medium status-active">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Платформа работает — 2 847 активных лотов
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 font-golos">
              Торговая площадка
              <br />
              <span className="gold-text">зерновых культур</span>
            </h1>

            <p className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed mb-8">
              Покупайте и продавайте зерно напрямую. Прозрачные торги, актуальные цены,
              надёжная верификация партнёров.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
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

          {/* RIGHT: Ad block */}
          <div className="flex flex-col gap-3">
            {/* Header рекламного блока */}
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] uppercase tracking-widest muted-text">Платное размещение</span>
              <a href="#contacts" className="text-[10px] text-amber-400/70 hover:text-amber-400 transition-colors underline underline-offset-2">
                Разместить здесь
              </a>
            </div>

            {adSpots.map((ad, i) => (
              <a
                key={i}
                href={ad.href}
                className="block rounded-lg p-4 border border-white/10 bg-black/40 backdrop-blur-sm hover:border-amber-400/30 hover:bg-black/55 transition-all group"
              >
                {/* Ad label + tag */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] uppercase tracking-widest text-amber-400/60 border border-amber-400/20 px-1.5 py-0.5 rounded">
                    {ad.label}
                  </span>
                  <span className="text-[10px] muted-text">{ad.tag}</span>
                </div>

                {/* Company */}
                <div className="text-xs font-semibold text-white mb-1 group-hover:gold-text transition-colors">
                  {ad.company}
                </div>

                {/* Text */}
                <p className="text-[11px] text-white/55 leading-relaxed line-clamp-2">
                  {ad.text}
                </p>

                <div className="mt-2 flex items-center gap-1 text-[10px] text-amber-400/60 group-hover:text-amber-400 transition-colors">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={10} />
                </div>
              </a>
            ))}

            {/* CTA для рекламодателей */}
            <a
              href="#contacts"
              className="flex items-center justify-center gap-2 py-3 rounded-lg border border-dashed border-white/15 hover:border-amber-400/30 transition-colors group"
            >
              <Icon name="Plus" size={13} className="muted-text group-hover:text-amber-400 transition-colors" />
              <span className="text-[11px] muted-text group-hover:text-amber-400 transition-colors">
                Ваша реклама здесь — от 5 000 ₽/мес
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-xs muted-text uppercase tracking-widest">Прокрутить</span>
        <Icon name="ChevronDown" size={16} className="muted-text" />
      </div>
    </section>
  );
}
