"use client";

import { Trophy, Zap, Heart, Star } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Trophy className="text-casino-gold" size={40} />,
      title: "Рекордные Выигрыши",
      description: "Смотри как Mellstroy срывает легендарные джекпоты и огромные множители, которые взрывают интернет.",
    },
    {
      icon: <Zap className="text-casino-gold" size={40} />,
      title: "Энергичные Стримы",
      description: "Нон-стоп экшен, азарт и развлечения. Каждый стрим - незабываемый опыт.",
    },
    {
      icon: <Heart className="text-casino-gold" size={40} />,
      title: "Огромное Комьюнити",
      description: "Присоединяйся к тысячам фанатов в активном сообществе. Делись выигрышами, стратегиями и эпичными моментами.",
    },
    {
      icon: <Star className="text-casino-gold" size={40} />,
      title: "Премиум Контент",
      description: "Эксклюзивный доступ к бонус хантам, челленджам и закулисному контенту из мира казино.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-4">
            Почему <span className="glow-text text-casino-gold">Mellstroy</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Самый зажигательный казино стример, который приносит тебе самые большие выигрыши,
            безумные моменты и лучшие развлечения в игре.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="casino-card max-w-4xl mx-auto">
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold italic text-casino-gold mb-4 px-4">
              "Ва-банк или ничего. Вот как мы играем."
            </blockquote>
            <p className="text-lg sm:text-xl text-gray-300">- Mellstroy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

