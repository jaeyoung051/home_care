import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Droplets, ClipboardList, MessageCircle, Link2 } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "방문요양",
    description: "어르신의 일상 생활과 안전을 위한 맞춤 돌봄",
    details: ["식사 및 이동 도움", "병원 동행 및 외출 지원", "기본 위생 관리", "대화와 정서 케어"]
  },
  {
    icon: Droplets,
    title: "방문목욕",
    description: "집에서 편안하게 받는 전문 방문목욕 서비스",
    details: ["차량 방문목욕", "침상형 목욕 지원", "남녀 맞춤 케어", "안전 장비 및 전문 인력"]
  },
  {
    icon: ClipboardList,
    title: "장기요양등급 신청 안내",
    description: "등급 신청 절차부터 서류 준비까지 함께 도와드립니다",
    details: ["등급 신청 방법 안내", "서류 준비 지원", "신청 후 진행 상담", "심사 준비 및 결과 확인"]
  },
  {
    icon: MessageCircle,
    title: "보호자 상담",
    description: "보호자 입장에서 걱정을 덜어드리는 상담 안내",
    details: ["돌봄 계획 상담", "어르신 상태에 맞는 서비스 선택", "보호자 문의에 대한 빠른 답변", "서비스 중 소통관리"]
  },
  {
    icon: Link2,
    title: "복지용구 안내",
    description: "어르신의 생활환경에 필요한 복지용구 이용을 안내합니다.",
    details: ["안전손잡이, 보행보조기, 침대 등의 복지용구 제공", "복지용구 신청 절차 안내", "복지용구 설치 및 사용 지원"]
  }
  
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            제공 서비스
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            어르신과 보호자 모두를 위한 방문요양 중심 통합 돌봄 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
