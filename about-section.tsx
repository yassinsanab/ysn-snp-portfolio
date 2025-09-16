import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Home } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Über mich</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Leidenschaftlicher Medieninformatiker mit Fokus auf Remote-Arbeit und moderne Webtechnologien. Bereit für
            innovative Projekte und internationale Zusammenarbeit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary text-xl">
                <Users className="h-6 w-6" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Teamfähig</span>
                  <span className="text-muted-foreground text-sm">- Kollaborative Arbeitsweise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="font-medium">Selbstorganisiert</span>
                  <span className="text-muted-foreground text-sm">- Eigenverantwortliches Arbeiten</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">Lösungsorientiert</span>
                  <span className="text-muted-foreground text-sm">- Kreative Problemlösung</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Kommunikativ</span>
                  <span className="text-muted-foreground text-sm">- Mehrsprachig & klar</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary text-xl">
                <Home className="h-6 w-6" />
                Remote Work
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty">
                Spezialisiert auf Remote-Arbeit mit modernster Technologie-Ausstattung und flexiblen Arbeitszeiten.
                Erfahrung in virtueller Teamarbeit und digitaler Kommunikation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Vollständig ausgestatteter Home-Office</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Flexible Arbeitszeiten (CET/CEST)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Erfahrung mit Remote-Tools</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-card/30 to-muted/20 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary text-xl">
                <Target className="h-6 w-6" />
                Kultureller Hintergrund
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty">
                Geboren in Marokko, jetzt wohnhaft in Deutschland - diese multikulturelle Erfahrung bringt mir eine
                einzigartige Perspektive in internationale Projekte und interkulturelle Teamarbeit.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  🇲🇦 Marokkanische Wurzeln
                </Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                  🇩🇪 Leben in Deutschland
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  🌍 Internationale Perspektive
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card/30 to-muted/20 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary text-xl">
                <Lightbulb className="h-6 w-6" />
                Motivation & Ziele
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty">
                Meine Leidenschaft liegt in der Entwicklung innovativer digitaler Lösungen. Ich suche nach spannenden
                Remote-Projekten, wo ich meine Kreativität und technischen Fähigkeiten einsetzen kann.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm">Innovative Webtechnologien</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
                  <span className="text-sm">Kreative Problemlösung</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
                  <span className="text-sm">Kontinuierliches Lernen</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
