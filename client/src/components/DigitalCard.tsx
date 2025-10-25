import { Mail, Phone, Linkedin, Github, Instagram, ExternalLink } from 'lucide-react';
import qrLinkedin from '@/assets/qrcode_linkedin.png';

export default function DigitalCard() {
  const contactInfo = {
    name: "Allan Felipe dos Anjos",
    title: "Analista de TI & Fundador da Anjos EduTech",
    location: "Curitiba, Paraná, Brasil",
    email: "allafelipedosanjos6@gmail.com",
    phone: "(41) 98419-6060",
    linkedin: "https://www.linkedin.com/in/allanfelipe-ti",
    github: "https://github.com/allananjosestudos",
    instagram: "https://www.instagram.com/allanorigamiart/",
  };

  const professional = {
    summary: "Analista de TI especialista em Suporte Técnico, Automação de Processos e Soluções No-Code/Low-Code. Experiência sólida em cibersegurança, Office 365, redes e pedagogia tecnológica. Profissional híbrido, com alta competência em automação, liderança técnica, implementação de projetos inovadores e treinamento de equipes.",
    specialties: [
      "Suporte Técnico (resolução acima de 95%)",
      "Automação (Power Automate, Zapier)",
      "Office 365 & Infraestrutura",
      "Cibersegurança e Redes",
      "Pedagogia Tecnológica"
    ],
    certifications: [
      "Analista SOC (IBSEC IC-SOC-380)",
      "Segurança em Linux (IBSEC IC-LNX-1180)",
      "Boas Práticas de Cibersegurança"
    ],
    projects: [
      "Sistema de Automação de Processos de TI — Grupo MiniPreço (Power Automate, Microsoft 365, APIs)"
    ],
    languages: [
      "Português (Nativo)",
      "LIBRAS (Intermediário)"
    ],
    services: [
      "Consultoria em TI",
      "Treinamento",
      "Automação",
      "Gestão de Projetos"
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent"></div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            {/* Header Section */}
            <div className="mb-8 pb-8 border-b border-border">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {contactInfo.name}
              </h1>
              <p className="text-lg sm:text-xl text-accent font-semibold mb-2">
                {contactInfo.title}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                📍 {contactInfo.location}
              </p>
            </div>

            {/* Quick Contact Section */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium hidden sm:inline">Email</span>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium hidden sm:inline">Ligar</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* QR Code and Social Icons Section */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
              {/* QR Code */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white p-4 rounded-lg border border-border mb-4">
                  <img 
                    src="/qrcode_linkedin.png" 
                    alt="LinkedIn QR Code" 
                    className="w-32 h-32 sm:w-40 sm:h-40"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Escaneie para acessar LinkedIn
                </p>
              </div>

              {/* Social Icons */}
              <div className="col-span-1 sm:col-span-2">
                <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-widest">
                  Conecte-se
                </h3>
                <div className="flex gap-4 mb-6">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group"
                    title="GitHub"
                  >
                    <Github className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group"
                    title="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </a>
                </div>

                {/* Contact Details */}
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" />
                    <a className="hover:text-accent transition-colors" href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <a className="hover:text-accent transition-colors" href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8 pb-8 border-b border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Resumo Profissional</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {professional.summary}
              </p>
            </div>

            {/* Specialties */}
            <div className="mb-8 pb-8 border-b border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Principais Especialidades</h2>
              <div className="flex flex-wrap gap-2">
                {professional.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-sm text-accent font-medium hover:bg-accent/20 transition-colors"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8 pb-8 border-b border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Certificações</h2>
              <ul className="space-y-2">
                {professional.certifications.map((cert, idx) => (
                  <li className="flex items-start gap-3" key={idx}>
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm sm:text-base text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-8 pb-8 border-b border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Projetos de Destaque</h2>
              <ul className="space-y-2">
                {professional.projects.map((project, idx) => (
                  <li className="flex items-start gap-3" key={idx}>
                    <span className="text-accent mt-1">▸</span>
                    <span className="text-sm sm:text-base text-muted-foreground">{project}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="mb-8 pb-8 border-b border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Idiomas</h2>
              <div className="flex flex-wrap gap-3">
                {professional.languages.map((lang, idx) => (
                  <span className="text-sm sm:text-base text-muted-foreground" key={idx}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Serviços</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {professional.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 rounded-lg bg-secondary border border-border hover:border-accent/50 transition-colors text-center"
                  >
                    <p className="text-sm font-medium text-foreground">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-accent"></div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © 2024 Allan Felipe dos Anjos. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
}
