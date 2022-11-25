import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="logo do ignite que é composta por 2 triângulos sobrepostos inclinados para a direita"
      />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={20} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={20} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
