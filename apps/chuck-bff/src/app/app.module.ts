import { Module } from '@nestjs/common';

import { ChukBffModule } from './chuk-bff/chuk-bff.module';

@Module({
  imports: [ChukBffModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
