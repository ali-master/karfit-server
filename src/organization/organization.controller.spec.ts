import { Test, TestingModule } from '@nestjs/testing'
import { OrganizationController } from './organization.controller'

describe('Organization Controller', () => {
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [OrganizationController],
    }).compile()
  })
  it('should be defined', () => {
    const controller: OrganizationController = module.get<
      OrganizationController
    >(OrganizationController)
    expect(controller).toBeDefined()
  })
})
