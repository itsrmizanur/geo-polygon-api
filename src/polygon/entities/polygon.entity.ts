import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('polygon')
export class Polygon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column('simple-array', {
    nullable: true,
  })
  coordinates: string[];
}
