import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { LoggerInterface } from '../domain/logger.interface';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
    const mockLogger = mock<LoggerInterface>();
    let authController: AuthController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [{ provide: 'LoggerInterface', useValue: mockLogger }],
        }).compile();

        authController = app.get<AuthController>(AuthController);
    });

    describe('v1', () => {
        describe('Login', () => {
            it('should return "ok"', async () => {
                expect(await authController.login()).toBe('ok');
            });
        });
    });
});
