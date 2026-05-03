import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const auctions = [
  {
    id: "АУК-291",
    culture: "Пшеница 3кл — 800 т",
    startPrice: "14 200 ₽/т",
    currentPrice: "14 750 ₽/т",
    region: "Краснодарский край",
    participants: 14,
    timeLeft: { h: 2, m: 34, s: 11 },
    leader: "ООО «АгроТрейд»",
    hot: true,
  },
  {
    id: "АУК-290",
    culture: "Соя — 350 т",
    startPrice: "37 000 ₽/т",
    currentPrice: "38 400 ₽/т",
    region: "Приморский край",
    participants: 8,
    timeLeft: { h: 5, m: 12, s: 44 },
    leader: "ИП Смирнов А.В.",
    hot: false,
  },
  {
    id: "АУК-289",
    culture: "Кукуруза — 1 200 т",
    startPrice: "13 000 ₽/т",
    currentPrice: "13 550 ₽/т",
    region: "Ростовская область",
    participants: 21,
    timeLeft: { h: 0, m: 48, s: 22 },
    leader: "АО «ЮгЗерно»",
    hot: true,
  },
];

function Timer({ timeLeft }: { timeLeft: { h: number; m: number; s: number } }) {
  const [time, setTime] = useState(timeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { m--; s = 59; }
        else if (h > 0) { h--; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fmt = (n: number) => String(n).padStart(2, "0");
  const urgent = time.h === 0 && time.m < 15;

  return (
    <div className={`flex items-center gap-1 font-oswald text-xl font-bold ${urgent ? "text-red-400" : "gold-text"}`}>
      <span>{fmt(time.h)}</span>
      <span className="opacity-60">:</span>
      <span>{fmt(time.m)}</span>
      <span className="opacity-60">:</span>
      <span>{fmt(time.s)}</span>
    </div>
  );
}

export default function AuctionsSection() {
  return (
    <section className="py-20 border-b border-grain-border bg-grain-dark-2" id="auctions">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest gold-text font-semibold mb-3">Аукционы</div>
          <h2 className="text-3xl md:text-4xl font-bold text-grain-text font-golos">
            Идут прямо сейчас
          </h2>
        </div>

        <div className="space-y-4">
          {auctions.map((a) => (
            <div key={a.id} className={`shine-border rounded-lg p-5 md:p-6 card-hover ${a.hot ? "border-grain-green/30" : ""}`}>
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                {/* Culture & ID */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs muted-text">{a.id}</span>
                    {a.hot && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/25 font-medium">
                        🔥 Горячий
                      </span>
                    )}
                  </div>
                  <div className="font-semibold text-grain-text">{a.culture}</div>
                  <div className="flex items-center gap-1 text-xs muted-text mt-1">
                    <Icon name="MapPin" size={11} />
                    {a.region}
                  </div>
                </div>

                {/* Prices */}
                <div className="flex gap-6 lg:gap-8">
                  <div>
                    <div className="text-xs muted-text mb-1">Старт</div>
                    <div className="text-sm text-grain-text line-through opacity-50">{a.startPrice}</div>
                  </div>
                  <div>
                    <div className="text-xs muted-text mb-1">Текущая ставка</div>
                    <div className="text-lg font-bold gold-text font-oswald">{a.currentPrice}</div>
                  </div>
                </div>

                {/* Timer */}
                <div className="flex flex-col items-start lg:items-center">
                  <div className="text-xs muted-text mb-1 flex items-center gap-1">
                    <Icon name="Clock" size={11} />
                    Осталось времени
                  </div>
                  <Timer timeLeft={a.timeLeft} />
                </div>

                {/* Participants */}
                <div className="flex flex-col items-start lg:items-center">
                  <div className="text-xs muted-text mb-1">Участников</div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="Users" size={14} className="green-text" />
                    <span className="font-semibold text-grain-text">{a.participants}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <button className="btn-green px-5 py-2.5 rounded text-sm font-semibold whitespace-nowrap">
                    Сделать ставку
                  </button>
                  <button className="px-3 py-2.5 rounded border border-grain-border hover:border-grain-green transition-colors">
                    <Icon name="Eye" size={16} className="muted-text" />
                  </button>
                </div>
              </div>

              {/* Leader bar */}
              <div className="mt-4 pt-4 border-t border-grain-border flex items-center gap-2 text-xs muted-text">
                <Icon name="Crown" size={12} className="gold-text" />
                <span>Лидирует:</span>
                <span className="text-grain-text font-medium">{a.leader}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-8 py-3 rounded border border-grain-border text-sm text-grain-text hover:border-grain-green transition-colors">
            Все аукционы →
          </button>
        </div>
      </div>
    </section>
  );
}
