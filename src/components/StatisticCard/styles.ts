import styled, { css } from 'styled-components/native'

type StatisticCardContainerProps = {
  variant: 'default' | 'good' | 'bad'
}

export const StatisticCardContainer = styled.View<StatisticCardContainerProps>`
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'good':
        return theme.COLORS.GREEN_LIGHT
      case 'bad':
        return theme.COLORS.RED_LIGHT
      default:
        return theme.COLORS.GRAY_200
    }
  }};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
`

export const StatisticCardNumber = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`

export const StatisticCardDescription = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`