import { MessageSquare, ClipboardList, HeartPulse, UserCheck, Home } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "전화/카카오 상담",
    description: "보호자와 어르신의 상황을 먼저 여쭙습니다"
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "장기요양등급 확인/신청",
    description: "등급 확인과 신청 절차를 상세히 안내합니다"
  },
  {
    icon: HeartPulse,
    step: "03",
    title: "어르신 상태 확인",
    description: "생활환경과 건강 상태를 함께 살펴봅니다"
  },
  {
    icon: UserCheck,
    step: "04",
    title: "요양보호사 배정",
    description: "어르신 맞춤 요양보호사를 배정합니다"
  },
  {
    icon: Home,
    step: "05",
    title: "서비스 시작",
    description: "방문요양/목욕 서비스 시작 후 보호자와 소통합니다"
  }
]

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-primary/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            이용 절차
          </h2>
          <p className="text-muted-foreground text-lg">
            상담부터 서비스 시작까지 차분하고 이해하기 쉬운 흐름입니다.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border" />
          
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-5 text-center border border-border/50 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-sm font-bold relative z-10">
                    {item.step}
                  </div>
                  <item.icon className="h-6 w-6 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
