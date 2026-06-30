import { WhatsappButton } from "./whatsapp-button"

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden">
      <WhatsappButton className="w-full">Entrar no grupo VIP grátis</WhatsappButton>
    </div>
  )
}
