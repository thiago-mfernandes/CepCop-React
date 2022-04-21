import { azulEscuroFosco, cinzaMedio } from "src/components/UI/variaveis";
import styled from "styled-components";

const NavLista = styled.ul`
  display: flex;
  flex-direction: column;
  //-------------------------------------------->
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 25vh;
    width: 100%;
    border: none;
    overflow-x: auto;
  }
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 10vh;
  width: 100%;
  border-bottom: 1px solid ${cinzaMedio};
  text-decoration: none;

  &:first-child {
    border-top: 1px solid ${cinzaMedio};
    margin-left: 0;
    margin-top: 7.5%;
    //-------------------------------------------->
    @media screen and (max-width: 768px) {
      border-bottom: 1px solid ${cinzaMedio}; //pode retirar se quiser
      border-top: none;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-top: 0;
      position: absolute;
      top: 5%;
      left: 0;
      width: 100vw;
    }
  }

  &:hover {
    border-left: 4px solid ${azulEscuroFosco};
    cursor: pointer;
    //adicionar o material icons aqui
    //.material-icons {
    /* color: $azul-medio-brilhante;
                }
                a {
                    color: black;
                } */

    //-------------------------------------------->
    @media screen and (max-width: 768px) {
      border-left: none;
    }
  }
  //-------------------------------------------->
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    border-bottom: none;
    margin: 0 5%;
    width: 100%;
  }
`;

function Navbar() {
  const navItens = [
    { id: 1, nome: "Home" },
    { id: 2, nome: "Coordenadores" },
    { id: 3, nome: "Supervisores" },
    { id: 4, nome: "Estagiários " },
    { id: 5, nome: "Analisantes" },
    { id: 6, nome: "Atendimentos" },
    { id: 7, nome: "Turmas" },
    { id: 8, nome: "Cursos" },
    { id: 9, nome: "Configurações" },
  ];

  return (
    <nav>
      <NavLista>
        {navItens.map((navitem, key) => (
          <NavItem key={key}>
            <p>{navitem.nome}</p>
          </NavItem>
        ))}
      </NavLista>
    </nav>
  );
}

export default Navbar;
