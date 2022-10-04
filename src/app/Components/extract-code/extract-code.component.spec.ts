import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractCodeComponent } from './extract-code.component';

describe('ExtractCodeComponent', () => {
  let component: ExtractCodeComponent;
  let fixture: ComponentFixture<ExtractCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
