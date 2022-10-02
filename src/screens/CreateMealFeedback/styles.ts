import styled, { css } from 'styled-components/native'

interface CreateMealFeedbackProps {
  isInDiet: boolean
}

export const CreateMealFeedbackContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const FeedbackTitle = styled.Text<CreateMealFeedbackProps>`
  ${({ theme, isInDiet }) => css`
    color: ${isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-bottom: 8px;
`

export const FeedbackText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  text-align: center;
`

export const FeedbackIllustration = styled.Image`
  margin: 32px 0;
`

export const GoToHomeButton = styled.TouchableOpacity`
  padding: 16px 24px;
  background-color: ${props => props.theme.COLORS.GRAY_600};
  border-radius: 6px;
`

export const GoToHomeButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
