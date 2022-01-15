import { MensagemLogin } from "../models/MensagemLogin";
import { api } from "./api";

export const UsuariosProviders = {
  Logar: async (email, senha) => {
    return api
      .post<MensagemLogin>("Usuario/ValidaUsuario", { email, senha })
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        return null;
      });
  },
};
