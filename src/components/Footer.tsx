import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="flex items-center gap-2">
              <img src={logo} alt="ABC Dedetização" className="h-12 w-auto" />
              <span className="text-lg font-heading text-foreground">
                ABC <span className="text-primary">Dedetização</span>
              </span>
            </span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-xs">
              Controle de pragas profissional com segurança, eficiência e garantia há mais de 12 anos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4 font-body">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4 font-body">Contato</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                contato@abcdedetizacao.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                São Paulo, SP e Região
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ABC Dedetização. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
