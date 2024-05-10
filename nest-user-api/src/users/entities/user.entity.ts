import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string

  @Column()
  name: string

  @Column()
  age: number

  @Column()
  password: string
}
