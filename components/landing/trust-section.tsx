import { Shield, Eye, MessageCircle, Heart } from "lucide-react"

const trustItems = [
  {
    icon: Shield,
    title: "정식 기관 운영",
    description: "공식 등록된 장기요양기관으로 안정감 있는 돌봄을 제공합니다"
  },
  {
    icon: Eye,
    title: "정기적인 상태 확인",
    description: "어르신 상태를 꾸준히 점검하며 변화를 빠르게 파악합니다"
  },
  {
    icon: MessageCircle,
    title: "보호자 중심 소통",
    description: "서비스 내용과 변화 사항을 보호자에게 명확히 전달합니다"
  },
  {
    icon: Heart,
    title: "맞춤 돌봄 계획",
    description: "어르신 개인에 맞춘 돌봄 계획으로 부담을 줄입니다"
  }
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-accent/10">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border/50">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
              보호자 안심 케어
            </h2>
            <p className="text-primary text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              어르신의 안전과 보호자의 안심을 차분하게 지켜드리는 방문요양 서비스입니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
