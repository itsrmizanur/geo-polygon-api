import { Polygon } from 'typeorm';

export class CreatePolygonDto {
  id: number;
  type: string;
  // coordinates: any;
  coordinates?: number[][];
}
