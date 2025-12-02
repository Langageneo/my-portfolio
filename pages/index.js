import React from "react";
import Head from "next/head";

const projects = [
{ name: "Système de réservation de billets de train", stack: "React, Node.js, MongoDB", description: "Réservation facile et rapide de billets de train en ligne." },
{ name: "Tableau de bord du médecin", stack: "React, Node.js, MongoDB", description: "Plateforme pour gérer les rendez-vous et dossiers patients." },
{ name: "Système de vote en ligne", stack: "React, Express.js, MongoDB", description: "Vote sécurisé et transparent pour des élections en ligne." },
{ name: "Suivi de l'entretien du véhicule", stack: "React, Node.js, MongoDB", description: "Suivi complet des entretiens et historique du véhicule." },
{ name: "Recherche de places de parking", stack: "React, Express.js, MongoDB, API de cartographie", description: "Trouver facilement des parkings disponibles en temps réel." },
{ name: "Système de gestion des congés", stack: "React, Node.js, MongoDB", description: "Gestion des congés efficace pour les entreprises." },
{ name: "Système type Airbnb", stack: "React, Bootstrap, MongoDB", description: "Plateforme de location complète type Airbnb." }
];

const skills = {
"Frontend": ["React", "HTML", "CSS", "Bootstrap", "TailwindCSS"],
"Backend": ["Node.js", "PHP", "Java"],
"Bases de données": ["MongoDB", "SQL", "Firebase"],
"Tests": ["Unitaires", "Intégration", "Manuels"]
};

const links = {
linkedin: "https://www.linkedin.com/public-profile/settings/",
facebook: "https://www.facebook.com/share/1KPxiQskf4/",
langageNeo: "https://langageneo.github.io/Langage-Neo-Sacred-Cod/",
notion: "https://metal-clementine-9d6.notion.site/Logique-binaire-comment-expliquer-l-univers-sans-spiritualit-201c56544637803eb848ea8e19cfe94a?pvs=74"
};

export default function Home() {
return (
<div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
<Head>
<title>Parfait Guiri | Portfolio</title>
<meta name="description" content="Portfolio spirituel technologique de Parfait Guiri" />
</Head>

  <BinaryRain />

  {/* Hero */}
  <section className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-4">
    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-green-400 drop-shadow-lg">Parfait Guiri</h1>
    <p className="text-xl md:text-2xl mb-2">Développeur Full-Stack IA | Sécurité | Cloud</p>
    <p className="italic text-green-300 mb-6 max-w-xl">
      "Avec mon esprit, je guide la machine. Avec mes racines, je bâtis le futur."
    </p>
    <div className="flex gap-4 flex-wrap justify-center">
      <a href="mailto:parfaitguiri@gmail.com" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded shadow-lg">Contactez-moi</a>
      <a href={links.langageNeo} className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded shadow-lg">Langage Néo</a>
      <a href={links.linkedin} className="bg-blue-400 hover:bg-blue-500 px-6 py-3 rounded shadow-lg">LinkedIn</a>
      <a href={links.facebook} className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded shadow-lg">Facebook</a>
    </div>
  </section>

  {/* À propos */}
  <section className="relative z-10 py-20 px-6 md:px-20 bg-gray-800/80">
    <h2 className="text-3xl font-bold text-center mb-6 text-blue-400 drop-shadow">À propos</h2>
    <p className="max-w-3xl mx-auto text-center text-gray-200 leading-relaxed">
      Bonjour, je suis Parfait Guiri, un développeur web et mobile full-stack basé au Kenya. Je sais voir entre la spiritualité et la logique, tout comme le code binaire : 0 = invisible, intangible, conscience spirituelle noire comme l'univers ; 1 = manifesté, tangible, chaos logique. Je code par amour de la vie dans le software et le hardware. Cette vie n'est pas biologique, elle est matrix et virtuelle. Je construis des codes avec une augmentation hors norme grâce à l'IA et aux dernières technologies du moment, outils avancés, concepts géants durables et sécurisés. Je m'attache à offrir des expériences utilisateur exceptionnelles dans des délais serrés, avec communication claire et intégrité.
    </p>
  </section>

  {/* Compétences */}
  <section className="relative z-10 py-20 px-6 md:px-20 bg-gray-900/80">
    <h2 className="text-3xl font-bold text-center mb-10 text-blue-400 drop-shadow">Compétences</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {Object.entries(skills).map(([category, list]) => (
        <div key={category} className="bg-gray-800/50 p-6 rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-4 capitalize text-green-300">{category}</h3>
          <ul className="list-disc list-inside">
            {list.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>

  {/* Projets */}
  <section className="relative z-10 py-20 px-6 md:px-20 bg-gray-800/80">
    <h2 className="text-3xl font-bold text-center mb-10 text-blue-400 drop-shadow">Projets</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {projects.map(p => (
        <div key={p.name} className="bg-gray-900/50 p-6 rounded shadow-lg border-l-4 border-blue-400 hover:scale-105 transform transition">
          <h3 className="text-xl font-semibold text-green-300">{p.name}</h3>
          <p className="text-gray-200 mb-2">{p.description}</p>
          <p className="text-gray-400 text-sm mb-2">{p.stack}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Contact avec Netlify Form */}
  <section className="relative z-10 py-20 px-6 md:px-20 bg-gray-900/80">
    <h2 className="text-3xl font-bold text-center mb-10 text-blue-400 drop-shadow">Contact</h2>
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      className="max-w-xl mx-auto flex flex-col gap-4 bg-gray-800/50 p-8 rounded shadow-lg"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input name="name" placeholder="Nom" required className="p-3 rounded bg-gray-700 text-white focus:outline-none"/>
      <input type="email" name="email" placeholder="Email" required className="p-3 rounded bg-gray-700 text-white focus:outline-none"/>
      <textarea name="message" placeholder="Message" required className="p-3 rounded bg-gray-700 text-white focus:outline-none"></textarea>
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded shadow-lg">Envoyer</button>
    </form>
    <p className="text-center mt-6 text-gray-400">Email direct : <a href="mailto:parfaitguiri@gmail.com" className="text-green-300 hover:underline">parfaitguiri@gmail.com</a></p>
    <p className="text-center mt-2 text-gray-400">Téléphone : <a href="tel:+22250555709475" className="text-green-300 hover:underline">+2225 0555709475</a></p>
  </section>
</div>

);
}

function BinaryRain() {
const [symbols, setSymbols] = React.useState(Array.from({ length: 150 }, () => Math.round(Math.random())));
React.useEffect(() => {
const interval = setInterval(() => {
setSymbols(prev => prev.map(() => Math.round(Math.random())));
}, 200);
return () => clearInterval(interval);
}, []);
return (
<div className="absolute top-0 left-0 w-full h-full text-green-400 text-opacity-20 flex flex-wrap">
{symbols.map((s, i) => <span key={i} className="mx-1 animate-fall">{s}</span>)}
<style jsx>{"@keyframes fall { 0% { transform: translateY(-100%); opacity: 0; } 50% { opacity: 0.2; } 100% { transform: translateY(100vh); opacity: 0; } } .animate-fall { display: inline-block; animation: fall 3s linear infinite; }"}</style>
</div>
);
  }
