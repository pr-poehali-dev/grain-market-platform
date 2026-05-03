import Icon from "@/components/ui/icon";

const lots = [
  {
    id: "ЛТ-4821",
    culture: "Пшеница 3 класс",
    emoji: "🌾",
    volume: "500 т",
    price: "14 800 ₽/т",
    region: "Краснодарский край",
    delivery: "до 15 июня 2026",
    status: "active",
    bids: 7,
  },
  {
    id: "ЛТ-4819",
    culture: "Соя урожай 2025",
    emoji: "🫘",
    volume: "200 т",
    price: "38 200 ₽/т",
    region: "Амурская область",
    delivery: "до 20 июня 2026",
    status: "active",
    bids: 12,
  },
  {
    id: "ЛТ-4815",
    culture: "Кукуруза фуражная",
    emoji: "🌽",
    volume: "1 000 т",
    price: "13 500 ₽/т",
    region: "Ростовская область",
    delivery: "до 30 мая 2026",
    status: "pending",
    bids: 3,
  },
  {
    id: "ЛТ-4812",
    culture: "Ячмень яровой",
    emoji: "🌿",
    volume: "300 т",
    price: "12 100 ₽/т",
    region: "Ставропольский край",
    delivery: "до 10 июня 2026",
    status: "active",
    bids: 5,
  },
  {
    id: "ЛТ-4809",
    culture: "Подсолнечник",
    emoji: "🌻",
    volume: "150 т",
    price: "29 500 ₽/т",
    region: "Воронежская область",
    delivery: "до 25 мая 2026",
    status: "active",
    bids: 9,
  },
  {
    id: "ЛТ-4806",
    culture: "Рапс озимый",
    emoji: "🌱",
    volume: "400 т",
    price: "31 000 ₽/т",
    region: "Белгородская область",
    delivery: "до 5 июня 2026",
    status: "pending",
    bids: 2,
  },
];

export default function ActiveLots() {
  return (
    <section className="py-20 border-b border-grain-border" id="catalog">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest gold-text font-semibold mb-3">Торговая площадка</div>
            <h2 className="text-3xl md:text-4xl font-bold text-grain-text font-golos">Активные лоты</h2>
          </div>
          <div className="flex items-center gap-3">
            <select className="text-sm bg-grain-dark-2 border border-grain-border rounded px-3 py-2 text-grain-text focus:outline-none focus:border-grain-green">
              <option>Все культуры</option>
              <option>Пшеница</option>
              <option>Соя</option>
              <option>Кукуруза</option>
              <option>Ячмень</option>
            </select>
            <button className="btn-green px-4 py-2 rounded text-sm flex items-center gap-2">
              <Icon name="SlidersHorizontal" size={14} />
              Фильтры
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {lots.map((lot) => (
            <div key={lot.id} className="shine-border rounded-lg p-5 card-hover cursor-pointer group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{lot.emoji}</div>
                  <div>
                    <div className="font-semibold text-grain-text text-sm leading-tight">{lot.culture}</div>
                    <div className="text-xs muted-text mt-0.5">{lot.id}</div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${lot.status === "active" ? "status-active" : "status-pending"}`}>
                  {lot.status === "active" ? "Активный" : "Сбор заявок"}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="text-2xl font-bold gold-text font-oswald">{lot.price}</div>
                <div className="text-xs muted-text">Объём: {lot.volume}</div>
              </div>

              {/* Details */}
              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2 text-xs muted-text">
                  <Icon name="MapPin" size={12} />
                  {lot.region}
                </div>
                <div className="flex items-center gap-2 text-xs muted-text">
                  <Icon name="Calendar" size={12} />
                  Поставка {lot.delivery}
                </div>
                <div className="flex items-center gap-2 text-xs muted-text">
                  <Icon name="Users" size={12} />
                  {lot.bids} предложений
                </div>
              </div>

              {/* Action */}
              <button className="w-full py-2.5 rounded border border-grain-border text-sm text-grain-text hover:border-grain-green hover:text-white transition-all group-hover:border-grain-green">
                Просмотреть лот
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-8 py-3 rounded border border-grain-border text-sm text-grain-text hover:border-grain-green transition-colors">
            Показать все 2 847 лотов
          </button>
        </div>
      </div>
    </section>
  );
}
