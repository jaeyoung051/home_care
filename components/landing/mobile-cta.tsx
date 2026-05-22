"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import { PHONE_NUMBER_MOBILE, KAKAO_LINK } from "@/lib/constants"

export function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-card/95 backdrop-blur-md border-t border-border p-3 shadow-2xl">
        <div className="flex gap-2">
          <Button
            size="lg"
            className="flex-1 gap-2 text-sm h-12 bg-primary hover:bg-primary/90"
            asChild
          >
            <a href={`tel:${PHONE_NUMBER_MOBILE}`}>
              <Phone className="h-4 w-4" />
              전화 상담
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex-1 gap-2 text-sm h-12 border-2 border-primary text-primary"
            asChild
          >
            <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              카카오톡
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
