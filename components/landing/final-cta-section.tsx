"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { KAKAO_LINK } from "@/lib/constants"

export function FinalCtaSection() {
  const [name, setName] = useState("")
  const [region, setRegion] = useState("")
  const [status, setStatus] = useState("")
  const [grade, setGrade] = useState("")
  const [consult, setConsult] = useState("")
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const text = `[방문요양 상담 문의]\n이름: ${name}\n거주 지역: ${region}\n어르신 상태: ${status}\n장기요양등급: ${grade}\n상담 내용: ${consult}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 4000)
    } catch (e) {
      alert("클립보드 복사에 실패했습니다. 브라우저 권한을 확인해주세요.")
    }
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-primary">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl mb-4 text-center">
          상담 전 정보 복사하기
        </h2>

        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed text-center">
          아래 정보를 복사하여 카카오톡 상담창에 붙여넣으면 상담이 더 원활합니다. (서버에 저장되지 않습니다)
        </p>

        <div className="bg-card text-card-foreground p-6 rounded-xl shadow-sm border-2 border-border/50">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm mb-1 block text-foreground">이름</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="홍길동" className="w-full rounded-lg border border-border/60 px-3 py-2 bg-background text-foreground" />
            </div>

            <div>
              <label className="text-sm mb-1 block text-foreground">거주 지역</label>
              <input value={region} onChange={(e) => setRegion(e.target.value)} placeholder="예: 부산 사상구, 주례동" className="w-full rounded-lg border border-border/60 px-3 py-2 bg-background text-foreground" />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm mb-1 block text-foreground">어르신 상태</label>
              <input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="예: 혼자 거동이 어려움, 식사 도움 필요, 병원 동행 필요" className="w-full rounded-lg border border-border/60 px-3 py-2 bg-background text-foreground" />
            </div>

            <div>
              <label className="text-sm mb-1 block text-foreground">장기요양등급 여부</label>
              <select value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full rounded-lg border border-border/60 px-3 py-2 bg-background text-foreground">
                <option value="">선택하세요</option>
                <option value="등급 있음">등급 있음</option>
                <option value="등급 없음">등급 없음</option>
                <option value="신청 중">신청 중</option>
                <option value="잘 모르겠음">잘 모르겠음</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-sm mb-1 block text-foreground">원하는 상담 내용</label>
              <input value={consult} onChange={(e) => setConsult(e.target.value)} placeholder="예: 방문요양 상담, 방문목욕, 등급신청, 복지용구, 방문간호 연계" className="w-full rounded-lg border border-border/60 px-3 py-2 bg-background text-foreground" />
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button onClick={handleCopy} className="flex-1 bg-primary hover:bg-primary/90">
              상담 내용 복사하기
            </Button>

            <Button asChild variant="outline" className="flex-1">
              <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
                카카오톡 상담 열기
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-3">
            입력한 내용은 사이트에 저장되지 않으며, 상담 문구 복사를 위해서만 사용됩니다. 정확한 주소 등 민감한 정보는 상담 과정에서 필요한 경우에만 전달해주세요.
          </p>

          {copied && (
            <p className="mt-3 text-sm text-emerald-700">상담 내용이 복사되었습니다. 카카오톡 상담창에 붙여넣어 주세요.</p>
          )}
        </div>
      </div>
    </section>
  )
}
