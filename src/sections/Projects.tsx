const Projects = () => {
  return (
    <div className="px-5 pt-12" id="projects">
      <h1 className="text-xl py-5 font-bold">Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <a 
          className="rounded-md cursor-pointer"
          href="https://www.solibra.ci/refonte"
          title="Refonte du site officiel de solibra"
        >
          <img 
            className="w-full size-40 object-cover bg-gray-100 rounded-lg"
            src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
          />
        </a>
      </div>
    </div>
  )
}

export default Projects