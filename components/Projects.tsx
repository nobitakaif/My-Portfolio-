"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Betterup Time",
      description: "Betterup time is next generation website which allows to moniter your website and alert you if your website goes down.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Quizify",
      description: "Quizify website for preparation for last time exam it helps you prepare your exam at the last moment and ask you question related to your topic .",
      image: "/placeholder.svg",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Gemini AI"],
      github: "#",
      demo: "#",
      featured: true,
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  // const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="py-20 relative overflow-hidden">
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
                    <div className="text-6xl opacity-50">
                        <Image src={"C:\Users\mk281\Desktop\own project\portfolio\public\file.svg"} alt="uptime"/>
                    </div>
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
          
        </motion.div>

        
      </div>
    </section>
  )
}
