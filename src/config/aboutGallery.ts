import equipe1 from "@/assets/equipe1.png?w=900&format=webp&quality=80";
import equipe2 from "@/assets/equipe2.png?w=900&format=webp&quality=80";
import equipe3 from "@/assets/equipe3.png?w=900&format=webp&quality=80";

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
