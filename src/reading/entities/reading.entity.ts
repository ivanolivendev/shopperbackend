import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Reading {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  measureId: string; // Referência à medida

  @Column()
  confirmedValue: number;

  @Column()
  hasConfirmed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}