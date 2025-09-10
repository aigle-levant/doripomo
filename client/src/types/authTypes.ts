export interface LoginFormValues {
  email: string;
  password: string;
}

export interface UserFormValues {
  email: string;
  password: string;
}

// define auth types here
export type BackendUser = {
  id: string;
  email: string;
};

export type userValue = {
  email: string;
  password: string;
};

export type AuthUser = {
  uid: string;
  email: string;
  backendUser: BackendUser;
};
