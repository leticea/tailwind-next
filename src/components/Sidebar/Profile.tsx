import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/leticea.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-1 flex-col break-all">
        <span className="text-sm font-semibold text-zinc-700">
          Letícia Nascimento
        </span>
        <span className="text-sm text-zinc-500">leticia@leticia.com.br</span>
      </div>

      <button
        type="button"
        className="ml-auto p-2 hover:bg-zinc-100 rounded-md"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
