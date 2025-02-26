import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./author";

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column() // TypeORM assume 'varchar' automaticamente para strings
    name?: string;

    @Column({ type: "text" }) // Use "text" para descrições longas
    description?: string;

    @ManyToOne(() => Author, (author) => author.books, { eager: true })
    author?: Author
}
