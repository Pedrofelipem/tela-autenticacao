import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://processoreact.projetos.jrmendonca.com.br/",
});
