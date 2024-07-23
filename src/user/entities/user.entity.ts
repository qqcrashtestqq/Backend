import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  first_name: string;
  @Column
  user_name: string;
  @Column
  email: string;
  @Column
  password: string;
  @Column
  list: string;
}
