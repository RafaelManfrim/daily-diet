import styled, { css } from 'styled-components/native'

type MealCategoryButtonContainerProps = {
  isActive: boolean
  type: 'bad' | 'good'
}

export const MealCategoryButtonContainer = styled.TouchableOpacity<MealCategoryButtonContainerProps>`
  ${({ theme, isActive, type }) => type === 'good' && css`
    background-color: ${isActive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_200};
    border-color: ${isActive ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_200};
  `};
  ${({ theme, isActive, type }) => type === 'bad' && css`
    background-color: ${isActive ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};
    border-color: ${isActive ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_200};
  `};
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  border-radius: 6px;
`

type MealCategoryButtonIndicatorProps = {
  type: 'bad' | 'good'
}

export const MealCategoryButtonIndicator = styled.View<MealCategoryButtonIndicatorProps>`
  ${({ theme, type }) => css`
    background-color: ${type === 'bad' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK};
  `};

  width: 8px;
  height: 8px;
  border-radius: 9999px;
`

export const MealCategoryButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  margin-left: 8px;
`