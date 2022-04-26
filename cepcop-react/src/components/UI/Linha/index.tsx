import styled from 'styled-components';
import { cinzaMedio } from '../variaveis';

const Linha = styled.hr`
    border-color: ${cinzaMedio};
    margin: 2% 0;
    opacity: .35;
    size: 1px;
    width: 100%
`;

export default Linha;
