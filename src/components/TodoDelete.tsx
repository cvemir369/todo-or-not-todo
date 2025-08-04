interface TodoDeleteProps {
  todoId: number;
  onDelete: (id: number) => void;
}

export default function TodoDelete({ todoId, onDelete }: TodoDeleteProps) {
  function handleDelete() {
    onDelete(todoId);
  }

  return (
    <button title="Delete"
            className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hover:cursor-pointer text-sm"
            onClick={(e) => { handleDelete(); e.stopPropagation(); }} className="hover:cursor-pointer text-sm">
      ❌
    </button>
  );
}
