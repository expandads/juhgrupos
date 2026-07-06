export function ScarcityNotice() {
  return (
    <div className="mt-4 rounded-xl border border-primary/25 bg-primary/5 px-4 py-3 text-center">
      <p className="text-sm font-bold text-primary">Últimas vagas gratuitas!</p>
      <p className="mt-1.5 text-sm font-bold leading-snug text-foreground">
        Em breve o grupo vai passar a ser <span className="underline">PAGO</span>.
      </p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        Não perca sua chance e entre já!
      </p>
    </div>
  )
}
