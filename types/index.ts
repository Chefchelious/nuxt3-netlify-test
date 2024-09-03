import type { ObjectId } from 'mongodb';
import type { ApiInstance } from '~/plugins/axiosPlugin';

declare module '#app' {
  interface NuxtApp {
    $api: ApiInstance;
  }
}

export enum ProductStatus {
  Rejected = 'rejected',
  Active = 'active',
  Featured = 'featured',
  Hidden = 'hidden',
}

export enum Weekday {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
}


export interface IUser {
  username: string;
  password: string;
  avatar?: string;
}

export interface IUserApi extends IUser {
  _id: string;
}

export interface IAuthResponse {
  user: IUserApi;
  refreshToken: string;
  accessToken: string;
}

export interface IHeaderInfo {
  companyName: string;
}

export interface IProduct {
  title: string;
  price: string;
  views: number;
  createdAt: string;
  image: string;
  status: ProductStatus;
}

export interface IProductApi extends IProduct {
  _id: string;
}

export interface IAgentFeedback {
  rating: string;
  reviews: number; // в реале это будет массив с отзывом и ссылкой на пользователя
}

export interface IAgent {
  name: string;
  lastname: string;
  avatar: string;
  isVerified: boolean;
  agentFeedback?: ObjectId;
  description: string;
}

export interface IAgentApi {
  _id: string;
  name: string;
  lastname: string;
  avatar: string;
  isVerified: boolean;
  agentFeedback?: IAgentFeedback;
  description: string;
}

export interface IWorkDay {
  day: Weekday;
  open: string;
  close: string;
}

export interface ICompany {
  description: string;
  address: string;
  location: {
    latitude: string;
    longitude: string;
  };
  workSchedule: IWorkDay[];
}

export interface ICompanyApi extends ICompany {
  _id: string;
}

export interface ITokenSchema {
  refreshToken: string;
  user: ObjectId;
}
