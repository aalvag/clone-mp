import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  EvilIcons,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Audio } from "expo-av";
import Account from "../components/Account";
import Handle from "../components/Handle";

const SuccessTranferScreen = ({ route, navigation }) => {
  const { number, text } = route.params;
  const [sound, setSound] = useState(null);
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const [fontsLoaded] = useFonts({
    "Proxima-Nova-SBold": require("../../assets/fonts/Proxima-Nova-Sbold.otf"),
  });

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/success.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    setTimeout(() => {
      playSound();
    }, 500);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.header}>
        <View style={{ padding: 32 }}>
          <TouchableOpacity
            style={{ marginBottom: 10 }}
            onPress={() => {
              navigation.navigate("Scanner");
            }}
          >
            <AntDesign name="close" size={24} color="white" />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                maxWidth: "85%",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontFamily: "Proxima-Nova-SBold",
                }}
              >
                Ya enviamos tu trasferencia
              </Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                }}
              >
                <MaterialCommunityIcons
                  name="bank-outline"
                  size={30}
                  color="green"
                  style={{ padding: 10 }}
                />
              </View>
              <View
                style={{
                  alignSelf: "flex-end",
                  marginTop: -13,
                  backgroundColor: "white",
                  borderRadius: 50,
                }}
              >
                <AntDesign name="checkcircle" size={18} color="green" />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
          <View style={{ marginBottom: 10 }}>
            <Text
              style={{
                fontFamily: "Proxima-Nova-SBold",
                fontSize: 14,
                color: "gray",
                alignSelf: "flex-start",
              }}
            >
              {new Date().getDate()} de {months[new Date().getMonth()]} de{" "}
              {new Date().getFullYear()} a{" "}
              {new Date().getHours() < 10
                ? `0${new Date().getHours()}`
                : new Date().getHours()}
              :
              {new Date().getMinutes() < 10
                ? `0${new Date().getMinutes()}`
                : new Date().getMinutes()}
              hs.
            </Text>
          </View>
          <View
            style={{
              marginBottom: 10,
              borderWidth: 1,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderColor: "lightgray",
              paddingVertical: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Proxima-Nova-SBold",
                fontSize: 22,
                color: "black",
                alignSelf: "flex-start",
              }}
            >
              {number}
            </Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text
              style={{
                fontFamily: "Proxima-Nova-SBold",
                fontSize: 14,
                color: "#818181",
                alignSelf: "flex-start",
              }}
            >
              Para
            </Text>
            <Text
              style={{
                fontFamily: "Proxima-Nova-SBold",
                fontSize: 20,
                color: "black",
                alignSelf: "flex-start",
                marginVertical: 5,
              }}
            >
              {text}
            </Text>
            <Text>Mercado Pago</Text>
          </View>
          <Text
            style={{
              color: "white",
              backgroundColor: "#60c1f8",
              textAlign: "center",
              padding: 10,
              fontSize: 16,
              borderWidth: 1,
              borderColor: "#60C1F8",
              borderRadius: 5,
              marginTop: 180,
              marginBottom: 10,
            }}
          >
            Compartir Comprobante
          </Text>
          <Text
            style={{
              color: "#60C1F8",
              textAlign: "center",
              padding: 10,
              fontSize: 16,
              borderWidth: 1,
              borderColor: "#60C1F8",
              borderRadius: 5,

              marginBottom: 10,
            }}
          >
            Hacer otra transferencia
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#60C1F8",
              textAlign: "center",
              padding: 10,
            }}
          >
            Ir al inicio
          </Text>
        </View>
      </View>
    </>
  );
};

export default SuccessTranferScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0DB578",
    justifyContent: "center",
  },
  body: {
    flex: 1,
  },
});
