import logger from "@shared/Logger";
import { MenuDto } from "src/interfaces/Imenu";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne,JoinColumn,BaseEntity } from "typeorm";
import {SellerDto} from '../interfaces/Iseller'
import {Menu} from './Menu'

@Entity({name: 'seller'})
export class Seller extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name : string;    

    @Column()
    email : string;   
    
    @Column()
    password : string;  


    @Column()
    phone: string;

    @OneToOne( () => Menu)
    @JoinColumn()
    menu: MenuDto;

    @Column({ name: "created_at" })
    createdAt?: Date;

    //Find a user by id

    static async  findSellerByPhone(number:string | number) {
        try {
            const seller = await this.createQueryBuilder('seller')
            .where('seller.phone = :phone', {number})
            .getOne()

            if(!seller){
                throw {
                    message: 'seller not found'
                }
            }
            return seller;
        } catch (error) {
            logger.err('(typeorm) unable to find user')
          throw {
              message : 'unable to find user'
          }
        }
    }

}