import { Test, TestingModule } from '@nestjs/testing';
import { ChukBffController } from './chuk-bff.controller';

describe('ChukBffController', () => {
  let controller: ChukBffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChukBffController],
    }).compile();

    controller = module.get<ChukBffController>(ChukBffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
