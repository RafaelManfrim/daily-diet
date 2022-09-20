
import styled from "styled-components/native";

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => {
  color: theme.COLORS.GRAY_700
})``
