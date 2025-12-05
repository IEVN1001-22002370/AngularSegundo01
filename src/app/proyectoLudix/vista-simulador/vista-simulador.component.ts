import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

@Component({
  selector: 'app-vista-simulador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-simulador.component.html',
  styleUrls: ['./vista-simulador.component.css']
})
export class VistaSimuladorComponent implements OnInit {
  currentQuestionIndex: number = 0;
  score: number = 0;
  gameFinished: boolean = false;
  selectedAnswer: number | null = null;
  isCorrect: boolean | null = null;
  showExplanation: boolean = false;

  questions: Question[] = [
    {
      question: "Elige la oración correcta:",
      options: [
        "She don't like pizza.",
        "She doesn't likes pizza.",
        "She doesn't like pizza.",
        "She not like pizza."
      ],
      correct: 2,
      explanation: "La forma correcta es 'She doesn't like pizza.' Para la tercera persona del singular (he/she/it), usamos 'does' + la forma base del verbo."
    },
    {
      question: "¿Cuál es el pasado de 'go'?",
      options: ["goed", "went", "goed", "goes"],
      correct: 1,
      explanation: "'Went' es el pasado irregular de 'go'. Ejemplo: 'Yesterday I went to school.' (Ayer fui a la escuela)"
    },
    {
      question: "Selecciona la traducción correcta para: 'Libro'",
      options: ["Book", "Door", "Window", "Pen"],
      correct: 0,
      explanation: "'Book' es la traducción correcta de 'Libro' en inglés."
    },
    {
      question: "Completa: If I ______ you, I would study more.",
      options: ["am", "was", "were", "be"],
      correct: 2,
      explanation: "En las oraciones condicionales de segundo tipo (situaciones irreales), usamos 'were' para todos los sujetos. 'If I were you...' es una expresión común."
    },
    {
      question: "¿Cuál palabra es diferente?",
      options: ["Apple", "Banana", "Carrot", "Orange"],
      correct: 2,
      explanation: "'Carrot' (zanahoria) es un vegetal, mientras que las otras son frutas."
    },
    {
      question: "Elige la preposición correcta: I'm good ______ math.",
      options: ["at", "in", "on", "with"],
      correct: 0,
      explanation: "Usamos 'at' para habilidades y destrezas. 'Good at something' es la expresión correcta."
    },
    {
      question: "¿Cuál es el opuesto de 'expensive'?",
      options: ["Cheap", "Big", "Beautiful", "Fast"],
      correct: 0,
      explanation: "'Cheap' significa bajo en precio, que es lo opuesto a 'expensive' (alto en precio)."
    },
    {
      question: "Selecciona el plural correcto: 'Child'",
      options: ["Childs", "Children", "Childes", "Childen"],
      correct: 1,
      explanation: "'Children' es la forma plural irregular de 'child'. Otros plurales irregulares incluyen: man → men, woman → women, tooth → teeth."
    },
    {
      question: "¿Cómo se dice 'gracias' en inglés?",
      options: ["Hello", "Thank you", "Please", "Sorry"],
      correct: 1,
      explanation: "'Thank you' es la forma correcta de decir 'gracias' en inglés."
    },
    {
      question: "Elige la forma correcta: There ______ many students in the class.",
      options: ["is", "am", "are", "be"],
      correct: 2,
      explanation: "Usamos 'are' con sujetos plurales. 'Students' es plural, por lo tanto: 'There are many students...'"
    },
    {
      question: "¿Cuál es el sinónimo de 'happy'?",
      options: ["Sad", "Angry", "Joyful", "Tired"],
      correct: 2,
      explanation: "'Joyful' significa alegre, que es similar a 'happy' (feliz)."
    },
    {
      question: "Completa: My brother ______ football every weekend.",
      options: ["play", "plays", "playing", "played"],
      correct: 1,
      explanation: "Para tercera persona singular en presente simple, añadimos 's' al verbo: 'My brother plays football...'"
    },
    {
      question: "¿Qué significa 'quickly'?",
      options: ["Lentamente", "Rápidamente", "Cuidadosamente", "Fácilmente"],
      correct: 1,
      explanation: "'Quickly' es el adverbio que significa 'rápidamente' o 'con rapidez'."
    },
    {
      question: "Elige la palabra correcta para completar: I have ______ apples in my bag.",
      options: ["any", "some", "much", "a"],
      correct: 1,
      explanation: "Usamos 'some' en oraciones afirmativas con sustantivos contables en plural: 'I have some apples...'"
    },
    {
      question: "¿Cuál es la forma negativa de 'can'?",
      options: ["cannot", "can'nt", "can not", "don't can"],
      correct: 0,
      explanation: "La forma negativa de 'can' es 'cannot' o la contracción 'can't'."
    }
  ];

  ngOnInit() {
    this.resetGame();
  }

  selectAnswer(index: number) {
    if (this.selectedAnswer !== null || this.gameFinished) return;

    this.selectedAnswer = index;
    this.isCorrect = index === this.questions[this.currentQuestionIndex].correct;

    if (this.isCorrect) {
      this.score += 100;
    }

    setTimeout(() => {
      this.showExplanation = true;
    }, 1000);
  }

  nextQuestion() {
    this.showExplanation = false;
    this.selectedAnswer = null;
    this.isCorrect = null;

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.finishGame();
    }
  }

  finishGame() {
    this.gameFinished = true;

    const percentage = (this.score / (this.questions.length * 100)) * 100;
    let level = '';

    if (percentage >= 90) level = "🌟 ¡Excelente! Nivel Avanzado";
    else if (percentage >= 70) level = "👍 ¡Muy bien! Nivel Intermedio";
    else if (percentage >= 50) level = "✅ ¡Buen trabajo! Nivel Básico";
    else level = "💪 ¡Sigue practicando! Nivel Principiante";

    console.log(`Juego terminado! Puntuación: ${this.score}, Nivel: ${level}`);
  }

  resetGame() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.gameFinished = false;
    this.selectedAnswer = null;
    this.isCorrect = null;
    this.showExplanation = false;

    this.shuffleQuestions();
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  getCurrentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  getProgress(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  getScorePercentage(): number {
    return Math.round((this.score / (this.questions.length * 100)) * 100);
  }

  shareResults() {
    const message = `¡Acabo de completar el Mini Test de Inglés en Ludix! Obtuve ${this.score} puntos (${this.getScorePercentage()}% de aciertos). ¡Aprende inglés de forma divertida!`;

    if (navigator.share) {
      navigator.share({
        title: 'Mis resultados del Mini Test de Inglés',
        text: message,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(message);
      alert('¡Resultados copiados al portapapeles! Compártelos con tus amigos.');
    }
  }
}