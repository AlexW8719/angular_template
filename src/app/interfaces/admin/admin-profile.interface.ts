export interface IAdminProfile {
  id: number;
  name: string;
  email: string;
  password: string;
  permissions: { [key: string]: boolean };
}
