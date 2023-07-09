import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";

import { styles } from "./styles";
import TaskCount from "../components/taskCount";
import { Tasks } from "../../model/Task";
import Task from "../components/task";

export default function Home() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [taskName, setTaskName] = useState("");

  function addTask() {
    if (tasks.filter((task) => !task.isDone).length >= 10) {
      return Alert.alert(
        "Alerta!",
        "Suas atividades estão cheias, finalize alguma, ou delete para cadastrar novas."
      );
    }
    setTasks((state) => [...state, { task: taskName, isDone: false }]);
    setTaskName("");
  }

  function toggleTask(index: number) {
    if (tasks[index].isDone) {
      if (tasks.filter((task) => !task.isDone).length === 10) {
        return Alert.alert(
          "Alerta!",
          "Suas atividades estão cheias, finalize alguma, ou delete para poder retornar essa para o status não feita."
        );
      }
      tasks[index].isDone = false;
    } else {
      tasks[index].isDone = true;
    }
    setTasks([...tasks]);
  }

  function handleRemoveTask(index: number) {
    Alert.alert("Remover", `Deseja remover essa atividade?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks(tasks.filter((p) => p !== tasks[index]));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function booleanToNumber(val:boolean){
    return val ? 1 : 0
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require("../../assets/Logo.png")} />
      </View>
      <View>
        {/* --------------------- INPUT ------------------------- */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Adicione uma nova tarefa."
            style={styles.inputTask}
            placeholderTextColor={"#808080"}
            onChangeText={setTaskName}
            value={taskName}
          />
          <TouchableOpacity style={styles.taskButtonAdd} onPress={addTask}>
            <Image
              source={require("../../assets/plus.png")}
              style={styles.imgPlus}
            />
          </TouchableOpacity>
        </View>
        {/* --------------------- FINAL INPUT ------------------------- */}
        {/* --------------------- SCROLL ------------------------- */}
        <View style={styles.taskContainer}>
          <TaskCount
            taskCreated={tasks.length}
            taskDone={tasks.filter((t) => t.isDone).length}
          />
          {tasks.length > 0 ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scroll}
            >
              {tasks.sort((a:Tasks, b:Tasks) => booleanToNumber(a.isDone) - booleanToNumber(b.isDone)).map((task, index) => {
                return (
                  <Task
                    task={task}
                    key={index}
                    onToggle={() => toggleTask(index)}
                    onRemove={() => handleRemoveTask(index)}
                  />
                );
              })}
            </ScrollView>
          ) : (
            <Image source={require("../../assets/Empty.png")} />
          )}
        </View>
        {/* --------------------- FINAL SCROLL ------------------------- */}
      </View>
    </View>
  );
}
