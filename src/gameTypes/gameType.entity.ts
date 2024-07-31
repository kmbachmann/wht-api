import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'wht_ref', name: 'game_types'})
export class GameTypes {
    @PrimaryGeneratedColumn()
    game_type_id: number;

    @Column({ type: 'varchar'})
    name: string;
}