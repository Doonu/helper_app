import styled from 'styled-components'
import { Button } from 'antd'
import { IconRotate } from '@shared/assets'

export const SChoiceDirectory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const SChoice = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
`

export const SButtonChoice = styled(Button)``

export const SButtonDelete = styled(Button).attrs({ icon: IconRotate })``
