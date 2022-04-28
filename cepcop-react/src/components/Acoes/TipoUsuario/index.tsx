import { UserType } from "./styles";

function TipoUsuario(props: {nome: string;}) {
    return (
        <>
            <UserType>{props.nome}</UserType>
        </>
    )
}

export default TipoUsuario;