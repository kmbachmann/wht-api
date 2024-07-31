import { GameTypes } from 'src/gameTypes/gameType.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'wht_ref', name: 'models'})
export class Model {
    @PrimaryGeneratedColumn()
    model_id: number;

    @Column({ type: 'varchar'})
    model_name: string;

    @ManyToOne(type => GameTypes)
    @JoinColumn({name: 'game_type_id'})
    @Column({ type: 'integer'})
    game_type_id: number;


    @Column({ type: 'varchar'})
    faction: string;

    @Column({ type: 'integer'})
    unit_size_min: number;

    @Column({ type: 'integer'})
    unit_size_max: number;
}