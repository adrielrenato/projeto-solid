import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    username?: string;

    @Column()
    email?: string;

    @Column()
    password?: string;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}