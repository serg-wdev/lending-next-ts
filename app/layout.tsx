import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mellstroy - Casino Streamer | Live Gaming & Big Wins",
  description: "Watch Mellstroy's epic casino streams! Experience high-stakes gambling, massive wins, and non-stop entertainment. Join the community now!",
  keywords: ["Mellstroy", "casino streamer", "gambling", "slots", "live casino", "big wins"],
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

