import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column() // TypeORM assume 'varchar' automaticamente para strings
    name?: string;

    @Column({ type: "text" }) // Use "text" para descrições longas
    description?: string;
}
