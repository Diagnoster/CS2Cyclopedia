import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchesListComponent } from './patches-list.component';

describe('PatchesListComponent', () => {
  let component: PatchesListComponent;
  let fixture: ComponentFixture<PatchesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatchesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
