import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "ShieldCheck",
    title: "Верификация контрагентов",
    desc: "Проверяем ОГРН, ИНН, лицензии и репутацию каждого участника перед допуском на платформу.",
  },
  {
    icon: "FileText",
    title: "Документооборот онлайн",
    desc: "Договоры, спецификации и акты подписываются в системе. Юридически значимая электронная подпись.",
  },
  {
    icon: "Lock",
    title: "Эскроу-платежи",
    desc: "Средства покупателя резервируются до подтверждения поставки. Безопасно для обеих сторон.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Персональный менеджер",
    desc: "Для компаний с оборотом от 10 млн ₽ — выделенный менеджер сопровождает каждую сделку.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 border-b border-grain-border bg-grain-dark-2">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/17be051d-68c7-4361-b662-2b9dcf8f8093/files/49372ed1-2645-470f-936c-963f2d6c7895.jpg"
              alt="Элеватор"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-grain-dark-2/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="shine-border rounded-lg p-4 backdrop-blur-sm bg-grain-dark/60">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full green-gradient flex items-center justify-center">
                    <Icon name="TrendingUp" size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs muted-text">Объём торгов за апрель</div>
                    <div className="text-lg font-bold gold-text font-oswald">₽842 млн</div>
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <div>
                    <div className="muted-text">Сделок</div>
                    <div className="text-grain-text font-semibold">1 247</div>
                  </div>
                  <div>
                    <div className="muted-text">Ср. чек</div>
                    <div className="text-grain-text font-semibold">₽675 тыс.</div>
                  </div>
                  <div>
                    <div className="muted-text">Повторных</div>
                    <div className="green-text font-semibold">78%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div>
            <div className="text-xs uppercase tracking-widest gold-text font-semibold mb-3">Безопасность</div>
            <h2 className="text-3xl md:text-4xl font-bold text-grain-text font-golos mb-6">
              Торгуйте уверенно.
              <br />
              <span className="muted-text font-normal">Мы отвечаем за надёжность.</span>
            </h2>
            <p className="text-sm muted-text leading-relaxed mb-8">
              Платформа разработана для профессионального аграрного рынка. Каждый инструмент
              направлен на минимизацию рисков и максимальное удобство работы.
            </p>

            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-9 h-9 rounded green-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={f.icon} size={17} className="text-white" fallback="Circle" />
                  </div>
                  <div>
                    <div className="font-semibold text-grain-text text-sm mb-1">{f.title}</div>
                    <div className="text-xs muted-text leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
