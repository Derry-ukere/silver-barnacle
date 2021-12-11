import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { AdminDto} from '../interfaces/Iadmin';

@Entity({name : 'admin'})
export class Admin implements AdminDto {
    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    name: string;

    @Column()
    phone: string;
}