import { TestBed } from '@angular/core/testing';

import { ShelterContactsService } from './shelter-contacts.service';

describe('ShelterContactsService', () => {
  let service: ShelterContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelterContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
