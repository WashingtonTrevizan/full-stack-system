import styled from 'styled-components';

const OpcoesDHeader = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    margin-top: 8px;
    cursor: pointer;
    text-align: center;
    list-style: none;
`

const textoOpcoes = ['Categorias','Favoritos','Minha Estante']

function OpcoesHeader() {
    return (
        <OpcoesDHeader>
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </OpcoesDHeader>
    )
}

export default OpcoesHeader;