import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

// 避免在测试中加载 Prisma 生成的 client（Jest 无法解析其模块）
jest.mock('../../generated/prisma/client', () => ({
  Prisma: {
    PrismaClientKnownRequestError: class MockError extends Error {
      code = 'P2025';
    },
  },
}));
jest.mock('../prisma.service', () => ({
  PrismaService: jest.fn(),
}));

const { PrismaService } = jest.requireMock('../prisma.service');

const mockPrismaService = {
  user: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
