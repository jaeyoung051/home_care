"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PHONE_NUMBER_MOBILE, KAKAO_LINK, NAVER_MAP_LINK } from "@/lib/constants"

export function ContactSection() {
  const [showPhoneBanner, setShowPhoneBanner] = useState(false)

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            상담 안내 및 연락 방법
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-6">
            등급신청이 처음이라면 전화 또는 카카오톡으로 문의해주세요.
            <br />
            어르신의 현재 상황을 듣고 필요한 절차를 안내해드립니다.
            <br />
            상담 과정에서 필요한 개인정보는 상담 및 서비스 안내 목적에 한해 확인합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button
              type="button"
              size="lg"
              className="gap-2 text-base h-14 px-8 bg-primary hover:bg-primary/90"
              onClick={() => setShowPhoneBanner(true)}
            >
              전화 상담하기
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base h-14 px-8 border-2 border-primary text-primary hover:bg-primary/5"
              asChild
            >
              <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
                카카오톡 상담
              </a>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <a href={NAVER_MAP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary underline">
              네이버지도에서 위치 보기
            </a>
          </div>
        </div>

        {showPhoneBanner && (
          <div className="fixed left-1/2 top-4 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-2xl border border-border bg-white p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">전화 상담</p>

                <a href={`tel:${PHONE_NUMBER_MOBILE}`} className="mt-1 block text-2xl font-bold text-primary">
                  {PHONE_NUMBER_MOBILE}
                </a>

                <p className="mt-2 text-sm text-muted-foreground">운영시간: 평일 09:00 - 18:00</p>

                <p className="mt-1 text-xs text-muted-foreground">모바일에서는 번호를 누르면 바로 전화 연결됩니다.</p>
              </div>

              <button
                type="button"
                onClick={() => setShowPhoneBanner(false)}
                className="rounded-full p-1 text-muted-foreground transition hover:bg-secondary"
                aria-label="전화 상담 안내 닫기"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 flex gap-2">
              <Button className="flex-1 gap-2 bg-primary hover:bg-primary/90" asChild>
                <a href={`tel:${PHONE_NUMBER_MOBILE}`}>바로 전화하기</a>
              </Button>

              <Button type="button" variant="outline" className="flex-1" onClick={() => setShowPhoneBanner(false)}>
                닫기
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
