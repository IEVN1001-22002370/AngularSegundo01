import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTestComponent } from './vista-test.component';

describe('VistaTestComponent', () => {
  let component: VistaTestComponent;
  let fixture: ComponentFixture<VistaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
