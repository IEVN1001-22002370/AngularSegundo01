/* import { ComponentFixture, TestBed } from '@angular/core/testing';

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

 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaTestComponent } from './vista-test.component';
import { FormsModule } from '@angular/forms';

describe('VistaTestComponent', () => {
  let component: VistaTestComponent;
  let fixture: ComponentFixture<VistaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaTestComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener preguntas cargadas', () => {
    expect(component.questions.length).toBeGreaterThan(0);
  });

  it('Debe calcular nivel Básico cuando todas están mal', () => {
    component.questions.forEach(q => q.selected = "incorrecto");

    component.submitTest();

    expect(component.level).toBe("Básico");
  });

  it('Debe calcular nivel Avanzado cuando todas están correctas', () => {
    component.questions.forEach(q => q.selected = q.correct);

    component.submitTest();

    expect(component.level).toBe("Avanzado");
  });

});
