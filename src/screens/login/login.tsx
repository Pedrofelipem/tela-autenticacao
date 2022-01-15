import * as React from "react";
import { StatusBar, TouchableOpacity, Text } from "react-native";
import {
  Container,
  Logo,
  Conteudo,
  BemVindo,
  RecuperarSenha,
  Errors,
  TextCriarConta,
  CriarConta,
  ContainerCriarConta,
} from "../../styles/styles-login";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputCampo, InputSenha } from "../../components/input";
import { ButtonAcessar, TextButton } from "../../styles/styles-button";

export interface LoginScreenProps {}

export function LoginScreen(props: LoginScreenProps) {
  const logar = async (dados) => {};

  return (
    <Container>
      <StatusBar backgroundColor="#DCDCDC" />
      <Formik
        initialValues={{
          email: "",
          senha: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required("Campo email obrigatório")
            .email("Email inválido")
            .max(30, "Máximo 30 caracteres"),
          senha: Yup.string()
            .required("Campo senha obrigatório")
            .min(6, "Mínimo 6 caracteres")
            .max(20, "Máximo 20 caracteres"),
        })}
        onSubmit={logar}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          isSubmitting,
          touched,
          handleBlur,
        }) => (
          <Conteudo>
            <Logo source={require("../../assets/image/logo.png")} />
            <BemVindo>BEM VINDO</BemVindo>
            <InputCampo
              placeholder="Email"
              tipoTeclado="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => handleBlur("email")}
            />
            <InputSenha
              placeholder="Senha"
              tipoTeclado="email-address"
              onChangeText={handleChange("senha")}
              onBlur={() => handleBlur("senha")}
            />
            {touched.email && <Errors>{errors.email}</Errors>}
            {touched.senha && <Errors>{errors.senha}</Errors>}
            <TouchableOpacity>
              <RecuperarSenha>Recuperar senha</RecuperarSenha>
            </TouchableOpacity>
            <ButtonAcessar onPress={() => handleSubmit()}>
              <TextButton>ACESSAR</TextButton>
            </ButtonAcessar>
            <ContainerCriarConta>
              <TextCriarConta>Não tem conta?</TextCriarConta>
              <TouchableOpacity>
                <CriarConta>Crie uma nova agora</CriarConta>
              </TouchableOpacity>
            </ContainerCriarConta>
          </Conteudo>
        )}
      </Formik>
    </Container>
  );
}
