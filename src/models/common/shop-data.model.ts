export interface ShopDataResponse {
  id: number;
  domain: string;
  currency?: string;
  planName?: string;
  timeZone?: string;
  stepOnboarding?: number;
  isOnBoard?: boolean;
  planNumber?: number;
  isEnableAppEmbed?: boolean;
  currencyMoney?: string;
  planType?: number;
  shopName?: string;
  status: number;
}

export interface ShopInfoDto {
  shop?: ShopDataResponse;
  timeZoneOffset: number;
  token: string;
}
