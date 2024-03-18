import Header from "./components/header";
import Jumbo from "./components/jumbo";
import Slogan from "./components/slogan";
import Cardselect from "./components/card-section";
import Rewards from "./components/rewards-section";
import Map from "./components/map-section";
import Close from "./components/closer";
import Footer from "./components/footer";
import City from "./components/city-section";



export default function Home() {
  return (
    <>
    <Header />
    <Jumbo />
    <Slogan />
    <Cardselect />
    <Rewards />
    <Map />
    <City />
    <Close />
    <Footer />
   
   
    </>
  );
}
