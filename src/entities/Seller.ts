import { MenuDto } from "src/interfaces/Imenu";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne,JoinColumn } from "typeorm";
import {SellerDto} from '../interfaces/Iseller'
import {Menu} from './Menu'

@Entity({name: 'seller'})
export class Seller implements SellerDto {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name : string;    


    @Column()
    phone: string;

    @OneToOne( () => Menu)
    @JoinColumn()
    menu: MenuDto;

}