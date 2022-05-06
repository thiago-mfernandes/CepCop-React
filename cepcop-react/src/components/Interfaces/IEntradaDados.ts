import IInputProps from "src/components/Interfaces/IInputProps";

export default interface IEntradaDados extends IInputProps {
    required?: boolean;
    conteudoLabel?: string;
    labelObrigatorio?: true | false;
    name: string;
    htmlFor?: string;
}
