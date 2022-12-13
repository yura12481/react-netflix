export interface FormModel {
  email: string;
  password: string;
  checked: boolean;
}

export interface YupValidation {
  email: string;
  password: string;
}

export interface ResponseApi {
  data: string;
  status: number;
  statusText: string;
}
