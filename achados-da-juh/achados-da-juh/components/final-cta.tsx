import { WhatsappButton } from "./whatsapp-button"

export function FinalCta() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-primary-foreground text-balance sm:text-5xl">
          Não fique de fora dos próximos achados
        </h2>
        <p className="mt-5 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          Entre grátis agora e comece a receber as promoções de beleza, moda e autocuidado direto no
          seu WhatsApp.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsappButton size="lg">Entrar na comunidade VIP</WhatsappButton>
        </div>
        <p className="mt-4 text-xs text-primary-foreground/75">
          É grátis e você pode sair quando quiser.
        </p>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground py-8">
      <div className="mx-auto max-w-6xl px-5 text-center text-sm text-background/70">
        <p className="font-heading text-lg font-black uppercase">
          <span className="text-background">Achados</span>{" "}
          <span className="text-primary">da Juh</span>
        </p>
        <p className="mt-2 text-balance">
          © 2026 Achados da Juh · Beleza, moda e autocuidado com desconto · +40.000 membros
        </p>
      </div>
    </footer>
  )
}
