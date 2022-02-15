import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";

export default function CodeScannerScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert("Data", data, [
      {
        text: "OK",
        onPress: () => {
          // setScanned(false);
          navigation.navigate("Input", { data });
        },
      },
    ]);
  };

  return (
    <>
      <View style={styles.container}>
        {isFocused && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        )}
      </View>
      {scanned && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.text}> Scan </Text>
        </TouchableOpacity>
      )}
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("Input");
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "black",
  },
});
