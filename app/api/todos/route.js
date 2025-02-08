import { todos } from "./data";

export async function GET() {
  return Response.json(todos);
}

export async function POST(request) {
  const data = await request.json();

  const newTodo = {
    id: todos.length + 1,
    title: data.title,
    completed: false,
  };

  todos.push(newTodo);
  return Response.json(newTodo, { status: 201 });
}
