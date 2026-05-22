import { CheckCircle } from "lucide-react"

const needs = [
  "혼자 생활이 어려운 어르신",
  "식사, 청소, 이동, 병원 동행이 필요한 경우",
  "보호자가 멀리 거주하는 경우",
  "장기요양등급 신청이 처음이라 막막한 경우"
]

export function NeedsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            이런 분께 필요합니다
          </h2>
          <p className="text-muted-foreground text-lg">
            아래 상황 중 하나라도 해당된다면 부담 없이 상담하세요.
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
          <ul className="grid gap-4 md:gap-5">
            {needs.map((need, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">{need}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
