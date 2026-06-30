import Image from "next/image"
import { WhatsappButton } from "./whatsapp-button"

const items = [
  {
    src: "/flatlay-perfumes.png",
    alt: "Perfumes e maquiagem em flatlay sobre cetim",
    label: "Perfumes & makeup",
  },
  {
    src: "/flatlay-skincare.png",
    alt: "Produtos de skincare CeraVe, Nivea e Natura em flatlay",
    label: "Skincare",
  },
  {
    src: "/flatlay-cabelos.png",
    alt: "Produtos para cabelo Elseve e Dove em flatlay",
    label: "Cabelos",
  },
  {
    src: "/flatlay-makeup.png",
    alt: "Maquiagem, perfumes e acessórios em flatlay",
    label: "Achados do dia",
  },
]

export function Showcase() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Toda semana achados novos
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Os achados que rolam no grupo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Uma amostra do que a Juh garimpa toda semana com desconto pra comunidade.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl shadow-md ring-1 ring-border"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={600}
                height={750}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
                <span className="font-heading text-sm font-bold text-background">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <WhatsappButton size="lg">Quero receber os achados</WhatsappButton>
        </div>
      </div>
    </section>
  )
}
