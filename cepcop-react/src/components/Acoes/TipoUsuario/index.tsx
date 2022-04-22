import { cinzaEscuro } from 'src/components/UI/variaveis';
import styled from 'styled-components';

const UserType = styled.h2`
    color: ${cinzaEscuro};
    font-size: 1.75rem;
    font-family: 'Fjalla One' sans-serif;
    padding-left: 5%;

    //---------------------------------------------->
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

interface UserTypeProps {
    nome: string;
}

function TipoUsuario(props: UserTypeProps): JSX.Element {
    return (
        <>
            <UserType>{props.nome}</UserType>
        </>
    )
}

export default TipoUsuario;