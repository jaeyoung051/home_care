import { PHONE_NUMBER_CENTER, NAVER_MAP_LINK } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="py-10 px-4 bg-secondary border-t border-border mb-20 md:mb-0">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-6 text-center md:grid-cols-[1fr_1fr] md:text-left md:items-center">
          <div>
            <h3 className="font-bold text-foreground text-lg">사상재가방문요양센터</h3>
            <p className="text-muted-foreground text-sm mt-2">
              부산광역시 사상구 새벽시장로56번길 10 (감전동) · 대표전화 {PHONE_NUMBER_CENTER}
            </p>
          </div>
          <div className="text-muted-foreground text-sm space-y-1">
            <p>정식 장기요양기관</p>
            <p>보호자 중심 상담 · 방문요양 · 방문목욕</p>
            <p>
              <a href={NAVER_MAP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                네이버지도에서 위치 보기
              </a>
            </p>
          </div>
        </div>

        <p className="text-muted-foreground text-xs text-center pt-6 md:text-left">
          © 2025 사상재가방문요양센터. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
