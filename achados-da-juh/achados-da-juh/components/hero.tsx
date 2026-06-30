import Image from "next/image"
import { Sparkles, Heart } from "lucide-react"
import { WhatsappButton } from "./whatsapp-button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-8 md:py-20">
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-1.5 text-sm font-semibold text-background">
            <Sparkles className="size-4 text-primary" />
            Grupo VIP no WhatsApp
          </span>

          <h1 className="mt-5 font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
            <span className="block text-foreground">Achados</span>
            <span className="block text-primary">da Juh</span>
          </h1>

          <p className="mt-4 text-lg font-bold text-foreground">
            Beleza, moda e autocuidado com{" "}
            <span className="text-primary">desconto.</span>
          </p>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Entre na comunidade dos <strong className="text-foreground">Achados da Juh</strong> e
            receba promoções exclusivas todos os dias — perfumes, skincare, maquiagem e os melhores
            achados antes de todo mundo.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <WhatsappButton size="lg">Entrar no grupo grátis</WhatsappButton>
          </div>

          <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Heart className="size-4 fill-primary text-primary" />
            +40.000 pessoas já recebem os achados
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl shadow-2xl shadow-primary/20 ring-1 ring-primary/10">
            <Image
              src="/banner-achados.png"
              alt="Banner Achados da Juh com produtos de beleza, moda e autocuidado"
              width={949}
              height={1688}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
