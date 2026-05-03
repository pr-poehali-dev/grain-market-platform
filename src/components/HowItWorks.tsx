import Icon from "@/components/ui/icon";

const steps = [
  {
    num: "01",
    icon: "UserPlus",
    title: "Регистрация",
    desc: "Создайте аккаунт, заполните профиль компании и пройдите верификацию документов.",
  },
  {
    num: "02",
    icon: "PackagePlus",
    title: "Разместите лот",
    desc: "Укажите культуру, объём, регион, цену и условия поставки — займёт 3 минуты.",
  },
  {
    num: "03",
    icon: "Gavel",
    title: "Участвуйте в торгах",
    desc: "Делайте ставки, следите за аукционом в реальном времени, получайте уведомления.",
  },
  {
    num: "04",
    icon: "Handshake",
    title: "Заключите сделку",
    desc: "Подпишите договор, организуйте доставку и получите подтверждение платежа.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 border-b border-grain-border" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-widest gold-text font-semibold mb-3">Как это работает</div>
          <h2 className="text-3xl md:text-4xl font-bold text-grain-text font-golos">
            От регистрации до сделки
            <br />
            <span className="muted-text font-normal">за 4 шага</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-6 h-px bg-grain-border z-10" />
              )}

              <div className="shine-border rounded-lg p-6 card-hover h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="font-oswald text-4xl font-bold text-grain-border leading-none">{step.num}</div>
                  <div className="w-9 h-9 rounded green-gradient flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={step.icon} size={18} className="text-white" fallback="Circle" />
                  </div>
                </div>
                <h3 className="font-semibold text-grain-text mb-2">{step.title}</h3>
                <p className="text-sm muted-text leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="btn-gold px-8 py-3 rounded text-sm font-semibold">
            Начать работу бесплатно
          </button>
        </div>
      </div>
    </section>
  );
}
