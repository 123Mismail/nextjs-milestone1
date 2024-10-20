 
import About from "./components/about";
import ContactUs from "./components/contact";
import Footer from "./components/footer";
import Herosection from "./components/herosection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Herosection></Herosection>
      <About  />
      <ContactUs/>
      <Footer/>
    </div>
  )
}
