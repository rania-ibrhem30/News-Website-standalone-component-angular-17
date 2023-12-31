import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptComponent } from './egypt.component';

describe('EgyptComponent', () => {
  let component: EgyptComponent;
  let fixture: ComponentFixture<EgyptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgyptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EgyptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
