import { useState } from "react";
import { MaskedTextInput } from "react-native-mask-text";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

const InputScreen = ({ route, navigation }) => {
  const [text, onChangeText] = useState("Carniceria FV");
  const [number, onChangeNumber] = useState(0);

  const onButtonPress = () => {
    navigation.navigate("Success", { number, text });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          onChangeText={onChangeText}
          value={text}
        />
        <MaskedTextInput
          type="currency"
          options={{
            prefix: "$",
            decimalSeparator: ".",
            groupSeparator: ",",
            precision: 2,
          }}
          onChangeText={(text, rawText) => {
            onChangeNumber(text);
          }}
          style={styles.inputNumber}
          placeholder="$0"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ededed",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  inputNumber: {
    margin: 12,
    fontSize: 70,
    padding: 10,
  },
  inputText: {},
  buttonContainer: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  button: {
    padding: 12,
    backgroundColor: "#008AD6",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 18 },
});
