"use client";

import { Calendar, MessageSquare } from "lucide-react";

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Calendar className="text-casino-gold" size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-4">
            Расписание <span className="glow-text text-casino-gold">Стримов</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Не пропусти ни одного момента! Ловите Mellstroy в эфире.
          </p>
        </div>

        {/* Schedule Info */}
        <div className="max-w-4xl mx-auto">
          <div className="casino-card text-center border-casino-gold/50 bg-gradient-to-br from-casino-gold/10 to-purple-900/40">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Стримы почти каждый день! 🎮
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
                Mellstroy выходит в эфир почти каждый день в <span className="text-casino-gold font-semibold">неопределенное время</span>. 
                Расписание может меняться, поэтому следите за актуальной информацией!
              </p>
            </div>
            
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 sm:p-6 mt-6">
              <div className="flex items-center justify-center mb-3">
                <MessageSquare className="text-blue-400" size={28} />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Актуальная информация в Telegram
              </h4>
              <p className="text-sm sm:text-base text-gray-300 mb-5 px-2">
                Все анонсы стримов, точное время начала и важные новости публикуются в официальном Telegram канале!
              </p>
              <a 
                href="https://t.me/tellstroy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary inline-flex items-center space-x-2 text-sm sm:text-base px-6 sm:px-8"
              >
                <MessageSquare size={18} />
                <span>Подписаться на Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Watch on Kick */}
        <div className="mt-12 text-center">
          <div className="casino-card max-w-2xl mx-auto bg-gradient-to-r from-green-900/30 to-green-700/20 border-green-500/30">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Смотри стримы на Kick</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-5 px-4">
              Включи уведомления на Kick, чтобы не пропустить начало стрима!
            </p>
            <a href="https://kick.com/mellstroy987" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-sm sm:text-base px-6 sm:px-8">
              Перейти на Kick
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

