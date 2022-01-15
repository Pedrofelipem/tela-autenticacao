import * as React from "react";
import { StatusBar, TouchableOpacity, Text } from "react-native";
import {
  Container,
  Logo,
  Conteudo,
  Bemvindo,
  Recuperarsenha,
  Textcriarconta,
  Criarconta,
  Containercriarconta,
  ContainerForm,
} from "../../styles/styles-login";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputCampo, InputSenha } from "../../components/input";

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
            .required("Campo e-mail obrigatório")
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

            <Bemvindo>BEM VINDO</Bemvindo>
            <InputCampo
              placeholder="Email"
              tipoTeclado="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => handleBlur("email")}
            />
            {touched.email && <Text>{errors.email}</Text>}
            <InputSenha
              placeholder="Senha"
              tipoTeclado="email-address"
              onChangeText={handleChange("senha")}
              onBlur={() => handleBlur("senha")}
            />
            {touched.senha && <Text>{errors.senha}</Text>}

            <Recuperarsenha>Recuperar senha</Recuperarsenha>
            <Containercriarconta>
              <Textcriarconta>Não tem conta?</Textcriarconta>
              <TouchableOpacity>
                <Criarconta>Crie uma nova agora</Criarconta>
              </TouchableOpacity>
            </Containercriarconta>
          </Conteudo>
        )}
      </Formik>
    </Container>
  );
}
