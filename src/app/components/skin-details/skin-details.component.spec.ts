import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinDetailsComponent } from './skin-details.component';

describe('SkinDetailsComponent', () => {
  let component: SkinDetailsComponent;
  let fixture: ComponentFixture<SkinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
