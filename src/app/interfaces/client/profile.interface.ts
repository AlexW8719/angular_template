import {IAds} from './ads.interface';

export interface IProfile {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
  photoUrl?: string;
  description?: string;
  ads?: IAds[];
}
