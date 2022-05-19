import { AxiosResponse } from "axios";

export type LoginApiResponse = AxiosResponse<{
  status: number;
  message: string;
  data: any;
}>;
