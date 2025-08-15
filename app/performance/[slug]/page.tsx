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
    hamlet: {
      title: "햄릿",
      startDate: "2024년 12월 15일",
      endDate: "2025년 1월 31일",
      venue: "아르테 소극장 (서울 종로구)",
      image: "/hamlet-theater.png",
      description: "셰익스피어의 불멸의 걸작을 현대적 감각으로 재해석한 극단 아르테의 대표작",
      fullDescription: `복수와 광기, 사랑과 배신이 얽힌 덴마크 왕자의 이야기를 현대적 무대 연출과 함께 선보입니다. 인간 내면의 갈등을 깊이 있게 탐구한 작품입니다.

극단 아르테만의 독창적인 해석으로 고전의 무게감과 현대적 감각을 절묘하게 조화시켰습니다. 특히 "To be or not to be" 독백 장면에서의 혁신적인 연출과 무대 디자인은 관객들에게 깊은 인상을 남기고 있습니다.

현재 공연 중인 이 작품은 매회 매진을 기록하며 뜨거운 관심을 받고 있습니다.`,
      cast: ["김연극 (햄릿)", "이무대 (오필리아)", "박연기 (클로디우스)", "최드라마 (거트루드)"],
      director: "김예술",
      runtime: "2시간 50분 (인터미션 포함)",
      audience: "15세 이상 관람가",
      ticketPrice: "일반 40,000원 / 학생 30,000원",
      isCurrentShow: true,
    },
    "romeo-and-juliet": {
      title: "로미오와 줄리엣",
      startDate: "2024년 3월 15일",
      endDate: "2024년 4월 30일",
      venue: "아르테 소극장",
      image: "/romeo-and-juliet-romantic-scene.png",
      description: "영원한 사랑 이야기의 새로운 해석",
      fullDescription: `셰익스피어의 불멸의 사랑 이야기를 현대적 감각으로 재해석한 작품입니다. 베로나의 두 가문 사이의 갈등 속에서 피어난 순수한 사랑을 통해 화해와 용서의 메시지를 전달했습니다.

극단 아르테만의 독창적인 연출로 고전 작품에 새로운 생명을 불어넣었으며, 젊은 배우들의 열정적인 연기가 관객들의 마음을 사로잡았습니다. 특히 발코니 장면에서의 혁신적인 무대 연출은 많은 찬사를 받았습니다.`,
      cast: ["김연극 (로미오)", "이무대 (줄리엣)", "박연기 (머큐쇼)", "최드라마 (티볼트)"],
      director: "김예술",
      runtime: "2시간 30분 (인터미션 포함)",
      audience: "전체 관람가",
      ticketPrice: "일반 30,000원 / 학생 20,000원",
      isCurrentShow: false,
    },
    macbeth: {
      title: "맥베스",
      startDate: "2024년 5월 10일",
      endDate: "2024년 6월 25일",
      venue: "대학로 예술극장",
      image: "/macbeth-performance.png",
      description: "권력과 야망의 어두운 면을 그린 걸작",
      fullDescription: `스코틀랜드의 장군 맥베스가 왕위에 대한 야망으로 파멸에 이르는 과정을 그린 비극입니다. 권력욕과 죄책감, 그리고 운명에 대한 깊이 있는 탐구를 선보였습니다.

어둠과 광기, 그리고 초자연적 요소들이 어우러진 무대는 관객들에게 강렬한 인상을 남겼습니다. 특히 마녀들의 예언 장면과 맥베스 부인의 몽유병 장면은 압도적인 연기력으로 많은 호평을 받았습니다.`,
      cast: ["박연기 (맥베스)", "이무대 (맥베스 부인)", "김연극 (맥더프)", "최드라마 (뱅코)"],
      director: "이연출",
      runtime: "2시간 45분 (인터미션 포함)",
      audience: "15세 이상 관람가",
      ticketPrice: "일반 35,000원 / 학생 25,000원",
      isCurrentShow: false,
    },
    "midsummer-nights-dream": {
      title: "한여름 밤의 꿈",
      startDate: "2024년 7월 5일",
      endDate: "2024년 8월 20일",
      venue: "종로문화센터 대극장",
      image: "/midsummer-nights-dream-performance.png",
      description: "환상적이고 유쾌한 마법의 세계",
      fullDescription: `아테네의 숲에서 벌어지는 요정들과 인간들의 사랑 이야기입니다. 환상적인 무대 연출과 유쾌한 코미디로 관객들에게 즐거움과 웃음을 선사했습니다.

마법과 현실이 교차하는 환상적인 무대 위에서 펼쳐지는 사랑의 혼란과 화해의 이야기는 모든 연령대의 관객들에게 사랑받았습니다. 특히 요정 퍽의 장난스러운 연기와 아름다운 의상이 인상적이었습니다.`,
      cast: ["최드라마 (퍽)", "김연극 (라이샌더)", "이무대 (허미아)", "박연기 (디미트리우스)"],
      director: "박무대",
      runtime: "2시간 15분 (인터미션 포함)",
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
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">아</span>
                </div>
                <span className="font-manrope font-bold text-xl text-foreground">극단 아르테</span>
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
                        <p className="text-sm text-muted-foreground">화-일 오후 7:30 / 토-일 오후 2:30 추가</p>
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
                        <span className="text-muted-foreground">극단 아르테</span>
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
