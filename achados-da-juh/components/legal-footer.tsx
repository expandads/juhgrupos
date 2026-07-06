export function LegalFooter() {
  return (
    <footer className="mt-8 space-y-4 border-t border-border pt-4 text-center">
      <p className="text-[11px] leading-relaxed text-muted-foreground/80">
        AVISO LEGAL: os depoimentos acima refletem experiências pessoais de
        participantes do grupo e não representam garantia de resultados
        iguais para todos. Promoções, preços e prazos divulgados são de
        responsabilidade exclusiva das lojas e marketplaces parceiros,
        podendo mudar ou se esgotar a qualquer momento. Ao entrar no grupo,
        você concorda com nossos Termos de Uso e Política de Privacidade.
      </p>
      <div className="flex items-center justify-center gap-3 pb-2 text-xs text-muted-foreground">
        <span>Termos de Uso</span>
        <span aria-hidden className="text-border">
          •
        </span>
        <span>Política de Privacidade</span>
      </div>
    </footer>
  )
}
