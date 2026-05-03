import Icon from "@/components/ui/icon";

const chartData = [
  { month: "Дек", wheat: 13200, soy: 36000 },
  { month: "Янв", wheat: 13600, soy: 36800 },
  { month: "Фев", wheat: 14000, soy: 37200 },
  { month: "Мар", wheat: 13800, soy: 37800 },
  { month: "Апр", wheat: 14400, soy: 38000 },
  { month: "Май", wheat: 14800, soy: 38500 },
];

const maxWheat = Math.max(...chartData.map((d) => d.wheat));

const articles = [
  {
    tag: "Обзор рынка",
    title: "Пшеница растёт третью неделю подряд: причины и прогноз до июля",
    date: "03 мая 2026",
    emoji: "📈",
  },
  {
    tag: "Новости",
    title: "Минсельхоз скорректировал прогноз урожая зерновых до 135 млн тонн",
    date: "01 мая 2026",
    emoji: "🌾",
  },
  {
    tag: "Аналитика",
    title: "Экспортные пошлины: как они влияют на внутренние цены этим летом",
    date: "29 апр 2026",
    emoji: "🌍",
  },
];

export default function AnalyticsSection() {
  return (
    <section className="py-20 border-b border-grain-border" id="analytics">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest gold-text font-semibold mb-3">Аналитика и данные</div>
          <h2 className="text-3xl md:text-4xl font-bold text-grain-text font-golos">
            Рынок в цифрах
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Price Chart */}
          <div className="shine-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-semibold text-grain-text">Динамика цен</div>
                <div className="text-xs muted-text">Дек 2025 — Май 2026</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-1.5 rounded green-gradient" />
                  <span className="muted-text">Пшеница 3кл</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-1.5 rounded gold-gradient" />
                  <span className="muted-text">Соя</span>
                </div>
              </div>
            </div>

            {/* Simple bar chart */}
            <div className="flex items-end gap-3 h-36">
              {chartData.map((d) => (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex gap-1 items-end">
                    <div
                      className="flex-1 rounded-t green-gradient opacity-80"
                      style={{ height: `${(d.wheat / maxWheat) * 112}px` }}
                    />
                    <div
                      className="flex-1 rounded-t gold-gradient opacity-60"
                      style={{ height: `${(d.soy / 38500) * 96}px` }}
                    />
                  </div>
                  <div className="text-xs muted-text">{d.month}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-grain-border grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs muted-text mb-1">Пшеница сейчас</div>
                <div className="text-lg font-bold gold-text font-oswald">14 800 ₽/т</div>
                <div className="text-xs green-text">+2.1% за неделю</div>
              </div>
              <div>
                <div className="text-xs muted-text mb-1">Соя сейчас</div>
                <div className="text-lg font-bold gold-text font-oswald">38 500 ₽/т</div>
                <div className="text-xs green-text">+3.2% за неделю</div>
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="flex flex-col gap-4">
            {articles.map((a) => (
              <div key={a.title} className="shine-border rounded-lg p-5 card-hover cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">{a.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs status-active px-2 py-0.5 rounded-full">{a.tag}</span>
                      <span className="text-xs muted-text">{a.date}</span>
                    </div>
                    <p className="text-sm font-medium text-grain-text leading-snug group-hover:gold-text transition-colors line-clamp-2">
                      {a.title}
                    </p>
                  </div>
                  <Icon name="ChevronRight" size={16} className="muted-text flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}

            <button className="text-sm text-center muted-text hover:text-grain-text transition-colors py-2">
              Все публикации →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
