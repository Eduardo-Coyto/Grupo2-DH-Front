import img from "../assets/404.jpg"

function NotFound() {
  return (
    <div className="w-full min-h-screen">
      <img src={img} alt="Error 404" />
    </div>
  )
}

export default NotFound
