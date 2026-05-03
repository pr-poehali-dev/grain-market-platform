import Icon from "@/components/ui/icon";

const stats = [
  {
    icon: "Shield",
    value: "100%",
    label: "Верифицированные продавцы",
    desc: "Каждый участник проходит проверку документов",
  },
  {
    icon: "Zap",
    value: "≤ 3 мин",
    label: "Время размещения лота",
    desc: "Заполните форму — лот сразу виден покупателям",
  },
  {
    icon: "BarChart2",
    value: "Онлайн",
    label: "Котировки и аналитика",
    desc: "Актуальные цены и обзоры рынка ежедневно",
  },
  {
    icon: "Truck",
    value: "89",
    label: "Регионов охвата",
    desc: "Поставки по всей России и странам СНГ",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 border-b border-grain-border bg-grain-dark-2">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="shine-border rounded-lg p-6 card-hover">
              <div className="w-10 h-10 rounded green-gradient flex items-center justify-center mb-4">
                <Icon name={s.icon} size={20} className="text-white" fallback="Circle" />
              </div>
              <div className="text-2xl font-bold gold-text font-oswald mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-grain-text mb-1">{s.label}</div>
              <div className="text-xs muted-text leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}