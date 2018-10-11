import { EmployeeDataModule } from './employee-data.module';

describe('EmployeeDataModule', () => {
  let employeeDataModule: EmployeeDataModule;

  beforeEach(() => {
    employeeDataModule = new EmployeeDataModule();
  });

  it('should create an instance', () => {
    expect(employeeDataModule).toBeTruthy();
  });
});
