import Cabecalho from "src/components/Cabecalho";
import { GlobalStyle } from "src/components/GlobalStyle";
import HomeCard from "src/components/UI/Cards/Home/CardHome";

export default function Home() {
    return (
        <div className="App">
            <GlobalStyle />
            <Cabecalho userName={"teste 1"} />
            <HomeCard />
        </div>
    );
}
