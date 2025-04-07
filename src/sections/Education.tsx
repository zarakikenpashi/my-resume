import School1 from "../components/icons/School1"

const Education = () => {
  return (
    <div className="px-5 pt-12">
      <h1 className="text-xl py-5">Education</h1>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="card rounded-lg border-gray-200 border p-5">
          <School1 />
          <span>2012 - 2013</span>
          <h1 className="font-semibold">Master's degree in Computer Software Engineering</h1>
          <p>The University of Manchester</p>
        </div>

        <div className="card rounded-lg border-gray-200 border p-5">
          <School1 />
          <span>2012 - 2013</span>
          <h1 className="font-semibold">Master's degree in Computer Software Engineering</h1>
          <p>The University of Manchester</p>
        </div>
      </div>
    </div>
  )
}

export default Education