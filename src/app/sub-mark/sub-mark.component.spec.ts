import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMarkComponent } from './sub-mark.component';

describe('SubMarkComponent', () => {
  let component: SubMarkComponent;
  let fixture: ComponentFixture<SubMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubMarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
