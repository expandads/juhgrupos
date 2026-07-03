import Image from "next/image"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
        <Image
          src="/banner-achados.webp"
          alt="Achados da Juh - Beleza, moda e autocuidado com desconto"
          width={951}
          height={1640}
          priority
          sizes="(min-width: 448px) 448px, 100vw"
          className="h-auto w-full"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/40 to-transparent p-5 pt-16">
          <WhatsappButton size="lg" className="w-full max-w-xs">
            Entrar no Grupo VIP
          </WhatsappButton>
        </div>
      </div>
    </main>
  )
}
