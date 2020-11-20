import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #353535;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.Text`
  margin-bottom: 35px;
  color: #16d3b9;
  font-size: 40px;
  font-weight: 700;
`;

export const Logo = styled.Image`
  margin-bottom: 35px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#757575'
})`
  background: rgba(0, 0, 0, 0.20);
  width: 90%;
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #16d3b9;
  width: 90%;
  height: 45px;
  border-radius: 25px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: #353535;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 5px;
  margin-bottom: 9px;
`;

export const LinkText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

