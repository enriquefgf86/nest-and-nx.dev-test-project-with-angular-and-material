import { HttpModule, Module } from '@nestjs/common';
import { ChukBffController } from './chuk-bff.controller';
import { ChukBffService } from './chuk-bff.service';

@Module({
  imports: [HttpModule],
  controllers: [ChukBffController],
  providers: [ChukBffService],
})
export class ChukBffModule {}
