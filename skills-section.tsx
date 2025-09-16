import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Languages } from "lucide-react"

export function SkillsSection() {
  const webTechnologies = [
    { name: "HTML5", icon: "🌐", color: "bg-orange-500" },
    { name: "CSS3", icon: "🎨", color: "bg-blue-500" },
    { name: "JavaScript", icon: "⚡", color: "bg-yellow-500" },
    { name: "React", icon: "⚛️", color: "bg-cyan-500" },
    { name: "TypeScript", icon: "📘", color: "bg-blue-600" },
    { name: "Node.js", icon: "🟢", color: "bg-green-500" },
  ]

  const designTools = [
    { name: "Adobe Photoshop", icon: "🖼️", color: "bg-blue-600" },
    { name: "Adobe Illustrator", icon: "🎯", color: "bg-orange-600" },
    { name: "Figma", icon: "🎨", color: "bg-purple-500" },
    { name: "UX/UI Design", icon: "✨", color: "bg-pink-500" },
  ]

  const programmingLanguages = [
    { name: "Python", icon: "🐍", color: "bg-green-600" },
    { name: "Java", icon: "☕", color: "bg-red-600" },
    { name: "C++", icon: "⚙️", color: "bg-blue-700" },
    { name: "SQL", icon: "🗄️", color: "bg-gray-600" },
  ]

  const languages = [
    { name: "Arabisch", level: 100, description: "Muttersprache", flag: "🇲🇦" },
    { name: "Deutsch", level: 90, description: "C1", flag: "🇩🇪" },
    { name: "Englisch", level: 75, description: "Gut", flag: "🇬🇧" },
    { name: "Französisch", level: 70, description: "Gut", flag: "🇫🇷" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Fähigkeiten & Technologien</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Moderne Technologien und kreative Tools für innovative digitale Lösungen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary text-xl">
                <Code className="h-6 w-6" />
                Web Technologien
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {webTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  >
                    <div
                      className={`w-8 h-8 ${tech.color} rounded-full flex items-center justify-center text-white text-sm`}
                    >
                      {tech.icon}
                    </div>
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary text-xl">
                <Palette className="h-6 w-6" />
                Design & Kreativität
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {designTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  >
                    <div
                      className={`w-8 h-8 ${tool.color} rounded-full flex items-center justify-center text-white text-sm`}
                    >
                      {tool.icon}
                    </div>
                    <span className="font-medium text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary text-xl">
                <Database className="h-6 w-6" />
                Programmiersprachen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {programmingLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  >
                    <div
                      className={`w-8 h-8 ${lang.color} rounded-full flex items-center justify-center text-white text-sm`}
                    >
                      {lang.icon}
                    </div>
                    <span className="font-medium text-sm">{lang.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary text-xl">
                <Languages className="h-6 w-6" />
                Sprachkenntnisse
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {language.description}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
