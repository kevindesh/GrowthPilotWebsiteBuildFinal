import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState<string>("24h 00m 00s");

  useEffect(() => {
    // Get or set the offer start time in localStorage
    const offerStartTime = localStorage.getItem("offerStartTime");
    const startTime = offerStartTime ? new Date(offerStartTime) : new Date();

    if (!offerStartTime) {
      localStorage.setItem("offerStartTime", startTime.toISOString());
    }

    const updateTimer = () => {
      const now = new Date();
      const start = new Date(offerStartTime || startTime.toISOString());
      const offerEndTime = new Date(start.getTime() + 24 * 60 * 60 * 1000); // 24 hours later

      const diff = offerEndTime.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Offer expired");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-accent/80 text-accent-foreground py-3 px-4 text-center">
      <p className="text-sm md:text-base font-medium">
        🎉 <strong>Limited Time Offer:</strong> Get your first week free when you sign up in the next{" "}
        <span className="font-bold">{timeLeft}</span>!{" "}
        <Link to="/contact" className="underline hover:no-underline font-semibold">
          Claim your offer →
        </Link>
      </p>
    </div>
  );
}
