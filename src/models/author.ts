import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Book } from "./book";

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

    @OneToMany(() => Book, (book) => book.author)
    books?: Book[]
}