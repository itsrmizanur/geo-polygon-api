import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('polygons')
export class Polygon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Polygon',
    srid: 4326,
  })
  area: string;
}
