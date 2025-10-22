"use client";

import { Instagram } from "lucide-react";

export default function Community() {
  const socials = [
    {
      name: "Kick",
      icon: (
        <div className="bg-black rounded-md px-0.5 py-0">
          <span className="text-3xl font-bold text-white leading-none" style={{ display: 'inline-block', width: '1em', textAlign: 'center' }}>K</span>
        </div>
      ),
      description: "Смотри стримы",
      followers: "Live Now",
      color: "from-green-600 to-green-800",
      link: "https://kick.com/mellstroy987",
    },
    {
      name: "Instagram",
      icon: <Instagram size={32} />,
      description: "Ежедневные обновления",
      followers: "5M+",
      color: "from-pink-600 to-purple-600",
      link: "https://www.instagram.com/mellstroy/?hl=ru",
    },
    {
      name: "Telegram",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      ),
      description: "Чат сообщества",
      followers: "910K+",
      color: "from-blue-500 to-blue-700",
      link: "https://t.me/tellstroy",
    },
  ];

  return (
    <section id="community" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-4">
            Присоединяйся к <span className="glow-text text-casino-gold">Community</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Общайся с Mellstroy и тысячами фанатов на всех платформах.
            Будь частью движа!
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="casino-card group cursor-pointer hover:scale-105 transform transition-all duration-300 flex sm:block"
            >
              {/* Icon and Info Container */}
              <div className="flex sm:block w-full">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${social.color} w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center flex-shrink-0 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {social.icon}
                  </div>
                </div>
                
                {/* Info */}
                <div className="ml-4 sm:ml-0 flex flex-col justify-center sm:block">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-casino-gold transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-3">{social.description}</p>
                  <div className="text-casino-gold font-bold text-base sm:text-lg">
                    {social.followers}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

