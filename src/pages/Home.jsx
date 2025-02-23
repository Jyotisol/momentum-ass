import Body from "../@components/Body";
import Configuration from "../@components/ConfigurationPanel/Configuration";
import Footer from "../@components/Footer";
import Navbar from "../@components/Navbar";
import Sidebar from "../@components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="w-screen h-screen relative grid grid-cols-home grid-rows-home">
      <Sidebar />
      <Navbar />

      <Body />

      <Footer paths={["cart", "cart_routes.py", "POST /carts/{cart_id}"]} />

      <Configuration />
    </div>
  );
};

export default Home;