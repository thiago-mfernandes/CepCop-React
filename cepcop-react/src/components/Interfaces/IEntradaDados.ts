import IInputProps from "src/components/Interfaces/IInputProps";

export default interface IEntradaDados extends IInputProps {
    required?: boolean;
    obrigatorio?: boolean;
    conteudoLabel?: string;
}
