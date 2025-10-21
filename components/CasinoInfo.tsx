"use client";

import { Coins, Gift, Shield, Zap } from "lucide-react";

export default function CasinoInfo() {
  const features = [
    {
      icon: <Coins className="text-casino-gold" size={40} />,
      title: "Щедрые Бонусы",
      description: "Получи эксклюзивные бонусы для новых игроков и постоянные акции для активных пользователей.",
    },
    {
      icon: <Zap className="text-casino-gold" size={40} />,
      title: "Быстрые Выплаты",
      description: "Мгновенные выводы средств без задержек. Твой выигрыш - твои деньги, без ожидания.",
    },
    {
      icon: <Shield className="text-casino-gold" size={40} />,
      title: "Безопасность",
      description: "Лицензированное казино с проверенной репутацией. Играй безопасно и надежно.",
    },
    {
      icon: <Gift className="text-casino-gold" size={40} />,
      title: "Эксклюзивные Игры",
      description: "Огромный выбор слотов, live-казино и уникальные игры от лучших провайдеров.",
    },
  ];

  return (
    <section id="casino" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="glow-text text-casino-gold">Mellstroy.club</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 px-4">
            Официальное онлайн-казино от Mellstroy! Играй там же, где играет сам стример. 
            Эксклюзивные бонусы и условия для подписчиков.
          </p>
          <div className="inline-flex items-center space-x-2 bg-casino-gold/20 border border-casino-gold/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
            <span className="text-sm sm:text-base md:text-lg font-bold text-casino-gold">🎰 Только для 18+</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="casino-card group cursor-pointer"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-casino-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="casino-card max-w-4xl mx-auto text-center border-casino-gold/50 bg-gradient-to-br from-casino-gold/10 to-purple-900/40">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Начни играть прямо сейчас! 🚀
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 px-4">
            Испытай удачу в <span className="text-casino-gold font-bold">Mellstroy.club</span>! Играй там же, где играет сам стример. 
            Тысячи слотов, live-казино и эксклюзивные игры ждут тебя!
          </p>
          <div className="flex justify-center px-4">
            <a 
              href="https://mellstroy.club" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 w-full sm:w-auto"
            >
              Перейти на Mellstroy.club
            </a>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            ⚠️ Азартные игры могут вызывать зависимость. Играйте ответственно. 18+
          </p>
        </div>
      </div>
    </section>
  );
}

