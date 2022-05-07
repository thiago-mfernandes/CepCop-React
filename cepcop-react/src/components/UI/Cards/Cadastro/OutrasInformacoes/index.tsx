import { cinzaMedio } from "src/components/UI/variaveis";
import styled from "styled-components";

export const StyledSecaoGenerica = styled.section`
    border-bottom: 1px solid ${cinzaMedio};
    height: 100%;
    padding: 2.5% 0;
    &:hover {
        cursor: pointer;
    }
`;

export default function OutrasInformacoes() {
    return <StyledSecaoGenerica></StyledSecaoGenerica>;
}
