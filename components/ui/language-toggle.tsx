"use client"

import { useState, useEffect, useCallback } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

type Language = "es" | "en"

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (config: object, elementId: string) => void
      }
    }
    googleTranslateElementInit: () => void
  }
}

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("es")
  const [isLoaded, setIsLoaded] = useState(false)

  // Load Google Translate script on mount
  useEffect(() => {
    // Check if already loaded
    if (document.getElementById('google-translate-script')) {
      setIsLoaded(true)
      return
    }

    // Define the callback function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'en,es',
          autoDisplay: false,
          layout: 0, // InlineLayout.SIMPLE
        },
        'google_translate_element'
      )
      setIsLoaded(true)
    }

    // Add the script
    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup not needed as we want to keep translate loaded
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    const newLang = language === "es" ? "en" : "es"
    
    // Find the Google Translate dropdown
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
    
    if (selectElement) {
      // Set the value and trigger change
      selectElement.value = newLang
      selectElement.dispatchEvent(new Event('change', { bubbles: true }))
      setLanguage(newLang)
    } else {
      // Fallback: Set cookie and reload
      if (newLang === "en") {
        document.cookie = "googtrans=/es/en; path=/"
        document.cookie = "googtrans=/es/en; path=/; domain=" + window.location.hostname
      } else {
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname
      }
      window.location.reload()
    }
  }, [language])

  return (
    <>
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" className="!hidden" style={{ display: 'none' }} />
      
      {/* Hide Google Translate bar */}
      <style jsx global>{`
        .goog-te-banner-frame,
        .skiptranslate,
        .goog-te-gadget {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-te-combo {
          display: none !important;
        }
      `}</style>
      
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        disabled={!isLoaded}
        className="flex items-center gap-2 border-border hover:border-primary/30 hover:bg-primary/10 transition-all"
        title={language === "es" ? "Translate to English" : "Traducir a Espanol"}
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-medium">{language === "es" ? "EN" : "ES"}</span>
      </Button>
    </>
  )
}
