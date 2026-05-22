import { Shield, MessageCircle, Heart, Users, CheckCircle } from "lucide-react"

const differentiators = [
  {
    icon: Shield,
    title: "정식 장기요양기관",
    description: "인증과 자격을 갖춘 기관으로 안심할 수 있습니다"
  },
  {
    icon: MessageCircle,
    title: "보호자 중심 소통",
    description: "서비스 과정과 결과를 투명하게 공유합니다"
  },
  {
    icon: Heart,
    title: "맞춤 돌봄 계획",
    description: "어르신 상태에 맞는 개인별 돌봄을 설계합니다"
  },
  {
    icon: Users,
    title: "요양보호사 관리",
    description: "전문 요양보호사 배정과 체계적 관리가 이루어집니다"
  },
  {
    icon: CheckCircle,
    title: "차분한 안내",
    description: "과장 없이 신뢰감 있는 상담을 제공합니다"
  }
]

export function DifferentiatorsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            신뢰 요소
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            보호자와 어르신 모두가 편안하게 느낄 수 있는 안정적인 케어 체계입니다.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-secondary/50 rounded-2xl p-6 text-center hover:bg-accent/10 transition-colors border border-border/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{item.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
