import { MealDto } from "src/interfaces/Imeal";
import { MenuDto } from "src/interfaces/Imenu";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, BaseEntity } from "typeorm";
import {Meal} from './Meal'


@Entity({name : 'menu'})
export class  Menu implements MenuDto  {
    @PrimaryGeneratedColumn()
    id: string;

    @OneToMany( () => Meal, meal => meal.menu)
    meal: MealDto;
}