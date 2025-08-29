let tasks = [
  { id: 1, task: "Estudar Node.js", done: false },
  { id: 2, task: "Deploy na Vercel", done: true }
];

export default function handler(req, res) {
  const method = req.method;

  if (method === "GET") {
    res.status(200).json(tasks);
    return;
  }

  if (method === "POST") {
    try {
      const { task } = req.body;
      const newTask = { id: tasks.length + 1, task, done: false };
      tasks.push(newTask);
      res.status(201).json(newTask);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
    return;
  }

  res.status(405).json({ error: "Método não permitido" });
}
