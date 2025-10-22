"use client";

import { Play, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);

  // Генерируем позиции для фоновых иконок
  const backgroundIcons = [
    { size: 80, top: '10%', left: '5%', opacity: 0.2, rotation: 15 },
    { size: 120, top: '20%', right: '8%', opacity: 0.18, rotation: -20 },
    { size: 60, top: '35%', left: '15%', opacity: 0.22, rotation: 45 },
    { size: 100, top: '50%', right: '12%', opacity: 0.19, rotation: -30 },
    { size: 70, top: '65%', left: '10%', opacity: 0.21, rotation: 25 },
    { size: 90, top: '75%', right: '15%', opacity: 0.17, rotation: -15 },
    { size: 50, top: '15%', left: '25%', opacity: 0.2, rotation: 60 },
    { size: 110, top: '40%', right: '25%', opacity: 0.18, rotation: -45 },
    { size: 65, top: '60%', left: '30%', opacity: 0.19, rotation: 30 },
    { size: 85, top: '25%', right: '20%', opacity: 0.2, rotation: -25 },
    { size: 75, top: '70%', left: '20%', opacity: 0.21, rotation: 40 },
    { size: 95, top: '45%', left: '8%', opacity: 0.17, rotation: -35 },
  ];

  useEffect(() => {
    // Проверяем статус стрима при загрузке
    const checkStreamStatus = async () => {
      try {
        const response = await fetch('/api/stream-status');
        const data = await response.json();
        setIsLive(data.isLive);
        setViewerCount(data.viewerCount);
      } catch (error) {
        console.error('Error checking stream status:', error);
      }
    };

    checkStreamStatus();
    
    // Проверяем статус каждые 60 секунд
    const interval = setInterval(checkStreamStatus, 60000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative overflow-hidden">
      {/* Фоновые иконки */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {backgroundIcons.map((icon, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              top: icon.top,
              left: icon.left,
              right: icon.right,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${15 + index * 2}s`,
            }}
          >
            <Image
              src="/mellog.png"
              alt=""
              width={icon.size}
              height={icon.size}
              className="object-contain"
              style={{
                opacity: icon.opacity,
                transform: `rotate(${icon.rotation}deg)`,
                filter: 'brightness(1.2) drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))',
              }}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        {/* Main Hero Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 ${
            isLive 
              ? 'bg-green-600/20 border border-green-500/50' 
              : 'bg-red-600/20 border border-red-500/50'
          } rounded-full px-4 sm:px-6 py-2 backdrop-blur-sm`}>
            <div className={`w-2 h-2 ${
              isLive ? 'bg-green-500' : 'bg-red-500'
            } rounded-full animate-pulse`} />
            <span className="text-xs sm:text-sm font-semibold text-white">
              {isLive ? 'LIVE NOW' : 'OFFLINE NOW'}
              {isLive && viewerCount > 0 && (
                <span className="ml-2 text-casino-gold hidden sm:inline">• {viewerCount.toLocaleString()} viewers</span>
              )}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold px-2">
            <span className="block mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">WELCOME TO</span>
            <span className="block leading-tight break-words">
              <span className="glow-text text-casino-gold">MELLSTROY</span><span 
                className="inline-block"
                style={{
                  WebkitTextStroke: '1px #FFD700',
                  WebkitTextFillColor: 'transparent',
                  background: 'transparent',
                  backgroundColor: 'transparent',
                  fontWeight: '700',
                }}
              >.GAME</span>
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 text-purple-300">
              Streaming Empire
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Почувствуй адреналин захватывающих стримов с безумными моментами,
            легендарными событиями и комьюнити, которое никогда не спит.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 px-4">
            <a href="https://kick.com/mellstroy987" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center text-sm sm:text-base py-3 sm:py-3 px-6 sm:px-8">
              <Play size={18} fill="currentColor" className="sm:w-5 sm:h-5" />
              <span>Смотреть Стрим</span>
            </a>
            <a href="https://t.me/tellstroy" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center text-sm sm:text-base py-3 sm:py-3 px-6 sm:px-8">
              <Users size={18} className="sm:w-5 sm:h-5" />
              <span>Вступить в Комьюнити</span>
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 lg:mt-16 max-w-4xl mx-auto px-4">
            <div className="casino-card text-center p-4 sm:p-6">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-casino-gold w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-casino-gold">5M+</div>
              <div className="text-gray-400 mt-1 text-sm sm:text-base">Подписчиков</div>
            </div>

            <div className="casino-card text-center p-4 sm:p-6">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="text-casino-gold w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-casino-gold">2K+</div>
              <div className="text-gray-400 mt-1 text-sm sm:text-base">Стримов</div>
            </div>

            <div className="casino-card text-center p-4 sm:p-6">
              <div className="flex items-center justify-center mb-2">
                <Play className="text-casino-gold w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-casino-gold">910K+</div>
              <div className="text-gray-400 mt-1 text-sm sm:text-base">Telegram</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

