import solibra from "/images/logo-solibra.png"
import thankyou from "/images/logo-thankyou.png"
import unilyone from "/images/logo-unilyone.png"

const Experience = () => {
  return (
    <div className="px-5 pt-12" id="works">
      <h1 className="text-xl py-5">Expériences Professionnelles</h1>
      <div className="flex flex-col space-y-8">
        <div className="row flex space-x-6">
          <div className="border-l-1 relative border-gray-200">
            <div className="absolute -left-4 -top-0 w-8 bg-white">
              <img
                src={solibra}
                alt="solibra côte d'ivoire"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <span>Juin 2024 - Avril 2025</span>
            <h1>STAGE - DEVELOPPEUR WEB</h1>
            <p>SOLIBRA (Société de Limonaderies et Brasseries d’Afrique) – Abidjan, Côte d’Ivoire</p>
            <ul className="list-disc ms-6 mt-2 flex flex-col space-y-2">
              <li>
              Participation à la <strong>refonte complète du site web officiel</strong> de SOLIBRA : amélioration de l’ergonomie, du design, et de la performance.
              </li>
              <li><strong>Refonte de la newsletter institutionnelle</strong> : création de templates modernes et responsives, amélioration du taux d’ouverture.</li>
              <li><strong>Optimisation SEO</strong> : audit technique, optimisation des contenus et des balises, amélioration du référencement naturel.</li>
              <li><strong>Maintenance technique du site e-commerce solibrachezvous.com</strong>: gestion des bugs, mises à jour et amélioration UX.</li>
              <li><strong>Mise en place et suivi de campagnes publicitaires Google AdSense</strong>, en lien avec l’équipe marketing.</li>
              <li><strong>Suivi et analyse du trafic via Google Analytics 4 (GA4)</strong>: création de tableaux de bord personnalisés, suivi des KPIs et reporting des performances digitales.</li>
            </ul>
          </div>
        </div>


        <div className="row flex space-x-6">
          <div className="border-l-1 relative border-gray-200">
            <div className="absolute -left-4 -top-0 w-8 bg-white">
              <img
                src={thankyou}
                alt="Thank You"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <span>Fev 2020 – Oct 2023</span>
            <h1>Stage – Développeur Web Full Stack</h1>
            <p>Group THANK YOU – Abidjan 2 plateaux vallons, Côte d’Ivoire</p>
            <ul className="list-disc ms-6 mt-2 flex flex-col space-y-2">
              <li> 
              <strong>Développement d’un ERP sur mesure</strong>: création de modules de gestion (clients, ventes, stocks) avec interface intuitive et logique métier adaptée.
              </li>
              <li><strong>Conception d’API RESTful avec Laravel</strong>, destinées à être consommées par des applications front-end développées en Angular.</li>
              <li><strong>Assistance technique aux utilisateurs</strong>: support quotidien, résolution de bugs et formation à l’utilisation des outils développés.</li>
              <li>Participation aux revues de code, à l’optimisation des requêtes SQL et à la gestion de la sécurité des accès.</li>
            </ul>
          </div>
        </div>


        <div className="row flex space-x-6">
          <div className="border-l-1 relative border-gray-200">
            <div className="absolute -left-4 -top-0 w-8 bg-white">
              <img
                src={unilyone}
                alt="Thank You"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <span>Déc 2019- Juin 2020</span>
            <h1>Développeur Web – Projet de fin d’études</h1>
            <p>Unilyone Côte d'Ivoire - Cocody Rivéra Abatta</p>
            <ul className="list-disc ms-6 mt-2 flex flex-col space-y-2">
              <li>
              Conception et développement d’une application web de gestion des inscriptions en ligne.
              </li>
              <li>Réalisation du front-end avec <strong>HTML, CSS, JavaScript</strong></li>
              <li>Développement du back-end avec <strong>PHP</strong>  et de la base de données <strong>MySQL</strong></li>
              <li>Intégration d’un tableau de bord administrateur pour gérer les inscriptions, les utilisateurs et les statistiques</li>
              <li>Mise en ligne de l’application et tests utilisateurs pour valider le bon fonctionnement.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience