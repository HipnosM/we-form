import HeroSection from "./components/heroSection";
import Hero from "./assets/hero.svg"
import Form from "./components/formSection";

function Cadastro() {

    return (
        <div className="content">
            <HeroSection
                img_src={Hero}
                img_alt="hero photo"
                spanContent="We "
                h1Content="Form"
            />

            <Form 
                h2Content="Nova"
                Span="entidade"
                
                firstLabel="nome"
                secondLabel="campos de atuação"

                firstOption="Selecione uma opção"
                secondOption="Pet Shop"
                
                thirdLabel="pontos de coleta"

                submit="Cadastrar"
            />
        </div>
    );
};

export default Cadastro;