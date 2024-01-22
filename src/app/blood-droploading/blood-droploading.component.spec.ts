import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDroploadingComponent } from './blood-droploading.component';

describe('BloodDroploadingComponent', () => {
  let component: BloodDroploadingComponent;
  let fixture: ComponentFixture<BloodDroploadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodDroploadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodDroploadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
