import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
<<<<<<< HEAD
  styleUrls: ['./vista-test.component.css'],
=======
  styleUrls: ['./vista-test.component.css']
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
})
export class VistaTestComponent {
  level: string | null = null;
  testFinished: boolean = false;
  score: number = 0;
  totalQuestions: number = 0;
  Math = Math;
  showExplanations: boolean = false;

  questions: Question[] = [
    {
<<<<<<< HEAD
      text: '1. Elige la opción correcta: Ella ____ a la escuela todos los días.',
      options: ['go', 'goes', 'going'],
      correct: 'goes',
      explanation:
        "Para la tercera persona del singular (he/she/it) en presente simple, añadimos 's' o 'es' al verbo. 'Go' se convierte en 'goes'.",
    },
    {
      text: "2. ¿Cuál es el pasado de 'run'?",
      options: ['runned', 'ran', 'running'],
      correct: 'ran',
      explanation:
        "'Run' es un verbo irregular. Su pasado simple es 'ran' y su participio pasado es 'run'. Ejemplo: Yesterday I ran 5 kilometers.",
    },
    {
      text: '3. Selecciona la oración correcta:',
      options: [
        "He don't like pizza.",
        "He doesn't likes pizza.",
        "He doesn't like pizza.",
      ],
      correct: "He doesn't like pizza.",
      explanation:
        "En negativo para tercera persona del singular usamos 'does not' (doesn't) + verbo en forma base. La forma correcta es: He doesn't like pizza.",
    },
    {
      text: "4. ¿Qué palabra significa lo opuesto a 'happy'?",
      options: ['Sad', 'Joyful', 'Excited'],
      correct: 'Sad',
      explanation:
        "'Happy' significa feliz y su opuesto es 'sad' (triste). 'Joyful' es alegre y 'excited' es emocionado.",
    },
    {
      text: '5. Completa: If I had money, I ____ a new car.',
      options: ['will buy', 'would buy', 'bought'],
      correct: 'would buy',
      explanation:
        'Esta es una oración condicional de segundo tipo (situación hipotética). La estructura es: If + pasado simple, would + verbo base.',
    },
    {
      text: "6. ¿Cuál es el plural de 'child'?",
      options: ['Childs', 'Childrens', 'Children'],
      correct: 'Children',
      explanation:
        "'Child' tiene un plural irregular: 'children'. Otros plurales irregulares: man → men, woman → women, tooth → teeth.",
    },
    {
      text: "7. Elige la preposición correcta: I'm interested ____ learning English.",
      options: ['in', 'on', 'at'],
      correct: 'in',
      explanation:
        "Usamos 'interested in' para hablar sobre cosas que nos interesan. La preposición correcta es 'in'.",
    },
    {
      text: "8. ¿Cómo se dice 'gracias' en inglés?",
      options: ['Hello', 'Thank you', 'Please', 'Sorry'],
      correct: 'Thank you',
      explanation:
        "'Thank you' es la forma estándar de decir gracias en inglés. También se puede usar 'Thanks' de manera informal.",
    },
    {
      text: "9. Selecciona la traducción correcta: 'Casa'",
      options: ['House', 'Car', 'Book', 'Table'],
      correct: 'House',
      explanation:
        "'House' es la traducción correcta de 'casa'. 'Home' también puede usarse pero se refiere más al hogar que al edificio.",
    },
    {
      text: '10. Completa: They _____ watching TV right now.',
      options: ['is', 'am', 'are'],
      correct: 'are',
      explanation:
        "'They' es pronombre plural, por lo tanto usamos 'are' con el presente continuo. La estructura es: sujeto + am/is/are + verbo-ing.",
    },
=======
      text: "1. Elige la opción correcta: Ella ____ a la escuela todos los días.",
      options: ["go", "goes", "going"],
      correct: "goes",
      explanation: "Para la tercera persona del singular (he/she/it) en presente simple, añadimos 's' o 'es' al verbo. 'Go' se convierte en 'goes'."
    },
    {
      text: "2. ¿Cuál es el pasado de 'run'?",
      options: ["runned", "ran", "running"],
      correct: "ran",
      explanation: "'Run' es un verbo irregular. Su pasado simple es 'ran' y su participio pasado es 'run'. Ejemplo: Yesterday I ran 5 kilometers."
    },
    {
      text: "3. Selecciona la oración correcta:",
      options: [
        "He don't like pizza.",
        "He doesn't likes pizza.",
        "He doesn't like pizza."
      ],
      correct: "He doesn't like pizza.",
      explanation: "En negativo para tercera persona del singular usamos 'does not' (doesn't) + verbo en forma base. La forma correcta es: He doesn't like pizza."
    },
    {
      text: "4. ¿Qué palabra significa lo opuesto a 'happy'?",
      options: ["Sad", "Joyful", "Excited"],
      correct: "Sad",
      explanation: "'Happy' significa feliz y su opuesto es 'sad' (triste). 'Joyful' es alegre y 'excited' es emocionado."
    },
    {
      text: "5. Completa: If I had money, I ____ a new car.",
      options: ["will buy", "would buy", "bought"],
      correct: "would buy",
      explanation: "Esta es una oración condicional de segundo tipo (situación hipotética). La estructura es: If + pasado simple, would + verbo base."
    },
    {
      text: "6. ¿Cuál es el plural de 'child'?",
      options: ["Childs", "Childrens", "Children"],
      correct: "Children",
      explanation: "'Child' tiene un plural irregular: 'children'. Otros plurales irregulares: man → men, woman → women, tooth → teeth."
    },
    {
      text: "7. Elige la preposición correcta: I'm interested ____ learning English.",
      options: ["in", "on", "at"],
      correct: "in",
      explanation: "Usamos 'interested in' para hablar sobre cosas que nos interesan. La preposición correcta es 'in'."
    },
    {
      text: "8. ¿Cómo se dice 'gracias' en inglés?",
      options: ["Hello", "Thank you", "Please", "Sorry"],
      correct: "Thank you",
      explanation: "'Thank you' es la forma estándar de decir gracias en inglés. También se puede usar 'Thanks' de manera informal."
    },
    {
      text: "9. Selecciona la traducción correcta: 'Casa'",
      options: ["House", "Car", "Book", "Table"],
      correct: "House",
      explanation: "'House' es la traducción correcta de 'casa'. 'Home' también puede usarse pero se refiere más al hogar que al edificio."
    },
    {
      text: "10. Completa: They _____ watching TV right now.",
      options: ["is", "am", "are"],
      correct: "are",
      explanation: "'They' es pronombre plural, por lo tanto usamos 'are' con el presente continuo. La estructura es: sujeto + am/is/are + verbo-ing."
    }
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  ];

  constructor() {
    this.totalQuestions = this.questions.length;
  }

<<<<<<< HEAD
  allQuestionsAnswered(): boolean {
    return this.questions.every((q) => q.selected && q.selected.trim() !== '');
  }

  getAnsweredCount(): number {
    return this.questions.filter((q) => q.selected && q.selected.trim() !== '')
      .length;
  }

=======
  
  allQuestionsAnswered(): boolean {
    return this.questions.every(q => q.selected && q.selected.trim() !== '');
  }


  getAnsweredCount(): number {
    return this.questions.filter(q => q.selected && q.selected.trim() !== '').length;
  }

  
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  getProgress(): number {
    return (this.getAnsweredCount() / this.totalQuestions) * 100;
  }

  submitTest() {
    this.score = 0;
<<<<<<< HEAD

    this.questions.forEach((q) => {
=======
    

    this.questions.forEach(q => {
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
      if (q.selected === q.correct) this.score++;
    });

    const percentage = (this.score / this.totalQuestions) * 100;
<<<<<<< HEAD

    if (percentage >= 90) {
      this.level = 'Avanzado';
    } else if (percentage >= 70) {
      this.level = 'Intermedio-Alto';
    } else if (percentage >= 50) {
      this.level = 'Intermedio';
    } else if (percentage >= 30) {
      this.level = 'Básico';
    } else {
      this.level = 'Principiante';
=======
    
  
    if (percentage >= 90) {
      this.level = "Avanzado";
    } else if (percentage >= 70) {
      this.level = "Intermedio-Alto";
    } else if (percentage >= 50) {
      this.level = "Intermedio";
    } else if (percentage >= 30) {
      this.level = "Básico";
    } else {
      this.level = "Principiante";
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
    }

    this.testFinished = true;
  }

<<<<<<< HEAD
  getScoreColor(): string {
    const percentage = (this.score / this.totalQuestions) * 100;

    if (percentage >= 90) return '#10B981';
    if (percentage >= 70) return '#3B82F6';
    if (percentage >= 50) return '#F59E0B';
    if (percentage >= 30) return '#EC4899';
    return '#EF4444';
  }

  getRecommendation(): string {
    switch (this.level) {
=======
 
  getScoreColor(): string {
    const percentage = (this.score / this.totalQuestions) * 100;
    
    if (percentage >= 90) return "#10B981"; 
    if (percentage >= 70) return "#3B82F6"; 
    if (percentage >= 50) return "#F59E0B"; 
    if (percentage >= 30) return "#EC4899"; 
    return "#EF4444"; 
  }

  
  getRecommendation(): string {
    switch(this.level) {
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
      case 'Avanzado':
        return '<strong>¡Excelente!</strong> Tienes un dominio sólido del inglés. Te recomendamos práctica de conversación avanzada y vocabulario especializado.';
      case 'Intermedio-Alto':
        return '<strong>¡Muy bien!</strong> Vas por buen camino. Enfócate en estructuras gramaticales complejas y amplía tu vocabulario.';
      case 'Intermedio':
        return '<strong>¡Buen trabajo!</strong> Tienes una base sólida. Continúa practicando diariamente y trabaja en los tiempos verbales.';
      case 'Básico':
        return '<strong>¡Buen comienzo!</strong> Sigue construyendo tu vocabulario y practicando estructuras básicas regularmente.';
      default:
        return '<strong>¡Bienvenido al aprendizaje de inglés!</strong> Comienza con vocabulario básico y frases simples. La práctica constante es clave.';
    }
  }

<<<<<<< HEAD
  getLevelDescription(): string {
    switch (this.level) {
=======
  
  getLevelDescription(): string {
    switch(this.level) {
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
      case 'Avanzado':
        return 'Puedes comunicarte fluidamente en la mayoría de situaciones, entender textos complejos y expresar opiniones detalladas.';
      case 'Intermedio-Alto':
        return 'Te comunicas efectivamente en situaciones cotidianas y algunas profesionales, con buen vocabulario y gramática.';
      case 'Intermedio':
        return 'Puedes manejar situaciones simples del día a día, comprender textos básicos y mantener conversaciones simples.';
      case 'Básico':
        return 'Comprendes y usas expresiones cotidianas básicas, puedes presentarte y responder preguntas simples.';
      default:
        return 'Estás comenzando tu viaje en inglés. Puedes usar palabras aisladas y frases muy básicas.';
    }
  }

  restart() {
<<<<<<< HEAD
    this.questions.forEach((q) => (q.selected = ''));
=======
    this.questions.forEach(q => q.selected = "");
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
    this.testFinished = false;
    this.level = null;
    this.score = 0;
    this.showExplanations = false;
  }

  toggleExplanations() {
    this.showExplanations = !this.showExplanations;
  }

  shareResults() {
    const message = `¡Acabo de completar el test de nivel de inglés en Ludix! Mi nivel es: ${this.level} (${this.score}/${this.totalQuestions} correctas). ¡Ven y descubre tu nivel también!`;
<<<<<<< HEAD

=======
    
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
    if (navigator.share) {
      navigator.share({
        title: 'Mis resultados del test de inglés',
        text: message,
<<<<<<< HEAD
        url: window.location.href,
=======
        url: window.location.href
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
      });
    } else {
      navigator.clipboard.writeText(message);
      alert('¡Resultados copiados al portapapeles!');
    }
  }

<<<<<<< HEAD
  getLevelColor(): string {
    switch (this.level) {
      case 'Avanzado':
        return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800';
      case 'Intermedio-Alto':
        return 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800';
      case 'Intermedio':
        return 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800';
      case 'Básico':
        return 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800';
      default:
        return 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800';
    }
  }

  getLevelIcon(): string {
    switch (this.level) {
      case 'Avanzado':
        return '🚀';
      case 'Intermedio-Alto':
        return '⭐';
      case 'Intermedio':
        return '📚';
      case 'Básico':
        return '🌱';
      default:
        return '🎯';
    }
  }
}
=======
  
  getLevelColor(): string {
    switch(this.level) {
      case 'Avanzado': return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800';
      case 'Intermedio-Alto': return 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800';
      case 'Intermedio': return 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800';
      case 'Básico': return 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800';
      default: return 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800';
    }
  }

  
  getLevelIcon(): string {
    switch(this.level) {
      case 'Avanzado': return '🚀';
      case 'Intermedio-Alto': return '⭐';
      case 'Intermedio': return '📚';
      case 'Básico': return '🌱';
      default: return '🎯';
    }
  }
}
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
