"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, MapPin, Heart, X } from "lucide-react"
import { useState } from "react"
import { PHONE_NUMBER_MOBILE, KAKAO_LINK, PHONE_NUMBER_CENTER } from "@/lib/constants"

export function HeroSection() {
  const [showPhoneBanner, setShowPhoneBanner] = useState(false)

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-secondary/80 via-background to-secondary/30 px-4 py-16 md:py-24">
      {showPhoneBanner && (
        <div className="fixed left-1/2 top-4 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-2xl border border-border bg-white p-5 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div className="w-full">
              <p className="text-sm font-medium text-muted-foreground">
                전화 상담
              </p>

              <div className="mt-3 space-y-3">
                <a
                  href={`tel:${PHONE_NUMBER_CENTER}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3 transition hover:bg-secondary"
                >
                  <div>
                    <p className="text-xs text-muted-foreground">센터 전화</p>
                    <p className="text-xl font-bold text-primary">
                      {PHONE_NUMBER_CENTER}
                    </p>
                  </div>
                  <Phone className="h-5 w-5 text-primary" />
                </a>

                <a
                  href={`tel:${PHONE_NUMBER_MOBILE}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-primary/5 px-4 py-3 transition hover:bg-primary/10"
                >
                  <div>
                    <p className="text-xs text-muted-foreground">휴대폰 상담</p>
                    <p className="text-xl font-bold text-primary">
                      {PHONE_NUMBER_MOBILE}
                    </p>
                  </div>
                  <Phone className="h-5 w-5 text-primary" />
                </a>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                운영시간: 평일 09:00 - 18:00
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                모바일에서는 번호를 누르면 바로 전화 연결됩니다.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowPhoneBanner(false)}
              className="rounded-full p-1 text-muted-foreground transition hover:bg-secondary"
              aria-label="전화 상담 안내 닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button className="gap-2 bg-primary hover:bg-primary/90" asChild>
              <a href={`tel:${PHONE_NUMBER_CENTER}`}>
                <Phone className="h-4 w-4" />
                센터 전화
              </a>
            </Button>

            <Button className="gap-2" variant="outline" asChild>
              <a href={`tel:${PHONE_NUMBER_MOBILE}`}>
                <Phone className="h-4 w-4" />
                휴대폰 상담
              </a>
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            className="mt-2 w-full"
            onClick={() => setShowPhoneBanner(false)}
          >
            닫기
          </Button>
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" />
              <span>부모님 돌봄, 장기요양등급부터 방문요양까지</span>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="mb-3 block text-base font-medium text-primary">사상재가방문요양센터</span>
              부모님 돌봄, 장기요양등급 신청부터
              <br className="hidden md:block" />
              <span className="text-primary">
                방문요양까지 함께 도와드립니다.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              방문요양, 방문목욕, 장기요양등급 상담, 보호자 안심 관리까지 한 번에 안내해드립니다.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start pt-4">
              <Button
                type="button"
                size="lg"
                className="gap-2 text-base h-14 px-8 bg-primary hover:bg-primary/90"
                onClick={() => setShowPhoneBanner(true)}
              >
                <Phone className="h-5 w-5" />
                전화 상담하기
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base h-14 px-8 border-2 border-primary text-primary hover:bg-primary/5"
                asChild
              >
                <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  카카오톡 상담
                </a>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-base h-14 px-8 text-primary hover:bg-secondary/80"
                asChild
              >
                <a href="#contact">
                  <MapPin className="h-5 w-5" />
                  등급신청 문의
                </a>
              </Button>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="rounded-[2rem] border border-border/50 bg-white/95 p-8 shadow-[0_40px_120px_rgba(45,64,79,0.08)] backdrop-blur-sm">
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-3 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-emerald-700">
                    방문요양센터 신뢰 요소
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      엄마, 아빠를 위한 전문적인 집 돌봄
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      어르신의 불편을 깊이 이해하는 상담과 방문 케어를 제공합니다. 장기요양등급부터 실제 서비스 시작까지 한 번에 도와드립니다.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-secondary/60 p-5">
                    <p className="font-semibold text-foreground">
                      부모님 맞춤 케어
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      상담 후 어르신 상태에 딱 맞는 요양 계획을 제안합니다.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-secondary/60 p-5">
                    <p className="font-semibold text-foreground">
                      보호자 소통
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      서비스 진행 상황을 자세히 공유하여 안심을 드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}