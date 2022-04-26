import TabelaContainer from "./TabelaContainer";
import TabelaHeader from "./TabelaHeader";
import TabelaHeaderTr from "./TabelaHeaderTr";
import TabelaRow from "./TabelaRow";
import TabelaRowTh from "./TabelaRow";

function Tabela() {
    return (
        <>
            <TabelaContainer>
                <TabelaHeader>
                    <TabelaHeaderTr>
                        <TabelaRow>
                            <TabelaRowTh>{'Nome'}</TabelaRowTh>
                            <TabelaRowTh>{'Email'}</TabelaRowTh>
                            <TabelaRowTh>{'CPF'}</TabelaRowTh>
                            <TabelaRowTh>{'Celular'}</TabelaRowTh>
                        </TabelaRow>
                    </TabelaHeaderTr>
                </TabelaHeader>
            </TabelaContainer>
        </>
    )
}

export default Tabela;