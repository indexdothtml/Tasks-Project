import axios, { AxiosError } from "axios";

import { type Task } from "../types/common";
import envConfig from "../../envConfig";

type SuccessResponse = {
  success: true;
  status: number;
  data: Task[];
};

type ErrorResponse = {
  success: false;
  status?: number;
  message: string;
};

type TaskService = SuccessResponse | ErrorResponse;

export async function getAllTasks(): Promise<TaskService> {
  try {
    const response = await axios.get<Task[]>(`${envConfig.apiBaseURL}/tasks`);

    return {
      success: true,
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return {
        success: false,
        status: axiosError.status,
        message: axiosError.message,
      };
    }

    return {
      success: false,
      message: "Unexpected Error!",
    };
  }
}
