import axios, { AxiosInstance } from "axios";
import { create } from "zustand";

import { ShopDataResponse } from "@models/common/shop-data.model.ts";
import CommonApi from "@apis/common.api.ts";

type State = {
  authAxios: AxiosInstance;
  shop: ShopDataResponse | null;
  isAdmin: boolean;
};

type Action = {
  addInterceptorAxios: (token: string) => void;
  getShop: (shopDomain: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
};

const rootStore = create<State & Action>((set, get) => ({
  authAxios: axios.create({
    baseURL: import.meta.env.VITE_BACKEND_END_POINT,
    timeout: 30 * 3600
  }),
  shop: null,
  isAdmin: false,
  addInterceptorAxios: (jwt: string) => {
    const instance = get().authAxios;
    instance.interceptors.request.use((config: any) => {
      // add token to request headers
      config.headers.Authorization = `Bearer ${jwt}`;
      return config;
    });

    instance.interceptors.response.use(
      (response: any) => {
        return response;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
    set({ authAxios: instance });
  },

  getShop: async (domain: string) => {
    const response = await CommonApi.GetShop(domain);
    set({
      shop: response?.shop
    });
    if (response) get().addInterceptorAxios(response.token);
  },

  setIsAdmin: (isAdmin: boolean) => {
    set({ isAdmin: isAdmin });
  }
}));

export default rootStore;
