"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Kontakt</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hier finden Sie meine Kontaktdaten für eine direkte Kommunikation.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">Kontaktdaten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">E-Mail</p>
                  <a
                    href="mailto:yassinesanab@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    yassinesanab@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <a
                    href="tel:+4917673917953"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +49 176 73917953
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Standort</p>
                  <p className="text-sm text-muted-foreground">Leipzig, Deutschland</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
