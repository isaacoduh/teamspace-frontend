import {
  CurrentUserResponseType,
  LoginResponseType,
  LoginType,
  registerType,
} from "../types/api.type";
import API from "./axios-client";

export const registerMutationFn = async (data: registerType) =>
  await API.post("/auth/register", data);

export const loginMutationFn = async (
  data: LoginType
): Promise<LoginResponseType> => {
  const response = await API.post("/auth/login", data);
  return response.data;
};

export const logoutMutation = async () => await API.post("/auth/logout");
export const getCurrentUserQueryFn =
  async (): Promise<CurrentUserResponseType> => {
    const response = await API.get(`/user/current`);
    return response.data;
  };
