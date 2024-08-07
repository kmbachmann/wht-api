import { Model } from 'src/models/model.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity({ schema: 'wht', name: 'projects'})
export class Project {
    @PrimaryGeneratedColumn()
    project_id: number;

    @Column({ type: 'varchar', length: 200 })
    project_name: string;

    @ManyToOne(type => Model)
    @JoinColumn({ name: 'model_id' })
    @Column({ type: 'integer' })
    model_id: number;

    @Column({ type: 'date', nullable: true })
    start_date: Date;

    @Column({ type: 'date', nullable: true })
    end_date: Date;

    @Column({ type: 'bytea', nullable: true })
    start_photo: Buffer;

    @Column({ type: 'bytea', nullable: true })
    end_photo: Buffer;

    @Column({ type: 'varchar', nullable: true })
    notes: string;

    @ManyToOne(type => User)
    @JoinColumn({ name: 'user_id' })
    @Column({ type: 'integer' })
    user_id: number;
}