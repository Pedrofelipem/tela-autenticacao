import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #dcdcdc;
  height: 100%;
  width: 100%;
`;
export const Mensagem = styled.Text`
  color: white;
  text-align: center;
  padding: 15px;
`;
export const Conteudo = styled.View`
  align-items: center;
  top: 70px;
  position: relative;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 250px;
`;

export const BemVindo = styled.Text`
  font-size: 30px;
  color: #696969;
  padding: 25px;
`;

export const Errors = styled.Text`
  color: red;
  left: 80px;
`;

export const RecuperarSenha = styled.Text`
  padding: 5px;
  font-size: 17px;
  left: 93px;
  color: #696969;
`;

export const TextCriarConta = styled.Text`
  font-size: 17px;
  text-align: center;
  color: #696969;
`;

export const CriarConta = styled.Text`
  font-size: 17px;
  color: orange;
`;

export const ContainerCriarConta = styled.View`
  top: 190px;
`;
