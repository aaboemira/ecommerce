/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StaticProductService } from './static-product.service';

describe('Service: StaticProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticProductService]
    });
  });

  it('should ...', inject([StaticProductService], (service: StaticProductService) => {
    expect(service).toBeTruthy();
  }));
});
