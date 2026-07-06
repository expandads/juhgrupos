import Image from "next/image"
import { CountdownBar } from "@/components/countdown-bar"
import { LegalFooter } from "@/components/legal-footer"
import { ScarcityNotice } from "@/components/scarcity-notice"
import { SocialProof } from "@/components/social-proof"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      <CountdownBar />
      <div className="mx-auto w-full max-w-md px-4 py-6">
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
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
        <ScarcityNotice />
        <SocialProof />
        <LegalFooter />
      </div>
    </main>
  )
}
