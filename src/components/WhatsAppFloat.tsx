import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20dedetização.";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-float"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-primary-foreground" />
    </motion.a>
  );
};

export default WhatsAppFloat;
