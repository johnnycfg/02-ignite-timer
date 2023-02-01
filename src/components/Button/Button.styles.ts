import styled from 'styled-components'

interface ButtonProps {
  theme: {
    primary: string
  }
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  background-color: ${(props) => props.theme.primary};
`
