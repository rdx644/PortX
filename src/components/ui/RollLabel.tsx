export function RollLabel({ children }: { children: string }) {
  return (
    <span className="roll-label">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}
