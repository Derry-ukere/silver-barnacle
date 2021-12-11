import { MenuDto } from "./Imenu";
type userRole = 'admin | seller'

export interface SellerDto {
  id: string;
  name: string;
  phone : string
  menu: MenuDto;
  role : userRole;
  findSeller : () => void
}
