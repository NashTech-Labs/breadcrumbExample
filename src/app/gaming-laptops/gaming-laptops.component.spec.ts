import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GamingLaptopsComponent} from './gaming-laptops.component';

describe('GamingLaptopsComponent', () => {
  let component: GamingLaptopsComponent;
  let fixture: ComponentFixture<GamingLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamingLaptopsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GamingLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
