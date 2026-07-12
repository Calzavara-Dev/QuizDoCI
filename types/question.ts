export interface Question {
  question: string;
  options: string[];
  answer: string;
  // tópico/fonte na apostila (opcional)
  topic?: string;
  // imagem associada à questão (opcional)
  image?: string;
  // explicação/comentário do gabarito (opcional)
  explanation?: string;
}