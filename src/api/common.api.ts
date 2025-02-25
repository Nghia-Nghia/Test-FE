import { ShopInfoDto } from "@models/common/shop-data.model";
import { ApiHandler } from "@utils/api-handler.ts";

export default class CommonApi {
  static async GetShop(domain: string) {
    const response = await ApiHandler<ShopInfoDto>({
      method: "GET",
      url: `/common/shop-info?domain=${domain}`
    });
    return response.result as ShopInfoDto;
  }
}
