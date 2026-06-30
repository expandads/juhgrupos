import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Comprei meu perfume favorito pela metade do preço graças ao alerta da Juh. Recebi antes de esgotar!",
    author: "Rafaela M.",
    role: "membro VIP",
  },
  {
    quote:
      "Melhor grupo de achados do Brasil. Já economizei mais de R$ 600 em skincare e maquiagem.",
    author: "Júlia S.",
    role: "membro VIP",
  },
]

export function SocialProof() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="rounded-3xl bg-foreground p-8 text-center text-background md:p-12">
          <p className="font-heading text-5xl font-black text-primary sm:text-6xl">+40K</p>
          <p className="mt-2 text-lg font-semibold">membros na comunidade</p>
          <p className="mt-4 text-sm leading-relaxed text-background/80">
            Mais de 40.000 pessoas já recebem alertas exclusivos todos os dias. Quando rola um
            achado bom, todo mundo do grupo fica sabendo primeiro.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-base leading-relaxed text-card-foreground text-pretty">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-muted-foreground">
                — {t.author}, {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
