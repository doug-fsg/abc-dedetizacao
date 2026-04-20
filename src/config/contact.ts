/**
 * Dados de contato centralizados.
 * Atualize aqui para refletir em toda a LP automaticamente.
 */
export const PHONE_DISPLAY = "(55) 9930-2412";
export const PHONE_HREF = "tel:+555599302412";
export const WHATSAPP_NUMBER = "555599302412";

const WA_ORCAMENTO = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
const WA_INFO = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços.");

/** api.whatsapp.com costuma abrir de forma mais confiável que wa.me em alguns navegadores/dispositivos */
export const WHATSAPP_ORCAMENTO = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${WA_ORCAMENTO}`;
export const WHATSAPP_INFO = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${WA_INFO}`;
export const EMAIL = "contato@abcdesinfestacoe.com.br";
export const ADDRESS = "Uruguaiana, RS e região";
