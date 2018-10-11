import { PayDataModule } from './pay-data.module';

describe('PayDataModule', () => {
  let payDataModule: PayDataModule;

  beforeEach(() => {
    payDataModule = new PayDataModule();
  });

  it('should create an instance', () => {
    expect(payDataModule).toBeTruthy();
  });
});
