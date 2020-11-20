import React, { useContext, useState, useEffect } from 'react';
import {
  Platform,
  Text,
  Keyboard,
  Alert
} from 'react-native';
import { 
  Background,
  Container,
  HeaderText,
  BodyView,
  List,
  ListView,
  ListText,
  ButtonRemoveTask,
  AddContainer,
  AddInput,
  ButtonAdd,
  ButtonExit
} from './styles'
import { AuthContext } from '../../Contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home() {
  const { user, signOut } = useContext(AuthContext);
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  async function addTask() {
    const search = task.filter(task => task === newTask);
    if (search.length !== 0) {
      Alert.alert("Atenção", "Nome da tarefa repetido!");
      return;
    }
    setTask([...task, newTask]);
    setNewTask("");
    Keyboard.dismiss();
  };

  async function removeTask(item) {
    Alert.alert(
      "Deletar Task",
      "Tem certeza que deseja remover esta anotação?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => setTask(task.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    async function carregaDados() {
      const getTask = await AsyncStorage.getItem("task");
      if (getTask) {
        setTask(JSON.parse(getTask));
      }
    }
    carregaDados();
  }, []);

  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("task", JSON.stringify(task));
    }
    salvaDados();
  }, [task]);

  return (
    <Background>
      <Container
        style={{ 
          paddingHorizontal: 20,
          paddingVertical: 20
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <HeaderText>Olá {user && user.name}</HeaderText>
        <BodyView
          showsVerticalScrollIndicator={false}
        >
          <List 
            data={task}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) => (
              <ListView>
                <ListText>{item}</ListText>
                <ButtonRemoveTask onPress={() => removeTask(item)}>
                  <MaterialCommunityIcons
                    name="delete-forever-outline"
                    size={25}
                    color="#f64c75"
                  />
                </ButtonRemoveTask>
              </ListView>
            )}
          />
        </BodyView>
        <AddContainer>
          <AddInput
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5
            }}
            placeholderTextColor="#353535"
            autoCorrect={true}
            value={newTask}
            placeholder="Adicione uma tarefa"
            maxLength={25}
            onChangeText={text => setNewTask(text)}
          />
          <ButtonAdd
            onPress={() => addTask()}
          >
          <Ionicons name="ios-add" size={20} color="white" />
          </ButtonAdd>
        </AddContainer>
        <ButtonExit 
          title='SAIR'
          onPress={() => signOut()}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: 'bold',
              fontSize: 17,
              marginRight: 10
            }}
          >SAIR</Text>
          <MaterialCommunityIcons name="exit-to-app" size={25} color="white" />
        </ButtonExit>
      </Container>
    </Background>
    );
  }
