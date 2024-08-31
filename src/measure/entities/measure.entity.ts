import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Measure {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerCode: string;

  @Column()
  measureType: 'WATER' | 'GAS';

  @Column()
  measureValue: number;

  @Column()
  hasConfirmed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}