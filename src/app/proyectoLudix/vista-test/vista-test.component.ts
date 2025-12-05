import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Question {
  text: string;
  options: string[];
  correct: string;
  selected?: string;
  explanation?: string;
}

@Component({
  selector: 'app-vista-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vista-test.component.html',
  styleUrls: ['./vista-test.component.css']
})
export class VistaTestComponent {
  level: string | null = null;      // A1, A2, B1, B2
  testFinished: boolean = false;
  score: number = 0;
  totalQuestions: number = 0;
  Math = Math;
  showExplanations: boolean = false;

  // Cambia aquí el id del usuario según tu login
  userId: number = 1;

  constructor(private http: HttpClient) {
    this.totalQuestions = this.questions.length;
  }
  toggleExplanations() {
  this.showExplanations = !this.showExplanations;
}


  // -----------------------------
  //       PREGUNTAS
  // -----------------------------
  questions: Question[] = [
    {
      text: "1. Elige la opción correcta: Ella ____ a la escuela todos los días.",
      options: ["go", "goes", "going"],
      correct: "goes",
      explanation: "Para la tercera persona del singular (he/she/it) en presente simple, añadimos 's' o 'es' al verbo."
    },
    {
      text: "2. ¿Cuál es el pasado de 'run'?",
      options: ["runned", "ran", "running"],
      correct: "ran",
      explanation: "El pasado simple de 'run' es 'ran'."
    },
    {
      text: "3. Selecciona la oración correcta:",
      options: [
        "He don't like pizza.",
        "He doesn't likes pizza.",
        "He doesn't like pizza."
      ],
      correct: "He doesn't like pizza.",
      explanation: "En negativo para he/she/it usamos doesn't + verbo base."
    },
    {
      text: "4. ¿Qué palabra significa lo opuesto a 'happy'?",
      options: ["Sad", "Joyful", "Excited"],
      correct: "Sad",
      explanation: "Sad es el contrario de happy."
    },
    {
      text: "5. Completa: If I had money, I ____ a new car.",
      options: ["will buy", "would buy", "bought"],
      correct: "would buy",
      explanation: "Condicional tipo 2: If + pasado → would + verbo base."
    },
    {
      text: "6. ¿Cuál es el plural de 'child'?",
      options: ["Childs", "Childrens", "Children"],
      correct: "Children",
      explanation: "Plural irregular: child → children."
    },
    {
      text: "7. Elige la preposición correcta: I'm interested ____ learning English.",
      options: ["in", "on", "at"],
      correct: "in",
      explanation: "Interested in."
    },
    {
      text: "8. ¿Cómo se dice 'gracias' en inglés?",
      options: ["Hello", "Thank you", "Please", "Sorry"],
      correct: "Thank you",
      explanation: "'Thank you' es gracias."
    },
    {
      text: "9. Selecciona la traducción correcta: 'Casa'",
      options: ["House", "Car", "Book", "Table"],
      correct: "House",
      explanation: "House = casa."
    },
    {
      text: "10. Completa: They _____ watching TV right now.",
      options: ["is", "am", "are"],
      correct: "are",
      explanation: "They + are (present continuous)."
    }
  ];

  // -----------------------------
  //       PROGRESO
  // -----------------------------
  allQuestionsAnswered(): boolean {
    return this.questions.every(q => q.selected && q.selected.trim() !== '');
  }

  getAnsweredCount(): number {
    return this.questions.filter(q => q.selected && q.selected.trim() !== '').length;
  }

  getProgress(): number {
    return (this.getAnsweredCount() / this.totalQuestions) * 100;
  }

  // -----------------------------
  //       SUBMIT
  // -----------------------------
  submitTest() {
    this.score = 0;

    this.questions.forEach(q => {
      if (q.selected === q.correct) {
        this.score++;
      }
    });

    const pct = (this.score / this.totalQuestions) * 100;

    // ----- Niveles del Marco Europeo -----
    if (pct <= 20) this.level = "A1";
    else if (pct <= 40) this.level = "A2";
    else if (pct <= 60) this.level = "B1";
    else if (pct <= 80) this.level = "B2";
    else this.level = "B2+";

    this.testFinished = true;

    // Guardar en la BD
    this.saveResult();
  }

  // -----------------------------
  //     GUARDAR BD
  // -----------------------------
  saveResult() {
    const data = {
      user_id: this.userId,
      score: this.score,
      level: this.level
    };

    this.http.post('http://localhost:5000/save-level', data)
      .subscribe({
        next: () => console.log("Nivel guardado"),
        error: (err) => console.error("Error al guardar", err)
      });
  }

  // -----------------------------
  // ESTILOS (colores)
  // -----------------------------
  getLevelColor(): string {
    switch(this.level) {
      case 'A1': return 'bg-red-100 text-red-800';
      case 'A2': return 'bg-yellow-100 text-yellow-800';
      case 'B1': return 'bg-blue-100 text-blue-800';
      case 'B2': return 'bg-green-100 text-green-800';
      default: return 'bg-emerald-100 text-emerald-800';
    }
  }

  restart() {
    this.questions.forEach(q => q.selected = "");
    this.testFinished = false;
    this.level = null;
    this.score = 0;
    this.showExplanations = false;
  }
}
