import DrawerComp from "./Components/Drawer";
import EasySteps from "./Components/EasySteps";
import HeroSection from "./Components/HeroSection";
import LearningEnvironment from "./Components/LearningEnv";
import NavbarComp from "./Components/Navbar";


export default function Home() {
  return (
    <div className=" font-mono">
      <NavbarComp />
      <DrawerComp />
      <HeroSection />
      <LearningEnvironment />
      <EasySteps/>
    </div>
  );
}
