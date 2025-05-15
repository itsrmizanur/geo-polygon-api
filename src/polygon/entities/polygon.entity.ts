import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('polygon')
export class Polygon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  // @Column('simple-array', {
  //   nullable: true,
  // })
  // coordinates: number[];

  @Column({
    type: 'geography',
    spatialFeatureType: 'Polygon',
    srid: 4326,
    nullable: true,
  })
  coordinates: Polygon;
}
