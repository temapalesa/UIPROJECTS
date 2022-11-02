import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightbottomcardComponent } from './rightbottomcard.component';

describe('RightbottomcardComponent', () => {
  let component: RightbottomcardComponent;
  let fixture: ComponentFixture<RightbottomcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightbottomcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightbottomcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
