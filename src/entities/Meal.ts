import { Entity, Column, PrimaryGeneratedColumn, OneToMany,JoinColumn } from "typeorm";
import {MealDto} from '../interfaces/Imeal'
import {Menu} from '@entities/Menu'
import { MenuDto } from "src/interfaces/Imenu";


@Entity({name : 'meal'})
export class Meal implements MealDto {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    price: string;

    @OneToMany( () => Menu,menu => menu.meal)
    menu: MenuDto[];

    @Column({ name: "created_at" })
    createdAt?: Date;
}