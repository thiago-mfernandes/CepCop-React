

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
            <ul>
                {navItens.map((navitem, key) => (
                    <li key={key}>
                        <img src="" alt="" />
                        <p style={{textTransform: 'none'}}>
                            {navitem.nome}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;