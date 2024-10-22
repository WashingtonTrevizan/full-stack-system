import sacola from '../../image/sacola.svg';
import perfil from '../../image/perfil.svg';
import styled from 'styled-components';


const icons = [perfil, sacola]
const HeaderIcons = styled.ul`
  display: flex;
  align-items: center;
`
const ListIcons = styled.li`
  list-style: none;
  margin-right: 40px;
  align-items: center;
`

function Icons() {
  return (
    <HeaderIcons>
      {icons.map((icons) => (
        <ListIcons><img src={icons} alt='icon'></img></ListIcons>
      ))}
    </HeaderIcons>
  )

}

export default Icons;