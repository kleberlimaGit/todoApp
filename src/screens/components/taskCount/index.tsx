import { Text, View} from "react-native";

import { styles } from "./styles";

interface Props {
    taskDone: number,
    taskCreated: number
}

export default function TaskCount({taskCreated, taskDone}: Props) {
  return (
    <View style={styles.containerTaskToDo}>
    <View style={styles.taskContainerTodo}>
      <Text style={styles.taskCreated}>Criadas</Text>
      <Text style={styles.count}>{taskCreated}</Text>
    </View>
    <View style={styles.taskContainerTodo}>
      <Text style={styles.taskDone}>Concluídas</Text>
      <Text style={styles.count}>{taskDone}</Text>
    </View>
  </View>
  )
}
