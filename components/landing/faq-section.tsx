import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "등급이 없어도 상담 가능한가요?",
    answer: "네, 장기요양등급이 없더라도 상담부터 필요한 서비스를 함께 안내해드립니다. 첫 상담에서 어르신 상태에 맞는 돌봄 방법을 안내합니다."
  },
  {
    question: "비용은 얼마나 드나요?",
    answer: "서비스 종류와 어르신 상태에 따라 비용이 달라집니다. 전화 또는 카카오톡 상담 후 보다 정확한 안내를 도와드립니다."
  },
  {
    question: "가족이 대신 신청할 수 있나요?",
    answer: "네, 보호자나 가족이 대신 장기요양등급 신청과 서비스 상담을 요청하실 수 있습니다. 필요한 서류와 절차를 함께 안내해드립니다."
  },
  {
    question: "어떤 요양보호사님이 오시나요?",
    answer: "정식 자격을 갖춘 요양보호사가 방문합니다. 경험과 성별을 고려한 배정으로 어르신께 맞춤 케어를 제공합니다."
  },
  {
    question: "방문요양과 주야간보호센터는 어떻게 다른가요?",
    answer: "방문요양은 어르신 댁에서 돌봄을 받는 서비스이고, 주야간보호센터는 낮 시간대나 일정 기간 동안 센터에서 돌봄을 받는 방식입니다. 어르신 상태에 따라 가장 적합한 방법을 안내해드립니다."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-3">
            자주 묻는 질문
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            보호자분들이 가장 많이 궁금해하시는 내용을 정리했습니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item, index) => (
            <Card key={index} className="border-2 border-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-foreground">{item.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
