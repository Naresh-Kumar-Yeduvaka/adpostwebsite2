import { TestBed } from '@angular/core/testing';

import { KumarService } from './kumar.service';

describe('KumarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KumarService = TestBed.get(KumarService);
    expect(service).toBeTruthy();
  });
});
