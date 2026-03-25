import { Shield, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-cta" />
              <span className="text-xl font-bold text-background">ABC Dedetização</span>
            </div>
            <p className="text-background/50 text-sm leading-relaxed">
              Há 12 anos protegendo lares e empresas contra pragas urbanas com segurança, eficiência e garantia.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/50">
              <li><a href="#servicos" className="hover:text-cta transition-colors">Serviços</a></li>
              <li><a href="#beneficios" className="hover:text-cta transition-colors">Benefícios</a></li>
              <li><a href="#depoimentos" className="hover:text-cta transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-cta transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-background/50">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cta" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cta" />
                contato@abcdedetizacao.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cta" />
                São Paulo, SP e Região
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs text-background/30">
          © {new Date().getFullYear()} ABC Dedetização. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
