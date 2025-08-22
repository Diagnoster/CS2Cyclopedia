import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceWearsComponent } from './price-wears.component';

describe('PriceWearsComponent', () => {
  let component: PriceWearsComponent;
  let fixture: ComponentFixture<PriceWearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceWearsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceWearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
