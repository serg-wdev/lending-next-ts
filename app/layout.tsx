import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mellstroy - Top Streamer | Live Entertainment & Epic Moments",
  description: "Watch Mellstroy's epic streams! Experience high-energy content, amazing moments, and non-stop entertainment. Join the community now!",
  keywords: ["Mellstroy", "streamer", "entertainment", "live stream", "gaming", "community"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="animated-bg">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}

