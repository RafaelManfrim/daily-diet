import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'phosphor-react-native'

export const StatisticsContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const StatisticsHeader = styled.View`
  width: 100%;
  align-items: center;
  padding: 32px 24px;
`

export const StatisticsBackButton = styled.TouchableOpacity`
  align-self: flex-start;
`

export const StatisticsBackIcon = styled(ArrowLeft).attrs(({ theme }) => {
  return {
    size: 32,
    color: theme.COLORS.GREEN_DARK
  }
})``

export const StatisticsHeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-top: -32px;
`

export const StatisticsHeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const StatisticsContent = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const StatisticsContentTitle = styled.Text``

export const MealsInDietCollumsContainer = styled.View`
  justify-content: space-between;
`
