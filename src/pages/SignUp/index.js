import React, { useContext, useState } from 'react';
import { Platform, Keyboard } from 'react-native'
import { AuthContext } from '../../Contexts/auth';
import { 
  Background, 
  Container, 
  ContainerText,
  AreaInput, 
  Input,
  SubmitButton,
  SubmitText
} from '../SignIn/styles';

export default function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, name)
    Keyboard.dismiss();
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <ContainerText>To-Do List</ContainerText>
        <AreaInput>
          <Input 
            placeholder='Nome'
            autoCorrect={false}
            autoCapitalize='none'
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize='none'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}