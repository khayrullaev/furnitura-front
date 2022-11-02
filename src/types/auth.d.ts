import { AxiosResponse } from "axios";

export type AuthApiResponse = AxiosResponse<{
  status: number;
  message: string;
  data?: any;
}>;

export type UserObjectType = {
  email: string;
  name: string;
  password: string;
  passwordConfirm?: string;
};
