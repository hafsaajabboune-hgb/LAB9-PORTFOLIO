export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Java Exchange Training",
    issuer: "Computer Science Club",
    date: "Décembre 2025",
    description: "Formation pratique en Java organisée par le Computer Science Club"
  },
  {
    id: "2",
    title: "Certification Professionnelle Hibernate & JPA",
    issuer: "MLIAEdu",
    date: "15 Mars 2026",
    description: "Certification avec un score de 85% sur les concepts JEE, Hibernate et JPA. Progression 100% sur les labs complétés."
  }
];