import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraffitiListComponent } from './graffiti-list.component';

describe('GraffitiListComponent', () => {
  let component: GraffitiListComponent;
  let fixture: ComponentFixture<GraffitiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraffitiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraffitiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
