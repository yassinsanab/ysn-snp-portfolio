import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Moderne, responsive Portfolio-Website mit React und Next.js. Fokus auf Performance und Benutzerfreundlichkeit.",
      image: "/modern-portfolio-website.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      category: "Web Development",
      status: "Live",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "E-Commerce Interface",
      description: "Benutzerfreundliche E-Commerce-Oberfläche mit modernem Design und optimierter User Experience.",
      image: "/ecommerce-website-interface.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "UX/UI"],
      category: "UI/UX Design",
      status: "In Entwicklung",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Mobile App Konzept",
      description:
        "Konzeptionierung und Design einer mobilen Anwendung mit Fokus auf Benutzerfreundlichkeit und moderne Ästhetik.",
      image: "/mobile-app-design-concept.jpg",
      technologies: ["Figma", "Adobe XD", "Prototyping", "UX Research"],
      category: "Mobile Design",
      status: "Konzept",
      links: {
        demo: "#",
      },
    },
    {
      title: "Web-Anwendung Dashboard",
      description: "Interaktives Dashboard für Datenvisualisierung mit modernen Charts und responsivem Design.",
      image: "/dashboard-web-application-interface.jpg",
      technologies: ["React", "Chart.js", "Node.js", "API Integration"],
      category: "Full Stack",
      status: "Live",
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  const categories = ["Alle", "Web Development", "UI/UX Design", "Mobile Design", "Full Stack"]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Projekte & Arbeiten</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Eine Auswahl meiner kreativen Projekte und technischen Entwicklungen
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Alle" ? "default" : "outline"}
              className="hover:scale-105 transition-transform duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.links.demo && (
                      <Button size="sm" className="bg-primary/90 hover:bg-primary">
                        <Eye className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" className="bg-background/90">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className={`${
                      project.status === "Live"
                        ? "bg-green-500/90 text-white"
                        : project.status === "In Entwicklung"
                          ? "bg-yellow-500/90 text-white"
                          : "bg-blue-500/90 text-white"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="mt-2 w-fit">
                      {project.category}
                    </Badge>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
