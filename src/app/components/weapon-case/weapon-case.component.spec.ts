import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponCaseComponent } from './weapon-case.component';

describe('WeaponCaseComponent', () => {
  let component: WeaponCaseComponent;
  let fixture: ComponentFixture<WeaponCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
