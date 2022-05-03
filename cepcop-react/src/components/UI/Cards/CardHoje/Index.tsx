import { MdChecklist } from "react-icons/md";
import { Link } from "react-router-dom";
import { BotaoVerAnalisantes } from "../../Botao/BotaoVerAnalisantes";
import ContainerData from "./ContainerData";
import ContainerInfo from "./ContainerInfo";
import ContainerTotal from "./ContainerTotal";
import Data from "./Data";
import DiaSemana from "./DiaSemana";
import PessoaCadastrada from "./PessoaCadastrada";
import { StyledCardHoje } from "./styled";
import TituloCardHoje from "../Titulos/TituloCardHoje";
import TotalCadastros from "./TotalCadastros";

function CardHoje() {
    const dataHoje: string = new Date().toDateString();
    return (
        <StyledCardHoje>
            <TituloCardHoje conteudo="Cadastros Hoje:" />
            <ContainerInfo>
                <ContainerData>
                    <Data dataHoje={`${dataHoje}`} />
                    {/* tratar o dado aqui */}
                    <DiaSemana dia="Sexta" />
                    {/* tratar o dado aqui */}
                </ContainerData>
                <ContainerTotal>
                    <TotalCadastros total={21} />
                    {/* mockar o dado */}
                    <MdChecklist
                        style={{
                            color: "#787887",
                            fontSize: "2rem",
                            padding: "0 0",
                        }}
                    />
                </ContainerTotal>
            </ContainerInfo>
            <PessoaCadastrada pessoa="1-João da Silva" />
            {/* mockar o dado */}
            <PessoaCadastrada pessoa="2-José de Mello" />
            {/* mockar o dado */}
            <PessoaCadastrada pessoa="3-Jair Oliveira" />
            {/* mockar o dado */}
            <PessoaCadastrada pessoa="4-Jefté Maanain" />
            {/* mockar o dado */}
            <Link 
                to="/analisantes"
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <BotaoVerAnalisantes>Ver Analisantes</BotaoVerAnalisantes>
            </Link>
        </StyledCardHoje>
    );
}

export default CardHoje;
