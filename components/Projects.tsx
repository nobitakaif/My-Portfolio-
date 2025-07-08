import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Interactive dashboard with machine learning insights, real-time data visualization, and predictive analytics.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Social Media App",
      description: "Mobile-first social platform with real-time chat, story features, and advanced privacy controls.",
      image: "/placeholder.svg",
      tags: ["React Native", "Firebase", "Socket.io"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Task Management Tool",
      description: "Collaborative project management tool with team features, time tracking, and advanced reporting.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and severe weather alerts.",
      image: "/placeholder.svg",
      tags: ["React", "OpenWeather API", "Mapbox"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with dark mode, animations, and contact form integration.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for creating 
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="glass rounded-2xl overflow-hidden hover:glow-effect transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-hsl(var(--portfolio-primary))/20 to-hsl(var(--portfolio-secondary))/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="text-white text-center">
                      <p className="mb-4">Click to view project</p>
                      <div className="flex space-x-4 justify-center">
                        <Button size="sm" variant="secondary" className="glass">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button size="sm" className="bg-white/20 hover:bg-white/30">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div>
                  <h3 className="text-3xl font-bold mb-4 gradient-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="glass hover:glow-effect transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="glass border-white/20 hover:glow-effect"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-hsl(var(--portfolio-primary)) to-hsl(var(--portfolio-secondary)) hover:opacity-90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass p-6 rounded-2xl hover:glow-effect transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-hsl(var(--portfolio-primary))/10 to-hsl(var(--portfolio-secondary))/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl opacity-50">💡</div>
                </div>
                
                <h4 className="text-xl font-bold mb-3 group-hover:text-hsl(var(--portfolio-primary)) transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs glass"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs glass">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 hover:bg-white/10"
                  >
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 hover:bg-white/10"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="glass border-white/20 hover:glow-effect px-8 py-3"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
