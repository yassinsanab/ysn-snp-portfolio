import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Bildung & Studium</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Aktuelle Ausbildung in Medieninformatik mit Fokus auf moderne Webtechnologien und digitale Medien.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <GraduationCap className="h-6 w-6" />
                Medieninformatik
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">HTWK Leipzig</h3>
                    <p className="text-muted-foreground text-pretty">
                      Hochschule für Technik, Wirtschaft und Kultur Leipzig - Eine der führenden Fachhochschulen in
                      Deutschland für angewandte Wissenschaften.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Leipzig, Deutschland</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Aktuell im Studium</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Studieninhalte & Schwerpunkte:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <Badge variant="outline" className="justify-start">
                        Webentwicklung & Design
                      </Badge>
                      <Badge variant="outline" className="justify-start">
                        HTML, CSS & moderne Webtechnologien
                      </Badge>
                      <Badge variant="outline" className="justify-start">
                        Digitale Medienproduktion
                      </Badge>
                      <Badge variant="outline" className="justify-start">
                        User Interface Design
                      </Badge>
                      <Badge variant="outline" className="justify-start">
                        Projektmanagement
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-medium mb-3">Relevante Kompetenzen für Remote-IT-Jobs:</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-sm">Frontend-Entwicklung</h5>
                      <p className="text-xs text-muted-foreground">HTML, CSS, responsive Design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-sm">UI/UX Design</h5>
                      <p className="text-xs text-muted-foreground">Benutzerfreundliche Interfaces</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-sm">Digitale Medien</h5>
                      <p className="text-xs text-muted-foreground">Content-Erstellung & -Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
