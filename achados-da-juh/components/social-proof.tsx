import Image from "next/image"

export function SocialProof() {
  return (
    <section className="mt-8 rounded-2xl bg-muted/60 p-4 sm:p-5">
      <h2 className="text-balance text-center text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
        APROVADO POR MAIS DE 35 MIL PESSOAS!
      </h2>
      <div className="mt-5 overflow-hidden rounded-xl">
        <Image
          src="/comentarios-grupo.webp"
          alt="Comentários de participantes elogiando o grupo e as promoções de beleza, moda e autocuidado"
          width={1102}
          height={1428}
          loading="lazy"
          sizes="(min-width: 448px) 448px, 100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  )
}
