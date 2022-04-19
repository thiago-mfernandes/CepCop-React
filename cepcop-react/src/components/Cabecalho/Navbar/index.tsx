import styled from 'styled-components';
//import userImage from '../../../img/';


const navItem = styled.p`
    color: $verde-padrao;
    font-size: 50px;
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
            <ul className='header__menu'>
                {navItens.map((navitem, key) => (
                    <li 
                        key={key} 
                        style={{textDecoration: 'none'}}
                        className='header__menu___item'
                    >
                        <img className='header__img' src={} alt="" />
                        <p>
                            {navitem.nome}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;