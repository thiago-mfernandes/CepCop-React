import CardAtendidos from "../CardAtendidos";
import Estatisticas from "../CardEstatisticas";
import CardFilaEspera from "../CardFilaEspera";
import CardHoje from "../CardHoje/Index";
import CardNaoAtendidos from "../../Home/CardNaoAtendidos";
import CardTotalAnalisantes from "../../Home/CardTotalAnalisantes";
import CardTurmas from "../../Home/CardTurmas";
import { StyledHomeCard } from "./styled";

function HomeCard() {
    return <StyledHomeCard>
        <CardHoje />
        <CardFilaEspera />
        <CardAtendidos />
        <CardNaoAtendidos />
        <CardTotalAnalisantes />
        <CardTurmas />
        <Estatisticas />

    </StyledHomeCard>;
}

export default HomeCard;
