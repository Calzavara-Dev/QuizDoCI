export interface Question {
  question: string;
  options: string[];
  answer: string;
  // imagem associada à questão (opcional)
  image?: string;
  // explicação/comentário do gabarito (opcional)
  explanation?: string;
  // tópico/capítulo da questão (opcional)
  topic?: string;
}