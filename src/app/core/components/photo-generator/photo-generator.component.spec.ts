import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGeneratorComponent } from './photo-generator.component';

describe('PhotoGeneratorComponent', () => {
  let component: PhotoGeneratorComponent;
  let fixture: ComponentFixture<PhotoGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
