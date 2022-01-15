import * as React from "react";
import { TouchableOpacity } from "react-native";
import {
  Container,
  Logo,
  Conteudo,
  Bemvindo,
  Recuperarsenha,
  Textcriarconta,
  Criarconta,
} from "../../styles/styles-login";

export interface LoginScreenProps {}

export function LoginScreen(props: LoginScreenProps) {
  return (
    <Container>
      <Conteudo>
        <Logo source={require("../../assets/image/logo.png")} />
        <Bemvindo>BEM VINDO</Bemvindo>
        <Recuperarsenha>Recuperar senha</Recuperarsenha>
        <Textcriarconta>Não tem conta?</Textcriarconta>
        <TouchableOpacity>
          <Criarconta>Crie uma nova conta agora</Criarconta>
        </TouchableOpacity>
      </Conteudo>
    </Container>
  );
}
