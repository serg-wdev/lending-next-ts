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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Фоновые иконки */}
      <div className="absolute inset-0 pointer-events-none">
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

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Hero Content */}
        <div className="space-y-8">
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="block mb-2">WELCOME TO</span>
            <span className="block glow-text text-casino-gold">MELLSTROY</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-4 text-purple-300">
              Casino Empire
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Почувствуй адреналин высоких ставок в казино с безумными выигрышами,
            легендарными моментами и комьюнити, которое никогда не спит.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a href="https://kick.com/mellstroy987" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center">
              <Play size={20} fill="currentColor" />
              <span>Смотреть Стрим</span>
            </a>
            <a href="https://t.me/tellstroy" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center">
              <Users size={20} />
              <span>Вступить в Комьюнити</span>
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="casino-card text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-casino-gold" size={32} />
              </div>
              <div className="text-3xl font-bold text-casino-gold">5M+</div>
              <div className="text-gray-400 mt-1">Подписчиков</div>
            </div>

            <div className="casino-card text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="text-casino-gold" size={32} />
              </div>
              <div className="text-3xl font-bold text-casino-gold">$330M+</div>
              <div className="text-gray-400 mt-1">Депозит</div>
            </div>

            <div className="casino-card text-center">
              <div className="flex items-center justify-center mb-2">
                <Play className="text-casino-gold" size={32} />
              </div>
              <div className="text-3xl font-bold text-casino-gold">910K+</div>
              <div className="text-gray-400 mt-1">Telegram</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

