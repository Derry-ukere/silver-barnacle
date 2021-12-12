import { MenuDto } from "./Imenu";
type userRole = 'admin | seller'

export interface userDto {
  id: string;
  name: string;
  phone : string
  menu: MenuDto;
  role : userRole;
}
