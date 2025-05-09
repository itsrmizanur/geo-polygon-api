import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('polygon')
export class Polygon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  area: string;
}
