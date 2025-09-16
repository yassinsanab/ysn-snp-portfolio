"use client"
import { MapPin, Mail, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-lg animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/5 rounded-full blur-xl animate-bounce delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                <span className="text-foreground">Hallo, ich bin</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
                  Yassine Sanab
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-medium text-muted-foreground text-pretty">
                Medieninformatiker · IT · Remote Work
              </p>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Leidenschaftlicher Entwickler mit Fokus auf moderne Webtechnologien und kreative digitale Lösungen.
                Bereit für spannende Remote-Projekte.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <MapPin className="h-4 w-4" />
                <span>Leipzig, Deutschland</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <Mail className="h-4 w-4" />
                <span>yassinesanab@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <Phone className="h-4 w-4" />
                <span>+49 176 73917953</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
