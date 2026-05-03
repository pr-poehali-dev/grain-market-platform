const prices = [
  { culture: "Пшеница 3кл", price: "14 800 ₽/т", change: "+2.1%" },
  { culture: "Пшеница 4кл", price: "13 200 ₽/т", change: "+0.8%" },
  { culture: "Ячмень", price: "12 100 ₽/т", change: "-0.5%" },
  { culture: "Кукуруза", price: "13 600 ₽/т", change: "+1.4%" },
  { culture: "Соя", price: "38 500 ₽/т", change: "+3.2%" },
  { culture: "Подсолнечник", price: "29 800 ₽/т", change: "-1.1%" },
  { culture: "Рапс", price: "31 200 ₽/т", change: "+0.6%" },
  { culture: "Рожь", price: "10 400 ₽/т", change: "+1.9%" },
  { culture: "Горох", price: "18 900 ₽/т", change: "-0.3%" },
];

export default function TickerBar() {
  const items = [...prices, ...prices];

  return (
    <div className="ticker-bar overflow-hidden whitespace-nowrap py-2 border-b border-grain-border/50">
      <div className="inline-flex animate-ticker">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-6 text-xs">
            <span className="muted-text">{item.culture}</span>
            <span className="text-grain-text font-semibold">{item.price}</span>
            <span className={`text-xs font-medium ${item.change.startsWith("+") ? "green-text" : "text-red-400"}`}>
              {item.change}
            </span>
            <span className="muted-text opacity-30">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
