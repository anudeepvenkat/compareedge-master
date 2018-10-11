import { MappingModule } from './mapping.module';

describe('MappingModule', () => {
  let mappingModule: MappingModule;

  beforeEach(() => {
    mappingModule = new MappingModule();
  });

  it('should create an instance', () => {
    expect(mappingModule).toBeTruthy();
  });
});
