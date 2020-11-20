import styled from 'styled-components/native';


export const Background = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  margin-top: 5px;
  background-color: #FFF;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #353535;
  margin-bottom: 5px;
`;

export const BodyView = styled.ScrollView`
  flex: 1;
`;

export const List = styled.FlatList`
  flex: 1;
  margin-top: 5px;
`;

export const ListView = styled.View`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1;
  border-color: #eee;
`;

export const ListText = styled.Text`
  font-size: 18px;
  color: #353535;
  font-weight: 700;
  margin-top: 5px;
  text-align: center;
`;

export const ButtonRemoveTask = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 10px;
`;

export const AddContainer = styled.View`
  padding: 0;
  height: 60px;
  justify-content: center;
  flex-direction: row;
  padding-top: 13;
  margin-bottom: 10px;
  border-top-width: 1px;
  border-color: #eee;
`;

export const AddInput = styled.TextInput`
  flex: 1;
  height: 45px;
  background-color: #eee;
  border-radius: 5px;
  border-width: 1px;
  border-color: #eee;
  font-size: 18px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  height: 45px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: #16d3b9;
  border-radius: 5px;
  margin-left: 10px;
`;

export const ButtonExit = styled.TouchableOpacity`
  height: 40px;
  width: 355px;
  justify-content: center;
  align-items: center;
  background-color: #f64c75;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
`;
