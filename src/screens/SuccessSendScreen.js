import { useEffect, useState } from "react";
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
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Audio } from "expo-av";
import Account from "../components/Account";
import Handle from "../components/Handle";

const SuccessSendScreen = ({ route, navigation }) => {
  const { number, text } = route.params;
  const [sound, setSound] = useState(null);

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
                  fontSize: 22,
                  color: "white",
                  fontFamily: "Proxima-Nova-SBold",
                }}
              >
                ¡Listo! Enviaste {number} a {text}
              </Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                }}
              >
                {text.toLowerCase() === "romero carmelo javier" ? (
                  <Image
                    source={{
                      uri: "https://mla-s2-p.mlstatic.com/842647-MLA40550539619_012020-O.jpg",
                    }}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                ) : text.toLowerCase() === "asador bandera verde" ? (
                  <Image
                    source={{
                      uri: "https://mla-s2-p.mlstatic.com/878295-MLA41574877999_042020-I.jpg",
                    }}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                ) : (
                  <Account
                    style={{
                      padding: 2,
                    }}
                  />
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
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
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
              <Text style={{ fontSize: 20 }}>20% OFF</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/logo-mostaza.jpg")}
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
                source={require("../../assets/logo-farmacity.png")}
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
          </View>
          <Text
            style={{
              color: "#60C1F8",
              textAlign: "center",
              padding: 10,
              fontSize: 18,
              borderWidth: 1,
              borderColor: "#60C1F8",
              borderRadius: 5,
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            Ver todos los Descuentos
          </Text>
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
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Handle />
            </View>
            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "grey",
                }}
              >
                Recibí dinero en el acto en tu cuenta de Mercado Pago
              </Text>
              <Text style={{ fontSize: 14, color: "#60C1F8" }}>
                Simular Préstamo Personal
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
          <Text
            style={{
              fontSize: 12,
              color: "#818181",
              textAlign: "center",
              padding: 10,
            }}
          >
            Recordá usar la seccion Amigos para fines personales y no
            comerciales
          </Text>
        </View>
      </View>
    </>
  );
};

export default SuccessSendScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0DB578",
    justifyContent: "center",
  },
});
