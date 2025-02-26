import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirCaseComponent } from './souvenir-case.component';

describe('SouvenirCaseComponent', () => {
  let component: SouvenirCaseComponent;
  let fixture: ComponentFixture<SouvenirCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SouvenirCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouvenirCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
