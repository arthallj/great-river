import { performancesInfo } from "@/data/performance"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ArrowLeft, ArrowRight, Users, Star, Ticket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export function generateStaticParams() {
  return Object.keys(performancesInfo).map((slug) => ({ slug }));
}
export const dynamicParams = false;

export default async function PerformanceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const performance = performancesInfo[slug as keyof typeof performancesInfo];

  if (!performance) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">공연을 찾을 수 없습니다</h1>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              홈으로
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const performanceEntries = Object.entries(performancesInfo)
  const currentIndex = performanceEntries.findIndex(([key]) => key === slug)

  const MAX_EACH = 5
  const TOTAL = 10
  const n = performanceEntries.length

  let beforeCount = Math.min(MAX_EACH, currentIndex)
  let afterCount = Math.min(MAX_EACH, n - currentIndex - 1)

  let beforeStart = currentIndex - beforeCount
  const beforeEnd = currentIndex
  const afterStart = currentIndex + 1
  let afterEnd = currentIndex + 1 + afterCount

  // If one side has fewer than 5, take the remainder from the other side to make TOTAL (up to available)
  let deficit = TOTAL - (beforeCount + afterCount)
  if (deficit > 0 && beforeCount < MAX_EACH) {
    const canTakeFromAfter = Math.min(deficit, n - afterEnd)
    afterEnd += canTakeFromAfter
    deficit -= canTakeFromAfter
  }
  if (deficit > 0 && afterCount < MAX_EACH) {
    const canTakeFromBefore = Math.min(deficit, beforeStart)
    beforeStart -= canTakeFromBefore
    deficit -= canTakeFromBefore
  }

  const relatedPerformances = performanceEntries
    .slice(beforeStart, beforeEnd)
    .concat(performanceEntries.slice(afterStart, afterEnd))
    .slice(0, TOTAL)
    .map(([key, perf]) => ({ slug: key, ...perf }))

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center space-x-2">  
              <img
                src={`/logo-bl.png`}
                alt="극단 큰강 로고"
                className="h-10 w-auto"
              />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" disabled>
                <ArrowRight className="h-4 w-4 mr-2 opacity-0" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"
          style={{
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
                      <Image
                        src={performance.posterImage ? `${performance.posterImage}` : `/placeholder.svg`}
                        alt={performance.title}
                        width={800}
                        height={450}
                        className="w-full h-auto object-contain rounded-md"
                      />
                      {performance.detailImage && (
                        <Image
                          src={`${performance.detailImage}`}
                          alt={performance.title}
                          width={800}
                          height={450}
                          className="w-full h-auto object-contain rounded-md"
                        />
                      )}
                      {performance.fullDescription.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                          {paragraph}
                          <br></br>
                          {performance.link && (
                            <a href={performance.link} target="_blank" rel="noopener noreferrer">{performance.link}</a>
                          )}
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
                  </CardContent>
                </Card>

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
                        <span className="font-medium">작 (각색): </span>
                        <span className="text-muted-foreground">{performance.writer}</span>
                      </div>
                      <div>
                        <span className="font-medium">조명: </span>
                        <span className="text-muted-foreground">{performance.light}</span>
                      </div>

                      <div>
                        <span className="font-medium">디자인: </span>
                        <span className="text-muted-foreground">{performance.design}</span>
                      </div>

                      <div>
                        <span className="font-medium">주최: </span>
                        <span className="text-muted-foreground">{performance.project}</span>
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
                  <CardContent className="px-3">
                    <div className="space-y-1">
                      {relatedPerformances.map((relatedPerf) => (
                        <Link
                          key={relatedPerf.slug}
                          href={`/performance/${relatedPerf.slug}`}
                          className="flex items-center space-x-2 p-1 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Image
                            src={relatedPerf.posterImage ? `${relatedPerf.posterImage}` : `/placeholder.svg`}
                            alt={relatedPerf.title}
                            width={100}
                            height={150}
                            className="w-16 h-18 object-contain rounded"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-sm">{relatedPerf.title}</div>
                            <div className="text-xs text-muted-foreground">{relatedPerf.description}</div>
                          </div>
                        </Link>
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
