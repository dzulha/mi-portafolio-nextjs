import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, ExternalLink, Mail, Linkedin, Code, Palette, Globe, Database, Server, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io", "shadcn/ui"],
      github: "https://github.com/username/task-manager",
      live: "https://taskmanager-demo.vercel.app",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "WordPress Business Theme",
      description:
        "Custom WordPress theme for business websites with advanced customization options, responsive design, and SEO optimization.",
      tech: ["WordPress", "PHP", "JavaScript", "SCSS", "ACF"],
      github: "https://github.com/username/business-theme",
      live: "https://business-theme-demo.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with data visualization, user tracking, and comprehensive reporting features.",
      tech: ["React", "D3.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com/username/analytics-dashboard",
      live: "https://analytics-demo.vercel.app",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, TypeScript, Tailwind CSS" },
    { name: "Backend Development", icon: Server, description: "Node.js, Express, PostgreSQL, MongoDB" },
    { name: "UX/UI Design", icon: Palette, description: "Figma, Adobe XD, User Research, Prototyping" },
    { name: "WordPress Development", icon: Globe, description: "Custom themes, plugins, ACF, WooCommerce" },
    { name: "Database Design", icon: Database, description: "PostgreSQL, MongoDB, Prisma, SQL optimization" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Progressive Web Apps" },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-white">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Full Stack Developer &<span className="text-blue-400 block">UX/UI Designer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              I create beautiful, functional web applications and user experiences that help businesses grow.
              Specializing in React, Node.js, and WordPress development with a focus on clean, minimalist design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <Mail className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Link href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer and UX/UI designer with over 5 years of experience creating
                digital solutions that make a difference. I specialize in building scalable web applications using
                modern technologies like React, Next.js, and Node.js.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My design background allows me to bridge the gap between technical implementation and user experience,
                ensuring that every project not only functions flawlessly but also provides an intuitive and engaging
                user experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or helping
                businesses transform their digital presence through custom WordPress solutions.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <Image
                  src="./public/Pablo Ezeta.jpg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Skills & Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I offer comprehensive development and design services to help bring your ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <skill.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">{skill.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A selection of recent projects showcasing my full-stack development and design capabilities
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-750 transition-colors"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      <Link href={project.github} className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link href={project.live} className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your project to life? I'm available for freelance work and full-time opportunities. Let's
            discuss how I can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Mail className="w-5 h-5 mr-2" />
              hello@yourname.com
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Link href="https://linkedin.com/in/yourprofile" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Link href="https://github.com/yourusername" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-8 bg-gray-800" />
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 sm:mt-0">Built with React, Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
