import IInputProps from "src/components/Interfaces/IInputProps";

export default interface IContainerConteudo extends IInputProps {
    conteudoLabel: string;
    required?: boolean;
}
