import CardAtendidos from "../CardAtendidos";
import Estatisticas from "../CardEstatisticas";
import CardFilaEspera from "../CardFilaEspera";
import CardHoje from "../CardHoje/Index";
import CardNaoAtendidos from "../CardNaoAtendidos";
import CardTotalAnalisantes from "../CardTotalAnalisantes";
import CardTurmas from "../CardTurmas";
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
