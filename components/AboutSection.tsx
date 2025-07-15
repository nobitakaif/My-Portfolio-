
"use client"
import { motion } from "framer-motion"
import {  Palette, Zap } from "lucide-react"

export function AboutSection() {
  const skills = [
    { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
    { name: "Node.js", level: 85, color: "from-green-500 to-green-400" },
    { name: "Docker", level: 80, color: "from-yellow-500 to-yellow-400" },
    { name: "UI/UX Design", level: 75, color: "from-pink-500 to-purple-500" },
    { name: "GCP", level: 70, color: "from-purple-500 to-indigo-500" },
  ]

  
  

  return (
    <section  className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference. 
            With expertise in modern web technologies and a keen eye for design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Palette className="h-6 w-6 text-hsl(var(--portfolio-primary)) mr-3" />
                <h3 className="text-2xl font-bold">Creative Problem Solver</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I believe in combining technical excellence with creative thinking. Every project is an opportunity 
                to push boundaries and create something extraordinary that users will love.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-hsl(var(--portfolio-secondary)) mr-3" />
                <h3 className="text-2xl font-bold">Performance Focused</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Fast, accessible, and optimized applications are not just nice-to-have features – they're essential. 
                I build with performance and user experience as top priorities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 1 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {/* {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl text-center hover:glow-effect transition-all duration-300"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-hsl(var(--portfolio-primary))" />
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))} */}
        </motion.div>
      </div>
    </section>
  )
}
