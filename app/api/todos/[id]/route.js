import { todos } from "../data";

export async function GET(request, { params }) {
  const todo = todos.find((t) => t.id === parseInt(params.id));

  if (!todo) {
    return Response.json({ error: "Todo not found" }, { status: 404 });
  }

  return Response.json(todo);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const index = todos.findIndex((t) => t.id === parseInt(params.id));

  if (index === -1) {
    return Response.json({ error: "Todo not found" }, { status: 404 });
  }

  todos[index] = { ...todos[index], ...data };
  return Response.json(todos[index]);
}

export async function DELETE(request, { params }) {
  const index = todos.findIndex((t) => t.id === parseInt(params.id));

  if (index === -1) {
    return Response.json({ error: "Todo not found" }, { status: 404 });
  }

  todos.splice(index, 1);
  return new Response(null, { status: 204 });
}
