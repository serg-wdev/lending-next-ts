"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-purple-500/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Disclaimer */}
        <div className="mb-6">
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
            <p className="text-yellow-200 text-xs sm:text-sm text-center leading-relaxed">
              <strong>⚠️ Внимание:</strong> Контент на этом сайте предназначен для развлекательных целей и может быть не подходящим для всех зрителей. Только для лиц старше 18 лет. Смотрите контент ответственно.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="text-center text-gray-400 text-xs sm:text-sm px-4">
            <p className="break-words">
              © {currentYear} Mellstroy. All rights reserved. | Stream content is entertainment only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

