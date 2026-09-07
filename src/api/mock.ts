// Simula chamadas a uma API com atraso
type Todo = { id: number; title: string; completed: boolean };

const MOCK: Todo[] = [
  { id: 1, title: "Aprender TypeScript", completed: false },
  { id: 2, title: "Configurar Tailwind", completed: true },
  { id: 3, title: "Escrever testes", completed: false }
];

export function fetchTodos(): Promise<Todo[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK), 500);
  });
}
