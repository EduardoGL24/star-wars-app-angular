import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipFormComponent } from './starship-form.component';

describe('StarshipFormComponent', () => {
  let component: StarshipFormComponent;
  let fixture: ComponentFixture<StarshipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
