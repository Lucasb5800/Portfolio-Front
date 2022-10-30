import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesANDexperienceComponent } from './studies-andexperience.component';

describe('StudiesANDexperienceComponent', () => {
  let component: StudiesANDexperienceComponent;
  let fixture: ComponentFixture<StudiesANDexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesANDexperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesANDexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
