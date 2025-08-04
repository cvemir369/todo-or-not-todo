interface TodoDeleteProps {
  todoId: number;
  onDelete: (id: number) => void;
}

export default function TodoDelete({ todoId, onDelete }: TodoDeleteProps) {
  function handleDelete() {
    onDelete(todoId);
  }

  return (
    <button onClick={handleDelete} className="hover:cursor-pointer text-sm">
      ❌
    </button>
  );
}
