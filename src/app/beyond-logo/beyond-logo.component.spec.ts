import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondLogoComponent } from './beyond-logo.component';

describe('BeyondLogoComponent', () => {
  let component: BeyondLogoComponent;
  let fixture: ComponentFixture<BeyondLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeyondLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeyondLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
