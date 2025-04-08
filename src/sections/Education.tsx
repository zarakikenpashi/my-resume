import simplon from "/images/Logo-Simplon-CI.png"
import estam from "/images/logo-estam.png"

const Education = () => {
  return (
    <div className="px-5 pt-12">
      <h1 className="text-xl py-5">Diplômes et Formations</h1>
      <div className="grid md:grid-cols-2 gap-2">
        <a 
          className="card rounded-lg border-gray-200 border p-5 flex flex-col space-y-1"
          href="https://simplon.ci/"
          title="Simplon Côte d'Ivoire"
        >
          <img 
            src={simplon} 
            alt="SIMPLON CÔTE D'IVOIRE"
            className="w-32" 
          />
          <span>Oct.2023 - Juin.2024</span>
          <h1 className="font-semibold">Formation Dévéloppeur fullstack web</h1>
          <p>Simplon Côte d'Ivoire - Cocody Rivéra Palmerais</p>
        </a>

        <a 
          className="card rounded-lg border-gray-200 border p-5 flex flex-col space-y-1"
          href="http://estam.ci/home/"
          title="ESTAM 2 PLATEAUX"
        >
          <img 
            src={estam}
            alt="ESTAM 2 PLATEAUX EX-AMBASSADE DE CHINE" 
            className="w-32"
          />
          <span>2018 - 2019</span>
          <h1 className="font-semibold">BTS Dévéloppeur d'Applications</h1>
          <p>ESTAM 2 Plateaux ex-ambassade de Chine</p>
        </a>
      </div>
    </div>
  )
}

export default Education