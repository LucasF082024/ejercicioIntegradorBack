import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  permiso: string;
}
