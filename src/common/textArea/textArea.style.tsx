import styled from 'styled-components'

import Theme from 'src/theme'

export const InputError = styled.div`
  font-size: ${Theme.fontSizes.$2};
  color: ${Theme.colors.$error};
`

export const TextAreaStyled = styled.textarea`
  padding: 10px;
  border-radius: ${Theme.radius.$default};
  font-size: ${Theme.fontSizes.$2};
  border: 1px solid ${Theme.colors.$borderInput};
  outline: none;
  background-color: ${Theme.colors.$white};
  font-family: ${Theme.fonts.$body};
  resize: vertical;
  min-height: 100px;

  &:hover {
    border: 1px solid ${Theme.colors.$gray200};
  }

  &:focus {
    border: 1px solid ${Theme.colors.$gray400};
  }
`
