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
  FontAwesome5,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Audio } from "expo-av";
import ShoppingBag from "../components/ShoppingBag";

const SuccessScreen = ({ route, navigation }) => {
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
            <View>
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  lineHeight: 30,
                  fontFamily: "Proxima-Nova-SBold",
                }}
              >
                ¡Listo! Ya le pagaste a
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  lineHeight: 30,
                  fontFamily: "Proxima-Nova-SBold",
                }}
              >
                {text}
              </Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "white",
                  padding: 0,
                  borderRadius: 50,
                }}
              >
                {text.toLowerCase().trim() === "numa corrientes" ? (
                  <Image
                    source={require("../../assets/numa-corrientes.jpg")}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                ) : text.toLowerCase().trim() === "asador bandera verde" ? (
                  <Image
                    source={require("../../assets/asador.jpg")}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                ) : (
                  <ShoppingBag />
                )}
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
          <View
            style={{
              marginBottom: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderRadius: 50,
                // paddingVertical: 8,
                paddingBottom: 16,
                paddingTop: 6,
                paddingHorizontal: 12,
                // padding: 12,
                borderColor: "#818181",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png",
                }}
                style={{
                  width: 30,
                  aspectRatio: 1,
                  resizeMode: "contain",
                }}
              />
              {/* <FontAwesome5 name="cc-visa" size={21} color="#1434CB" /> */}
              <Text
                style={{
                  fontSize: 9,
                  position: "absolute",
                  bottom: 10,
                }}
              >
                Débito
              </Text>
            </View>

            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Proxima-Nova-SBold",
                }}
              >
                {number}
              </Text>
              <Text style={{ fontSize: 14, color: "#818181" }}>
                Visa Débito terminada en 7894
              </Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderRadius: 50,
                padding: 8,
                borderColor: "#818181",
              }}
            >
              <MaterialIcons name="qr-code-2" size={40} color="black" />
            </View>
            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Proxima-Nova-SBold",
                }}
              >
                Operación #27245685211
              </Text>
              <Text style={{ fontSize: 14, color: "#818181" }}>
                {new Date().getDate()} de {months[new Date().getMonth()]} de{" "}
                {new Date().getFullYear()} a las {new Date().getHours()}:
                {new Date().getMinutes()} hs
              </Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                borderWidth: 3,
                borderRadius: 50,
                height: 55,
                width: 55,
                borderColor: "#00B1EA",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontSize: 30, color: "#00B1EA", fontWeight: "bold" }}
              >
                4
              </Text>
            </View>
            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Proxima-Nova-SBold",
                }}
              >
                Sumaste 16 Mercado Puntos
              </Text>
              <Text style={{ fontSize: 16, color: "#00B1EA" }}>
                Ver mis beneficios
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text
              style={{
                fontFamily: "Proxima-Nova-SBold",
                fontSize: 22,
                color: "black",
                alignSelf: "center",
              }}
            >
              Descuentos para vos
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={require("../../assets/264px-Gulf_logo.png")}
                style={{
                  height: 60,
                  aspectRatio: 1,
                  resizeMode: "contain",
                  borderRadius: 50,
                  marginBottom: 10,
                }}
              />

              <Text style={{ fontSize: 12 }}>HASTA</Text>
              <Text style={{ fontSize: 20 }}>10% OFF</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/rex_logo.jpg")}
                style={{
                  height: 60,
                  aspectRatio: 1,
                  resizeMode: "contain",
                  borderRadius: 50,
                  marginBottom: 10,
                }}
              />
              <Text style={{ fontSize: 12 }}>HASTA</Text>
              <Text style={{ fontSize: 20 }}>20% OFF</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/logo-puma1.jpg")}
                style={{
                  height: 60,
                  aspectRatio: 1,
                  resizeMode: "contain",
                  borderRadius: 50,
                  marginBottom: 10,
                }}
              />
              <Text style={{ fontSize: 12 }}>HASTA</Text>
              <Text style={{ fontSize: 20 }}>5% OFF</Text>
            </View>
          </View>
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
            Ver todos los descuentos
          </Text>
        </View>
      </View>
    </>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00a650",
    justifyContent: "center",
  },
});
