import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'wht', name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ type: 'varchar', length: 30 })
    username: string;

    @Column({ type: 'varchar'})
    password: string;

    @Column({ type: 'varchar'})
    email: string;
}