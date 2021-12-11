import { MenuDto } from "./Imenu";

export interface SellerDto {
  id: string;
  name: string;
  phone : string
  menu: MenuDto;
}
