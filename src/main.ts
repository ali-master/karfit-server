import 'dotenv/config'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

const port = process.env.PORT || 4000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(port)
  Logger.log(`Sever is listening on port ${port}`, 'Bootstrap')
}
bootstrap()
