import styled, { css } from "styled-components/native";

export const FormGroupContainer = styled.View`
  width: 100%;
  margin-bottom: 16px;
`

export const FormGroupLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-bottom: 4px;
`;
