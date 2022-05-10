import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import BotaoRodapeNav from "../UI/Botao/BotaoRodapeNav";
import CaixaExibir from "./CaixaExibir";
import Footer from "./Footer";
import FooterContainer from "./FooterContainer";
import FooterInfo from "./FooterInfo";

function Rodape() {
    return (
        <Footer>
            <FooterContainer>
                <FooterInfo texto="Mostrando" />
                <CaixaExibir>
                    <FooterInfo texto="1" />
                </CaixaExibir>
                <FooterInfo texto="de" />
                <CaixaExibir>
                    <FooterInfo texto="5" />
                </CaixaExibir>
                <FooterInfo texto="Entradas" />
            </FooterContainer>
            <FooterContainer>
                <BotaoRodapeNav>
                    <MdOutlineArrowBack />
                </BotaoRodapeNav>
                <CaixaExibir>
                    <FooterInfo texto="5" />
                </CaixaExibir>
                <BotaoRodapeNav>
                    <MdOutlineArrowForward />
                </BotaoRodapeNav>
            </FooterContainer>
        </Footer>
    );
}

export default Rodape;
