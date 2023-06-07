

const itemListContainer = ({title, greet}) => {

  return (
    <div className="px-4 px-lg-5 my-5 bg-dark py-5 fondoGreeting">
        <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">{title}</h1>
            <p className="lead fw-normal text-white-50 mb-0">{greet}</p>
        </div>
    </div>
  )
}

export default itemListContainer
