import { useNavigation } from '@react-navigation/native';

import { HeaderContainer, BackButton, BackIcon, PageTitle } from './styles';

type HeaderProps = {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <HeaderContainer>
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>
      <PageTitle>{title}</PageTitle>
    </HeaderContainer>
  );
}