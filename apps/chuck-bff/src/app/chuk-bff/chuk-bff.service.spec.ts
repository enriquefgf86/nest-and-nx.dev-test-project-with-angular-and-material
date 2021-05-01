import { Test, TestingModule } from '@nestjs/testing';
import { ChukBffService } from './chuk-bff.service';

describe('ChukBffService', () => {
  let service: ChukBffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChukBffService],
    }).compile();

    service = module.get<ChukBffService>(ChukBffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
