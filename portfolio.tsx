"use client"

import { useMemo, useState } from "react"
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
      title: "Pablo Ezeta - Blog de buceo",
      description:
        "Blog de viajes de buceo.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS",],
      github: "https://github.com/dzulha/v0-blog-de-buceo-web",
      live: "https://www.pabloezeta.com/",
      image: "/pabloezetaBlog.webp",
      category: "fullstack",
    },
    {
    title: "Proyecto Sinfonía Epub",
      description:
        "Libro infantil ilustrado y maquetado con Sígil y usando Adobe InDesign.",
      tech: ["HTML", "CSS", "Sígil", "Amazon KDP"],
      github: "",
      live: "https://www.amazon.com.mx/Sinfon%C3%ADa-Spanish-Marta-Watts/dp/B0D77R7W6S?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=D0L36TFQTBUE&dib=eyJ2IjoiMSJ9.czKh8lYEP8D5KQiTHcrRGg.YiGr4OhOsLXQnxIUqb8LU-S6LXog8-covrH1Zy2ttSA&dib_tag=se&keywords=sinfonia+marta+watts&qid=1760558574&sprefix=sinfonia+marta+watts%2Caps%2C214&sr=8-1&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b",
      image: "/SinfoniaEpub.png?height=200&width=400",
      category: "fullstack",
    },
      {
    title: "Marta Watts",
      description:
      "Pagina de escritora idependietnte para promocionar sus Libros.",
      tech: ["WordPress", "Elemetor", "Amazon KDP",],
      github: "https://github.com/PabloEzeta/Proyecto-Sinfonia",
      live: "https://amazon.com/dp/B0C3969188",
      image: "/martawatts.webp",
      category: "fullstack",
    },
    {
    title: "ABSIMO",
      description:
        "Centro de buceo en CDMX. Diseño de identidad visual y sitio web.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/dzulha/ABISMO",
      live: "https://amazon.com/dp/B0C3969188",
      image: "/abismo (2).png?height=200&width=400",
      category: "ux",
    },
      {
    title: "Cetus Repaeir",
      description:
        "Pagina para promocionar reparacion de equipo de buceo.",
      tech: ["WordPress", "Elemetor", "Amazon KDP"],
            github: "https://github.com/dzulha/v0-blog-de-buceo-web",

      live: "https://cetusscubarepair.com/",
      image: "/Cetus reapeir.png?height=200&width=400",
      category: "ux",
    },
    {
      title: "Rediseño Web para Cetus Dive Center",
      description:
        "Rediseño de un sitio web obsoleto en Magento a dos sitios funcionales en WordPress. Se integró Calendly y MailerLite para reservas y marketing.",
      tech: ["WordPress", "Calendly", "MailerLite", "CSS"],
            github: "https://github.com/dzulha/v0-blog-de-buceo-web",

      live: "https://cetusscubacenter.com",
      image: "/Cetus.webp?height=200&width=400",
      category: "fullstack",
    },
    {
      title: "Wild Sites (Estudio Freelance)",
      description:
        "Creación de mi propio estudio de diseño freelance. La página web sirve como portafolio y canal de captación de clientes, con implementación básica de SEO.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/PabloEzeta/Wild-Sites",
      live: "https://wild-sites.com",
      image: "/wildsites.webp",
      category: "fullstack",
    },
    {
      title: "E-commerce para xMartaja",
      description:
        "Prototipo de tienda en línea para una joyera, mostrando su portafolio y permitiendo la venta de piezas. Desarrollado con WordPress y WooCommerce.",
      tech: ["WordPress", "WooCommerce", "e-commerce"],
      github: "https://github.com/PabloEzeta/Proyecto-Eduardo",
      live: "https://xmartaja.com",
      image: "/xMartaja.png?height=200&width=400",
      category: "fullstack",
    },
    {
      title: "Español con edu",
      description:
        "Desarrollo de identidad visual y materiales de marketing para un profesor de español enfocado en el mercado chino, incluyendo tarjetas de presentación y edición de video.",
      tech: ["Figma", "Next.js", "React", "TypeScript", "Tailwind CSS", "Diseño Gráfico"],
      github: "https://github.com/dzulha/Espa-olconEdu",
      live: "https://espa-olcon-kgj5zuvqe-pablos-projects-779e2d69.vercel.app/",
      image: "/edu.webp",
      category: "fullstack",
    },
      {
      title: "Jeniffer Cruz",
      description:
        "Portafolio porfesional de una diseladora instrucional",
      tech: ["Figma", "Next.js", "React", "TypeScript", "Tailwind CSS", "Diseño Gráfico"],
      github: "https://github.com/dzulha/Jeniffer-instructional",
      live: "https://www.jeniffercruz.com/",
      image: "/jeniffer.webp",
      category: "fullstack",
    },
    {
      title: "REHTM (Red de Historia del Turismo)",
      description:
        "Diseño de un sitio web en WordPress.com para la Red de Estudios de Historia del Turismo en México (REHTM), creando una plataforma accesible y económica para eventos y publicaciones.",
      tech: ["WordPress.com", "Canva", "Diseño Web"],
      github: "https://github.com/PabloEzeta/REHTM",
      live: "https://rehtm.com",
      image: "/Rhtm.png",
      category: "fullstack",
    },
      {
      title: "Huellas en el delantar",
      description:
        "Pagina para pormocionar reposteria artesanal",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/dzulha/reposteria-website",
      live: "https://reposteria-website.vercel.app/",
      image: "/karen.webp",
      category: "fullstack",
    },
    {
      title: "Xplora",
      description:
        "Proyecto final del bootcamp de Latam-Ft-5. Aplicacion para planear viajes en grupo.",
      tech: ["React", "JS",],
      github: "https://github.com/dzulha/Xplore-Proyecto-final-latam-ft-5",
      live: "",
      image: "/xplora.webp",
      category: "fullstack",
    },
    {
      title: "Xplora",
      description:
        "Planacion UX y UI para una app de viajes",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/dzulha/Xplore-Proyecto-final-latam-ft-5",
      live: "https://miro.com/welcomeonboard/WG82QU5GWTJLamtITkZQOGIxaGk2QVhxTUUvU2YrYUxGWHZBM05VU0hLS3V5eXFjSWx4R1F4OGJZaEc3a0kyRFg4dUhaYk9TSXhuSmpGNmtrZGMxUDF1VTUraVdLOWhIMWh2emdndk1KUkZuR2xQb3NUcjArVGlQRitZamNyTGJQdGo1ZEV3bUdPQWRZUHQzSGl6V2NBPT0hdjE=?share_link_id=596591259829",
      image: "/uxXplora.webp",
      category: "UX & UI",
    },
  ];

  // Filter state for Projects section
  const [filter, setFilter] = useState<"all" | "fullstack" | "ux">("all")

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects
    return projects.filter((p) => p.category === filter)
  }, [filter, projects])




  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, JavaScript , boostrap" },
    { name: "Backend Development", icon: Server, description: "PostgreSQL, MongoDB" },
    { name: "UX/UI Design", icon: Palette, description: "Figma, Adobe XD, User Research, Prototyping" },
    { name: "WordPress Development", icon: Globe, description: "Custom themes, WooCommerce" },
    { name: "Database Design", icon: Database, description: "PostgreSQL, MongoDB, SQL" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native,"},
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-white">Pablo Ezeta</div>
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
              {/* Agenda una llamada: abre una URL externa (Calendly u otro) en nueva pestaña */}
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <a
                  href="https://calendar.notion.so/meet/pabloezetawatts/h7m42i2j" /* reemplaza por tu enlace de agenda */
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Agenda una llamada
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>

              {/* Descargar CV: coloca el PDF en /public (por ejemplo /Pablo_Ezeta_CV.pdf) */}
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <a
                  href="/Pablo-Alfonso-Ezeta-Watts-CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Descargar CV
                  <ExternalLink className="w-4 h-4" />
                </a>
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
                  src="/pabloEzeta.png"
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
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-lg bg-gray-800/40 p-1">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${filter === "all" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("fullstack")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${filter === "fullstack" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"}`}
              >
                Full Stack
              </button>
              <button
                onClick={() => setFilter("ux")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${filter === "ux" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"}`}
              >
                UX
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-750 transition-colors"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/Pablo Ezeta.png"}
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
              <a href="mailto:info@pabloezeta.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Mail className="w-5 h-5 mr-2" />
                info@pabloezeta.com
              </a>
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Link href="https://www.linkedin.com/in/pablo-ezeta/" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Link href="https://github.com/dzulha?tab=repositories" className="flex items-center gap-2">
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
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Pablo Ezeta. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 sm:mt-0">Built with React, Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
