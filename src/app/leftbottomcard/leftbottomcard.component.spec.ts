import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbottomcardComponent } from './leftbottomcard.component';

describe('LeftbottomcardComponent', () => {
  let component: LeftbottomcardComponent;
  let fixture: ComponentFixture<LeftbottomcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftbottomcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftbottomcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
