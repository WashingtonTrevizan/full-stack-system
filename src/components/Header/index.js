import Logo from '../Logo/index.js';
import OpcoesHeader from '../OpcoesHeader';
import Icons from '../icons';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: aliceblue;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <Icons />
        </HeaderContainer>
    )
}

export default Header