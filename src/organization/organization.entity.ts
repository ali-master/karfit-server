import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('organiztions')
export class OrganizationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text')
  name: string

  @Column('text')
  description: string

  @CreateDateColumn()
  created: Date

  @UpdateDateColumn()
  updated: Date
}
