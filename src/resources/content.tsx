import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jules",
  lastName: "Visuals",
  name: `JLS Visuals - Jules`,
  role: "Créateur de contenu visuel",
  avatar: "/images/avatar.jpg",
  email: "contact@jlsvisuals.com",
  location: "Europe/Paris",
  languages: ["Français"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>S'abonner à la newsletter de {person.firstName}</>,
  description: <>Recevez les dernières actualités et projets</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://www.tiktok.com/@jlsvisuals",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `${person.name} - Création Digitale`,
  description: `Créateur de contenu visuel spécialisé dans le monde sportif. Des créations pour briller sur et hors du terrain.`,
  headline: <>Création digitale pour briller sur et hors du terrain</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">@jlsvisuals</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Sur TikTok
        </Text>
      </Row>
    ),
    href: "https://www.tiktok.com/@jlsvisuals",
  },
  subline: (
    <>
      👨‍🎨 <strong>Créateur de contenu visuel</strong>
      <br />
      ⚽️ Spécialisé dans le <strong>monde sportif</strong>
      <br />
      ✨ Des <strong>créations pour briller</strong> sur et hors du terrain...
      <br />
      <br />
      92 publications • 535 followers • 968 suivi(e)s
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À Propos",
  title: `À Propos – ${person.name}`,
  description: `Découvrez ${person.name}, ${person.role} basé dans le Grand Est`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "À propos de moi",
    description: (
      <>
        👨‍🎨 <strong>Créateur de contenu visuel</strong> passionné par le monde du sport et de la création digitale.
        <br /><br />
        ⚽️ Spécialisé dans le <strong>monde sportif</strong>, je crée des contenus visuels qui captent l'essence et l'émotion 
        du sport, que ce soit sur le terrain ou en dehors.
        <br /><br />
        ✨ Mon objectif : créer des <strong>créations pour briller</strong> qui mettent en valeur les moments forts, 
        les performances et l'esprit sportif à travers des visuels impactants et modernes.
        <br /><br />
        Retrouvez-moi sur <strong>TikTok @jlsvisuals</strong> pour découvrir mes dernières créations !
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Spécialités",
    experiences: [
      {
        company: "JLS Visuals",
        timeframe: "Créateur de contenu",
        role: "Création Digitale - Monde Sportif",
        achievements: [
          <>
            Création de contenus visuels spécialisés dans le monde sportif pour les réseaux sociaux.
          </>,
          <>
            Production de visuels impactants qui capturent l'émotion et l'action sur et hors du terrain.
          </>,
          <>
            Développement d'une identité visuelle forte pour briller sur les plateformes digitales.
          </>,
        ],
        images: [
          {
            src: "/images/photo1.jpg",
            alt: "Création visuelle - Monde sportif",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Formation",
    institutions: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Domaines d'expertise",
    skills: [
      {
        title: "Création de Contenu Visuel",
        description: (
          <>Création de contenus visuels modernes et impactants pour les réseaux sociaux, spécialisés dans le monde sportif.</>
        ),
        tags: [
          {
            name: "Création Digitale",
            icon: "camera",
          },
        ],
        images: [
          {
            src: "/images/photo2.jpg",
            alt: "Création visuelle - Contenu digital",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Monde Sportif",
        description: (
          <>
            Spécialisation dans la création de contenus visuels pour le monde sportif. 
            Capture de l'émotion, de l'action et de l'esprit sportif à travers des visuels percutants.
            <br /><br />
            Créations pour briller sur et hors du terrain, mettant en valeur les performances, 
            les moments forts et l'essence même du sport.
          </>
        ),
        tags: [
          {
            name: "Sport",
            icon: "camera",
          },
          {
            name: "Réseaux Sociaux",
            icon: "camera",
          },
        ],
        images: [
          {
            src: "/images/photo3.jpg",
            alt: "Création visuelle - Monde sportif",
            width: 16,
            height: 9,
          },
          {
            src: "/images/photo5.jpg",
            alt: "Contenu visuel sportif",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Réseaux Sociaux",
        description: (
          <>
            Production de contenus optimisés pour TikTok, Instagram et autres plateformes sociales. 
            Création d'une identité visuelle forte et cohérente qui permet de briller sur les réseaux.
            <br /><br />
            Développement d'une stratégie de contenu adaptée à chaque plateforme pour maximiser l'engagement 
            et la visibilité.
          </>
        ),
        tags: [
          {
            name: "TikTok",
            icon: "camera",
          },
          {
            name: "Social Media",
            icon: "camera",
          },
        ],
        images: [
          {
            src: "/images/photo4.jpg",
            alt: "Contenu réseaux sociaux",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Articles et actualités...",
  description: `Découvrez les dernières actualités et projets de ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets photographiques par ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie – ${person.name}`,
  description: `Collection de créations visuelles par ${person.name} - Monde Sportif, Création Digitale`,
  images: [
    {
      src: "/images/photo1.jpg",
      alt: "Création visuelle - Monde sportif",
      orientation: "horizontal",
    },
    {
      src: "/images/photo2.jpg",
      alt: "Création digitale - Action",
      orientation: "horizontal",
    },
    {
      src: "/images/photo3.jpg",
      alt: "Contenu visuel sportif",
      orientation: "horizontal",
    },
    {
      src: "/images/photo4.jpg",
      alt: "Création pour réseaux sociaux",
      orientation: "vertical",
    },
    {
      src: "/images/photo5.jpg",
      alt: "Contenu visuel - Moment capturé",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Création visuelle",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

