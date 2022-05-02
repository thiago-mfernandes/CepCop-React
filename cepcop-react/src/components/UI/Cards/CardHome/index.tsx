import CardAtendidos from "../CardAtendidos";
import CardFilaEspera from "../CardFilaEspera";
import CardHoje from "../CardHoje/Index";
import CardNaoAtendidos from "../CardNaoAtendidos";
import CardTotalAnalisantes from "../CardTotalAnalisantes";
import { StyledHomeCard } from "./styled";

function HomeCard() {
    return <StyledHomeCard>
        <CardHoje />
        <CardFilaEspera />
        <CardAtendidos />
        <CardNaoAtendidos />
        <CardTotalAnalisantes />

    </StyledHomeCard>;
}

export default HomeCard;
