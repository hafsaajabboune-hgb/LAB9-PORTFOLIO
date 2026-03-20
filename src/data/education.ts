export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    id: "1",
    degree: "DEUST MIPC (Mathématiques, Informatique, Physique, Chimie)",
    school: "Faculté des Sciences et Techniques (FSTG), Marrakech",
    period: "2023 - 2025",  
description: "Formation fondamentale en mathématiques et informatique avec initiation à la programmation en langage C."
  },
  {
    id: "2", 
    degree: "Baccalauréat Sciences Physique",
    school: "Lycée MHAMID 9",
    period: "2022 - 2023",
    description: "Mention Bien"
  }
];