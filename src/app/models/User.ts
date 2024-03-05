export interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  role: string;
}

export interface UserFull {
  id: number,
  email: string,
  role: string,
  token: string
}

export interface UserDTO {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  role: string;
}
