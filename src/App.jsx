import HeroSection from "./components/heroSection";
import MainSection from "./components/mainSection";
import Hero from './assets/hero.svg'

function App() {

  return (
    <div className="content">
      <HeroSection
        img_src={Hero}
        img_alt="hero photo"
        spanContent="We "
        h1Content="Form"
      />

      <MainSection
        h2Content="Cadastre sua"
        firstSpan="entidade"
        h2SecondContent="ou acesse dados de"
        secondSpan="parceiras"
        
        mainFirstHref="./Cadastro"
        mainSecondHref="#"
        firstButtonText="Cadastrar entidade"
        secondButtonText="Ver entidades cadastradas"
        
        footerFirstPText="Sua entidade não se encaixa nos campos de atuação disponíveis?"
        footerFirstHref="#"
        footerFirstLinkText="Registrar novo campo de atuação"
      />
    </div>
  );
};

export default App