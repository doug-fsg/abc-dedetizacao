import equipe1 from "@/assets/equipe1.png";
import equipe2 from "@/assets/equipe2.png";
import equipe3 from "@/assets/equipe3.png";

export type AboutGalleryItem = {
  src: string;
  alt: string;
};

/** Fotos da equipe e da empresa na seção Sobre nós. */
export const aboutGalleryImages: AboutGalleryItem[] = [
  {
    src: equipe1,
    alt: "Equipe ABC Desinfestações em atividade",
  },
  {
    src: equipe2,
    alt: "Profissionais da ABC Desinfestações",
  },
  {
    src: equipe3,
    alt: "Equipe e rotina da ABC Desinfestações",
  },
];
