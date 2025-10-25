import { Mail, Phone, Linkedin, Github, Instagram, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <header className="text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Allan Felipe dos Anjos
          </h1>
          <p className="text-xl md:text-2xl text-blue-200">
            Analista de TI & Fundador da Anjos EduTech
          </p>
          <p className="flex items-center justify-center gap-2 text-blue-300">
            <MapPin className="w-5 h-5" />
            Curitiba, Paraná, Brasil
          </p>
        </header>

        {/* Quick Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:allafelipedosanjos6@gmail.com"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
          <a
            href="tel:41984196060"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-all flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Ligar
          </a>
          <a
            href="https://www.linkedin.com/in/allanfelipe-ti"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg font-semibold transition-all flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        {/* Connect Section */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">CONECTE-SE</h2>
          <div className="space-y-3">
            <a
              href="https://www.linkedin.com/in/allanfelipe-ti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-300 hover:text-blue-200 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/allananjosestudos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-300 hover:text-blue-200 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.instagram.com/allanorigamiart/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-300 hover:text-blue-200 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <div className="flex items-center gap-3 text-blue-300">
              <Mail className="w-5 h-5" />
              <a href="mailto:allafelipedosanjos6@gmail.com" className="hover:text-blue-200">
                allafelipedosanjos6@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-blue-300">
              <Phone className="w-5 h-5" />
              <a href="tel:41984196060" className="hover:text-blue-200">
                (41) 98419-6060
              </a>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">Resumo Profissional</h2>
          <p className="text-blue-100 leading-relaxed">
            Analista de TI especialista em Suporte Técnico, Automação de Processos e Soluções No-Code/Low-Code. 
            Experiência sólida em cibersegurança, Office 365, redes e pedagogia tecnológica. Profissional híbrido, 
            com alta competência em automação, liderança técnica, implementação de projetos inovadores e treinamento de equipes.
          </p>
        </section>

        {/* Main Specialties */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">Principais Especialidades</h2>
          <ul className="space-y-2 text-blue-100">
            <li>✓ Suporte Técnico (resolução acima de 95%)</li>
            <li>✓ Automação (Power Automate, Zapier)</li>
            <li>✓ Office 365 & Infraestrutura</li>
            <li>✓ Cibersegurança e Redes</li>
            <li>✓ Pedagogia Tecnológica</li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">Certificações</h2>
          <ul className="space-y-2 text-blue-100">
            <li>✓ Analista SOC (IBSEC IC-SOC-380)</li>
            <li>✓ Segurança em Linux (IBSEC IC-LNX-1180)</li>
          </ul>
        </section>

        {/* Featured Projects */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">Projetos de Destaque</h2>
          <ul className="space-y-2 text-blue-100">
            <li>
              ▸ Sistema de Automação de Processos de TI — Grupo MiniPreço (Power Automate, Microsoft 365, APIs)
            </li>
          </ul>
        </section>

        {/* Languages */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">Idiomas</h2>
          <div className="space-y-2 text-blue-100">
            <p>Português (Nativo)</p>
            <p>LIBRAS (Intermediário)</p>
          </div>
        </section>

        {/* Services */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">Serviços</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100">
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              Consultoria em TI
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              Treinamento
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              Automação
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              Gestão de Projetos
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-blue-300 text-sm py-8 space-y-2">
          <p>© 2024 Allan Felipe dos Anjos. Todos os direitos reservados.</p>
          <p className="text-blue-400">Made with Manus</p>
        </footer>
      </div>
    </div>
  );
}
