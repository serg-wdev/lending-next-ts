"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-purple-500/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
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

