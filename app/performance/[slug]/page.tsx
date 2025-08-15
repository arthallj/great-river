"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ArrowLeft, Users, Star, Ticket } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"

export default function PerformanceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const performances = {
    "midsummer-nights-dream": {
      title: "한 여름 밤의 꿈",
      startDate: "2025년 8월 23일",
      endDate: "2025년 8월 24일",
      venue: "극장 봄",
      image: "/IMG_4269.JPG",
      description: "셰익스피어의 불멸의 걸작을 현대적 감각으로 재해석한 극단 큰강의 새로운 작품",
      fullDescription: `사랑과 질투, 혼란과 변신이 뒤엉킨 셰익스피어의 고전을 배우 극단의 무대 뒤를 배경으로 재해석했습니다. 무대와 현실이 뒤섞이는 순간, 연극 속 연극의 매혹이 펼쳐집니다.

아테네의 숲에서 벌어지는 요정들과 인간들의 사랑 이야기를 현대적 감각으로 풀어낸 작품입니다. 환상적인 무대 연출과 유쾌한 코미디로 관객들에게 즐거움과 웃음을 선사합니다.

현재 공연 중인 이 작품은 매회 매진을 기록하며 뜨거운 관심을 받고 있습니다.`,
      cast: ["김연극 (라이샌더)", "이무대 (허미아)", "박연기 (디미트리우스)", "최드라마 (퍽)"],
      director: "김예술",
      runtime: "2시간 15분 (인터미션 포함)",
      audience: "전체 관람가",
      ticketPrice: "일반 35,000원 / 학생 25,000원",
      isCurrentShow: true,
    },
    "those-below-above": {
      title: "아랫것들의 위",
      startDate: "2025년 3월 7일",
      endDate: "2025년 3월 9일",
      venue: "소극장 혜화당",
      image: "/IMG_4267.JPG",
      description: "쓰레기로 뒤덮인 세상 속, 공허함과 희망",
      fullDescription: `현대 사회의 계층 구조와 소외감을 날카롭게 그려낸 창작 연극입니다. 쓰레기로 뒤덮인 세상에서 살아가는 사람들의 이야기를 통해 현실의 모순과 희망을 동시에 보여줍니다.

극단 큰강의 독창적인 연출로 무거운 주제를 관객들이 쉽게 공감할 수 있도록 풀어냈습니다. 특히 무대 위 쓰레기 더미 속에서 피어나는 인간애의 모습이 깊은 감동을 주었습니다.

사회적 메시지와 예술성을 모두 갖춘 의미 있는 작품으로 평가받았습니다.`,
      cast: ["김연극 (민수)", "이무대 (영희)", "박연기 (철수)", "최드라마 (순이)"],
      director: "이연출",
      runtime: "1시간 50분",
      audience: "15세 이상 관람가",
      ticketPrice: "일반 25,000원 / 학생 15,000원",
      isCurrentShow: false,
    },
    "act-2-chasing-light": {
      title: "제2막 '빛'추다",
      startDate: "2024년 10월 19일",
      endDate: "2024년 10월 20일",
      venue: "단막극장",
      image: "/IMG_4270.JPG",
      description: "사랑과 오해를 현대적으로 풀어낸 유쾌한 '십이야'",
      fullDescription: `셰익스피어의 '십이야'를 현대적으로 재해석한 작품입니다. 사랑과 오해가 뒤엉킨 이야기를 유쾌함 속에 숨은 진심을 그려내며 관객들에게 웃음과 감동을 선사했습니다.

성별을 바꾼 주인공의 정체성 혼란과 사랑의 착각을 통해 현대 사회의 다양성과 포용에 대한 메시지를 담았습니다. 코미디 요소와 진지한 주제 의식이 절묘하게 조화를 이룬 작품입니다.

젊은 배우들의 에너지 넘치는 연기와 창의적인 무대 연출이 돋보였던 공연이었습니다.`,
      cast: ["박연기 (비올라)", "김연극 (오시노)", "이무대 (올리비아)", "최드라마 (세바스찬)"],
      director: "박무대",
      runtime: "2시간 10분 (인터미션 포함)",
      audience: "전체 관람가",
      ticketPrice: "일반 30,000원 / 학생 20,000원",
      isCurrentShow: false,
    },
    "back-then-we-were": {
      title: "그때, 우리는",
      startDate: "2024년 5월 18일",
      endDate: "2024년 5월 19일",
      venue: "단막극장",
      image: "/IMG_4271.JPG",
      description: "스물네 살 여름, 춘천에서 마주한 사랑과 이별의 기억",
      fullDescription: `스물네 살 여름, 춘천에서 마주한 사랑과 이별의 기억을 담은 감성적인 창작 연극입니다. 청춘의 아름다움과 아픔을 섬세하게 그려내며 관객들의 마음을 울렸습니다.

첫사랑의 설렘과 이별의 아픔, 그리고 시간이 흘러 다시 만난 두 사람의 이야기를 통해 사랑의 의미와 성장에 대해 이야기합니다. 춘천의 아름다운 풍경을 배경으로 한 서정적인 무대가 인상적이었습니다.

관객들의 청춘 시절을 떠올리게 하는 따뜻하고 애틋한 작품으로 많은 사랑을 받았습니다.`,
      cast: ["김연극 (준호)", "이무대 (수진)", "박연기 (민석)", "최드라마 (혜영)"],
      director: "김예술",
      runtime: "1시간 40분",
      audience: "전체 관람가",
      ticketPrice: "일반 28,000원 / 학생 18,000원",
      isCurrentShow: false,
    },
  }

  const performance = performances[slug as keyof typeof performances]

  if (!performance) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">공연을 찾을 수 없습니다</h1>
          <Button onClick={() => router.push("/")}>홈으로 돌아가기</Button>
        </div>
      </div>
    )
  }

  const relatedPerformances = Object.entries(performances)
    .filter(([key]) => key !== slug)
    .slice(0, 2)
    .map(([key, perf]) => ({ slug: key, ...perf }))

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                홈으로
              </Button>
              <div className="flex items-center space-x-2">
                <span className="font-manrope font-bold text-xl text-foreground">극단 큰강</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"
          style={{
            backgroundImage: `url('${performance.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            {performance.isCurrentShow ? "현재 공연" : "지난 공연"}
          </Badge>
          <h1 className="font-manrope text-4xl md:text-6xl font-bold mb-4">{performance.title}</h1>
          <p className="text-xl text-white/90">{performance.description}</p>
        </div>
      </section>

      {/* Performance Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-manrope text-2xl">공연 소개</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-gray max-w-none">
                      {performance.fullDescription.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-manrope text-2xl">출연진</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {performance.cast.map((actor, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                          <Users className="h-5 w-5 text-accent" />
                          <span className="text-muted-foreground">{actor}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-manrope">공연 정보</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">공연 기간</div>
                        <div className="text-sm text-muted-foreground">
                          {performance.startDate} - {performance.endDate}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">공연 장소</div>
                        <div className="text-sm text-muted-foreground">{performance.venue}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">공연 시간</div>
                        <div className="text-sm text-muted-foreground">{performance.runtime}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">관람 등급</div>
                        <div className="text-sm text-muted-foreground">{performance.audience}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">
                          {performance.isCurrentShow ? "티켓 가격" : "티켓 가격 (참고)"}
                        </div>
                        <div className="text-sm text-muted-foreground">{performance.ticketPrice}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {performance.isCurrentShow && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-manrope">예매하기</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">토 오후 4시 7시 / 일 오후 4시</p>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Ticket className="mr-2 h-4 w-4" />
                          티켓 예매하기
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle className="font-manrope">제작진</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium">연출: </span>
                        <span className="text-muted-foreground">{performance.director}</span>
                      </div>
                      <div>
                        <span className="font-medium">제작: </span>
                        <span className="text-muted-foreground">극단 큰강</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-manrope">다른 공연 보기</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {relatedPerformances.map((relatedPerf) => (
                        <div
                          key={relatedPerf.slug}
                          className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => router.push(`/performance/${relatedPerf.slug}`)}
                        >
                          <Image
                            src={relatedPerf.image || "/placeholder.svg"}
                            alt={relatedPerf.title}
                            width={50}
                            height={50}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-sm">{relatedPerf.title}</div>
                            <div className="text-xs text-muted-foreground">{relatedPerf.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
