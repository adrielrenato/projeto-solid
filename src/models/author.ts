import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    name?: string;

    @Column()
    nationality?: string;

    @CreateDateColumn({type: 'text'})
    created_at?: Date;

    @UpdateDateColumn({type: 'text'})
    updated_at?: Date;
}