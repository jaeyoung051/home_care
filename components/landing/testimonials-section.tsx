import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "보호자 A님",
    relationship: "어머니 케어",
    content: "어머니가 거동이 불편하셔서 목욕이 항상 걱정이었는데, 침상형 방문목욕 덕분에 정말 편해지셨어요. 직원분들도 너무 친절하시고요."
  },
  {
    name: "보호자 B님",
    relationship: "아버지 케어",
    content: "장기요양등급 상담부터 서비스 이용까지 친절하게 안내해주셔서 복잡한 과정 없이 쉽게 진행할 수 있었습니다."
  },
  {
    name: "보호자 C님",
    relationship: "시어머니 케어",
    content: "요양보호사 선생님께서 정말 성심성의껏 돌봐주세요. 일하면서도 안심이 됩니다. 항상 감사드립니다."
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
            보호자 후기
          </h2>
          <p className="text-muted-foreground text-lg">
            실제 서비스를 이용하신 보호자분들의 이야기입니다
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-border/50 hover:border-accent/30 transition-colors">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-accent/50 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed text-pretty">
                  {testimonial.content}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.relationship}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
