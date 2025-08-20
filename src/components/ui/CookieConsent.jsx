// src/components/CookieConsent.jsx

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Check for consent on initial load
  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (consent === null) {
        setIsVisible(true);
      }
    } catch (error) {
      console.error("Could not access local storage:", error);
    }
  }, []);

  // Trigger the enter animation after the component is visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsMounted(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  
  const handleAction = (consentValue) => {
    setIsExiting(true);

    const timer = setTimeout(() => {
      try {
        localStorage.setItem("cookie_consent", consentValue);
      } catch (error) {
        console.error("Could not access local storage:", error);
      }
      setIsVisible(false);
      setIsExiting(false);
      setIsMounted(false);
    }, 300);

    return () => clearTimeout(timer);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`
        fixed inset-0 z-[100] flex items-center justify-center p-6
        bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out
        ${isMounted && !isExiting ? 'opacity-100' : 'opacity-0'}
      `}
      aria-labelledby="cookie-consent-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`
          bg-background rounded-2xl shadow-elegant border border-muted/50
          text-center transform transition-all duration-300 ease-in-out
          w-11/12 p-6 sm:p-8 max-w-xs sm:max-w-sm
          ${isMounted && !isExiting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        <div className="flex justify-center items-center mx-auto h-12 w-12 rounded-full bg-gold/10">
          <Cookie className="h-7 w-7 text-gold" />
        </div>
        <h2 id="cookie-consent-title" className="text-2xl font-semibold mt-5 text-foreground">
          Your Cookie Preferences
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          We use cookies and similar technologies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
        <p className="mt-5 text-xs text-muted-foreground/80"> 
          You can change your mind at any time. For more information, please read our{' '}
          <a href="/privacy-policy" className="underline hover:text-gold transition-colors">Privacy Policy</a>.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => handleAction('false')}
            className="flex-1 px-4 py-3 rounded-lg text-base font-semibold text-foreground bg-muted hover:bg-muted/80 transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={() => handleAction('true')}
            className="flex-1 px-4 py-3 rounded-lg text-base font-semibold text-white bg-gold hover:bg-gold/90 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;