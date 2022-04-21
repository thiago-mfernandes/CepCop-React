import styled from 'styled-components';

const NavLista = styled.ul`
    display: flex;
    flex-direction: column;
    //-------------------------------------------->
    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: 25vh;
        width: 100%;
        border: none;
        overflow-x: auto;
    }
`



function Navbar() {

    const navItens = [
        {id: 1, nome: 'Home'},
        {id: 2, nome: 'Coordenadores'},
        {id: 3, nome: 'Supervisores'},
        {id: 4, nome: 'Estagiários '},
        {id: 5, nome: 'Analisantes'},
        {id: 6, nome: 'Atendimentos'},
        {id: 7, nome: 'Turmas'},
        {id: 8, nome: 'Cursos'},
        {id: 9, nome: 'Configurações'}        
    ]
    
    return (
        <nav>
            <NavLista>
                {navItens.map((navitem, key) => (
                    <li 
                        key={key} 
                        style={{textDecoration: 'none'}}
                        className='header__menu___item'
                    >                        
                        <p>
                            {navitem.nome}
                        </p>
                    </li>
                ))}
            </NavLista>
        </nav>
    )
}

export default Navbar;