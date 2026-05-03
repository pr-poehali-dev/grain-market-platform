import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-20 border-b border-grain-border" id="contacts">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <div className="text-xs uppercase tracking-widest gold-text font-semibold mb-3">Контакты</div>
            <h2 className="text-3xl md:text-4xl font-bold text-grain-text font-golos mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-sm muted-text leading-relaxed mb-8">
              Готовы ответить на любые вопросы по работе платформы, условиям сотрудничества
              и техническим деталям интеграции.
            </p>

            <div className="space-y-5">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (800) 555-12-34", sub: "Бесплатно, пн–пт 8:00–20:00" },
                { icon: "Mail", label: "Email", value: "info@rynokzerna.ru", sub: "Ответим в течение 2 часов" },
                { icon: "MapPin", label: "Адрес", value: "Москва, Садовническая ул., 82с2", sub: "Деловой центр «Аврора»" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 8:00 – 20:00", sub: "Сб: 9:00 – 16:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded green-gradient flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={16} className="text-white" fallback="Circle" />
                  </div>
                  <div>
                    <div className="text-xs muted-text">{c.label}</div>
                    <div className="text-sm font-semibold text-grain-text">{c.value}</div>
                    <div className="text-xs muted-text">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Grain image */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/17be051d-68c7-4361-b662-2b9dcf8f8093/files/a310a51e-bdaa-42e6-abc6-789138bbc735.jpg"
                alt="Зерно"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="shine-border rounded-xl p-6 md:p-8">
            {!sent ? (
              <>
                <div className="font-semibold text-grain-text mb-1">Оставить заявку</div>
                <div className="text-xs muted-text mb-6">Перезвоним в рабочее время</div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs muted-text block mb-1.5">Имя *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Петров"
                        className="w-full bg-grain-dark border border-grain-border rounded px-3 py-2.5 text-sm text-grain-text placeholder:muted-text focus:outline-none focus:border-grain-green transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs muted-text block mb-1.5">Компания</label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="ООО «Агро»"
                        className="w-full bg-grain-dark border border-grain-border rounded px-3 py-2.5 text-sm text-grain-text placeholder:muted-text focus:outline-none focus:border-grain-green transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs muted-text block mb-1.5">Телефон *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-grain-dark border border-grain-border rounded px-3 py-2.5 text-sm text-grain-text placeholder:muted-text focus:outline-none focus:border-grain-green transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs muted-text block mb-1.5">Сообщение</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Опишите ваш вопрос или задачу..."
                      rows={4}
                      className="w-full bg-grain-dark border border-grain-border rounded px-3 py-2.5 text-sm text-grain-text placeholder:muted-text focus:outline-none focus:border-grain-green transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="w-full btn-gold py-3 rounded font-semibold text-sm">
                    Отправить заявку
                  </button>

                  <p className="text-xs muted-text text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 rounded-full green-gradient flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={28} className="text-white" />
                </div>
                <div className="font-semibold text-grain-text mb-2">Заявка отправлена!</div>
                <div className="text-sm muted-text">Перезвоним вам в ближайшее рабочее время</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
