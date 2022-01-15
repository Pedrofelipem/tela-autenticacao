import * as React from "react";
import { View } from "react-native";
import { Inputemail, Inputsenha } from "../styles/styles-input";

export interface InputCampoProps {
  placeholder: string;
  tipoTeclado?: "email-address";
  onChangeText(texto: string): void;
  onBlur(): void;
}

export function InputCampo(props: InputCampoProps) {
  return (
    <View>
      <Inputemail
        placeholder={props.placeholder}
        placeholderTextColor="#696969"
        autoCorrect={false}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        keyboardType={props.tipoTeclado}
      />
    </View>
  );
}
export interface InputsenhaProps {
  placeholder: string;
  tipoTeclado?: "email-address";
  onChangeText(texto: string): void;
  onBlur(): void;
}

export function InputSenha(props: InputsenhaProps) {
  return (
    <View>
      <Inputsenha
        placeholder={props.placeholder}
        placeholderTextColor="#696969"
        autoCorrect={false}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        keyboardType={props.tipoTeclado}
      />
    </View>
  );
}
