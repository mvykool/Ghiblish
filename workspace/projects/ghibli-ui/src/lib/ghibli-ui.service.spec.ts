import { TestBed } from '@angular/core/testing';

import { GhibliUiService } from './ghibli-ui.service';

describe('GhibliUiService', () => {
  let service: GhibliUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhibliUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
