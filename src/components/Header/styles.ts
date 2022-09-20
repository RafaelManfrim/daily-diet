import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native';

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  padding: 32px 24px;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => {
  return {
    color: theme.COLORS.GREEN_DARK,
    size: 32,
  }
})``

export const PageTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  flex: 1;
  text-align: center;
  margin-right: 32px;
`