import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common'

import { OrganizationService } from './organization.service'
import { OrganizationDTO } from './organization.dto'

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get()
  showAll() {
    return this.organizationService.showAll()
  }

  @Post()
  create(@Body() data: OrganizationDTO) {
    return this.organizationService.create(data)
  }

  @Get(':id')
  read(@Param('id') id: string) {
    return this.organizationService.read(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<OrganizationDTO>,
  ) {
    return this.organizationService.update(id, data)
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.organizationService.destroy(id)
  }
}
