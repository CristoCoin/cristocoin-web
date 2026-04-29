export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-purple-500/20 py-2 sm:grid-cols-[140px_1fr] sm:items-start">
      <span className="text-zinc-400">{label}</span>
      <span className="break-all text-left font-bold text-white sm:text-right">
        {value}
      </span>
    </div>
  );
}