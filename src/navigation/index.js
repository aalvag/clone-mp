import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CodeScannerScreen from "../screens/CodeScannerScreen";
import InputScreen from "../screens/InputScreen";
import SuccessScreen from "../screens/SuccessScreen";
import SuccessSendScreen from "../screens/SuccessSendScreen";
import SuccessTranferScreen from "../screens/SuccessTransferScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Scanner"
          component={CodeScannerScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Input"
          component={InputScreen}
          options={{
            title: "Ingresar monto",
            headerStyle: {
              backgroundColor: "#008AD6",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SuccessSend"
          component={SuccessSendScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SuccessTransfer"
          component={SuccessTranferScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
