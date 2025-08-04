interface TodoDeleteProps {
  todoId: number;
  onDelete: (id: number) => void;
}

export default function TodoDelete({ todoId, onDelete }: TodoDeleteProps) {
  function handleDelete() {
    onDelete(todoId);
  }

  return (
    <button onClick={handleDelete}
              title="Delete"
              className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
              onClick={(e) => e.stopPropagation()} className="hover:cursor-pointer text-sm">
      ❌
    </button>
  );
}
