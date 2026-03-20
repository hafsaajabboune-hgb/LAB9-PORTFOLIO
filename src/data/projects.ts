export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Blog Full Stack avec Laravel",
    description: "Développement d'un blog complet avec système d'authentification, gestion d'articles, commentaires et interface administrateur. Réalisé avec Laravel 10 et MySQL.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"]
  },
  {
    id: "2",
    title: "Plateforme Éducative en Ligne",
    description: "Création d'une plateforme d'apprentissage avec gestion de cours, quiz et suivi des progrès des étudiants. Interface responsive et tableau de bord analytique.",
    technologies: ["TypeScript", "React", "TailwindCSS", "Node.js", "MongoDB"]
  },
  {
    id: "3",
    title: "Projet Réseaux Cisco",
    description: "Conception et simulation d'une infrastructure réseau complète pour une entreprise avec VLAN, routage inter-VLAN, DHCP, DNS et sécurité. Configuration sur Cisco Packet Tracer.",
    technologies: ["Cisco", "Packet Tracer", "VLAN", "DHCP", "DNS", "Routage"]
  },
  {
    id: "4",
    title: "Plateforme d'Organisation d'Événements",
    description: "Application pour organiser, réserver et gérer des événements professionnels et académiques. Modélisation par héritage des rôles utilisateur (Admin, Client) avec gestion des réservations de salles.",
    technologies: ["SQL", "UML", "Base de données", "Modélisation", "Gestion de projet"]
  }
];