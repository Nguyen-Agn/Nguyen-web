import NavBar from './components/NavCard';
import Hero from './components/Hero-section';
import CircularGallery from './components/CircelGallery';
import Chroma from './components/Chroma';
import Footer from './components/footer';
import ScrollReveal from './components/ScrollTail';
import ImgTrail from './components/List';
import Name from './components/Name'

const App = () => {

  return (
    <div className='h-fit w-screen bg-gray-950 from-gray-600 to-gray-950 gap-96 flex flex-col items-center justify-evenly py-[15%] overflow-hidden'>
      <NavBar />
    
      <Name/>

      <Hero />

      <div className='h-screen w-full relative m-10'>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>

      <Chroma />


      <ScrollReveal
        baseOpacity={0.5}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        When does a man die? When he is hit by a bullet? 
        No! When he suffers a disease? 
        No! When he ate a soup made out of a poisonous mushroom? 
        No! A man dies when he is forgotten!
      </ScrollReveal>

      <ImgTrail />

      <Footer />
    </div>
  );
};
export default App;