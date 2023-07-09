import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Tasks } from "../../../model/Task";

interface Props {
  task: Tasks;
  onToggle: () => void;
  onRemove: () => void;
}

export default function Task({ task, onToggle, onRemove }: Props) {
  return (
    <View style={styles.pad}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onToggle}>
          {task.isDone ? (
            <Image
              source={require("../../../assets/check.png")}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require("../../../assets/uncheck.png")}
              style={styles.icon}
            />
          )}
        </TouchableOpacity>

        <Text style={task.isDone ? styles.textActive : styles.text}>
          {task.task}
        </Text>
        <TouchableOpacity onPress={onRemove}>
          <Image
            source={require("../../../assets/trash.png")}
            style={styles.iconTrash}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
