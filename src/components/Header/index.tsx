import { useNavigation } from '@react-navigation/native';

import { HeaderContainer, BackButton, BackIcon, PageTitle } from './styles';

type HeaderProps = {
  title: string;
  variant?: 'default' | 'good' | 'bad';
}

export function Header({ title, variant = 'default' }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <HeaderContainer variant={variant}>
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>
      <PageTitle>{title}</PageTitle>
    </HeaderContainer>
  );
}