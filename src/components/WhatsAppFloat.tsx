import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_INFO } from "@/config/contact";
import { useCtaMotion, useWhatsAppFloatMotion } from "@/lib/motion";

const WhatsAppFloat = () => {
  const entrance = useWhatsAppFloatMotion();
  const press = useCtaMotion();

  return (
    <motion.a
      href={WHATSAPP_INFO}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-brand-teal text-white shadow-lg transition-shadow duration-200 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      {...entrance}
      {...press}
      aria-label="Abrir conversa no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </motion.a>
  );
};

export default WhatsAppFloat;
