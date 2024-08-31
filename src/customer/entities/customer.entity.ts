import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    customer_id: number;

    @Column({ unique: true })
    customer_code: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
