import React, { useEffect, useState } from "react";
import { fetchTodos } from "../api/mock";

type Todo = { id: number; title: string; completed: boolean };

export default function Home() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos().then((data) => {
      setTodos(data);
      setLoading(false);
    });
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      {loading && <p>Carregando...</p>}
      {!loading && todos && (
        <ul className="space-y-2">
          {todos.map((t) => (
            <li
              key={t.id}
              className="p-3 bg-white rounded shadow flex justify-between"
            >
              <span>{t.title}</span>
              <span className="text-sm text-gray-500">
                {t.completed ? "Completo" : "Pendente"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
