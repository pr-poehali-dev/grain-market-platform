import Icon from "@/components/ui/icon";

const links = {
  "Площадка": ["Каталог лотов", "Активные торги", "Разместить лот", "Аналитика цен"],
  "Компания": ["О платформе", "Новости", "Пресс-центр", "Карьера"],
  "Поддержка": ["Центр помощи", "Документация", "Видеогайды", "Написать нам"],
  "Правовые": ["Пользовательское соглашение", "Политика конфиденциальности", "Правила торгов", "Оферта"],
};

export default function Footer() {
  return (
    <footer className="border-t border-grain-border bg-grain-dark-2 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded green-gradient flex items-center justify-center">
                <Icon name="Wheat" size={18} className="text-white" />
              </div>
              <div>
                <div className="text-[15px] font-bold text-grain-text font-golos">Рынок Зерна</div>
                <div className="text-[9px] uppercase tracking-widest muted-text">торговая площадка</div>
              </div>
            </div>
            <p className="text-xs muted-text leading-relaxed mb-5 max-w-xs">
              Профессиональная B2B-платформа для торговли зерновыми культурами.
              Верифицированные участники, прозрачные торги, надёжная поддержка.
            </p>
            <div className="flex gap-3">
              {["send", "Youtube", "Linkedin"].map((icon) => (
                <button key={icon} className="w-8 h-8 rounded border border-grain-border hover:border-grain-green transition-colors flex items-center justify-center">
                  <Icon name={icon} size={14} className="muted-text" fallback="Globe" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-xs font-semibold text-grain-text uppercase tracking-wide mb-4">{category}</div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs muted-text hover:text-grain-text transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-grain-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs muted-text">© 2026 Рынок Зерна. Все права защищены.</div>
          <div className="flex items-center gap-4 text-xs muted-text">
            <span>ИНН 7700000000</span>
            <span>•</span>
            <span>ОГРН 1027700000000</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Icon name="Shield" size={11} className="green-text" />
              SSL-защита
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
