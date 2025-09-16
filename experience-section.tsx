import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Medien Informatik Studium",
      institution: "HTWK Leipzig",
      location: "Leipzig, Deutschland",
      period: "2021 - Heute",
      type: "Studium",
      description:
        "Schwerpunkt auf Webentwicklung, digitale Medien und moderne Programmiersprachen. Praktische Projekte in HTML, CSS, JavaScript und Design.",
      skills: ["HTML", "CSS", "JavaScript", "Webdesign", "UX/UI"],
      icon: <GraduationCap className="h-5 w-5" />,
      color: "bg-primary",
    },
    {
      title: "Praktische Projekte",
      institution: "Eigenständige Entwicklung",
      location: "Remote",
      period: "2021 - Heute",
      type: "Projekte",
      description:
        "Entwicklung verschiedener Webprojekte und Anwendungen. Fokus auf moderne Technologien und responsive Design.",
      skills: ["React", "TypeScript", "Node.js", "Design"],
      icon: <Calendar className="h-5 w-5" />,
      color: "bg-secondary",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Erfahrung & Bildung</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Mein Weg in der Medieninformatik und praktische Erfahrungen in der Webentwicklung
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div
                  className={`relative z-10 w-16 h-16 ${exp.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                >
                  {exp.icon}
                </div>

                {/* Content card */}
                <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                        <p className="text-primary font-medium">{exp.institution}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <Badge variant="outline" className="w-fit">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-pretty">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
