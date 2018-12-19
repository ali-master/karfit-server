import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { OrganizationEntity } from './organization.entity'
import { OrganizationDTO } from './organization.dto';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(OrganizationEntity)
    private organiztionRepo: Repository<OrganizationEntity>,
  ) {}

  async showAll() {
    return this.organiztionRepo.find()
  }

  async create(data: OrganizationDTO) {
    const org = this.organiztionRepo.create(data)
    await this.organiztionRepo.save(org)
    return org
  }

  async read(id: string) {
    return this.organiztionRepo.findOne({ where: { id } })
  }

  async update(id: string, data: Partial<OrganizationDTO>) {
    await this.organiztionRepo.update({id}, data)
    return await this.organiztionRepo.findOne({where: {id}})
  }

  async destroy(id: string) {
    await this.organiztionRepo.delete({id})
    return {deleted: true}
  }
}
