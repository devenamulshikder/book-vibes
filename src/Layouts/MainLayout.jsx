import Nav from "../Pages/Nav"
import Banner from "../components/Banner"

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
        <Nav></Nav>
        <Banner></Banner>
    </div>
  )
}

export default MainLayout