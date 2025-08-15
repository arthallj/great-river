"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Star, Clock, Ticket, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function TheaterHomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState<{
    image: string
    title: string
    category: string
  } | null>(null)

  const photosPerPage = 8
  const allPhotos = [
    {
      image: "/hamlet-theater.png",
      title: "햄릿 공연 중",
      category: "현재 공연",
      height: "h-80",
    },
    {
      image: "/romeo-and-juliet-romantic-scene.png",
      title: "로미오와 줄리엣 리허설",
      category: "리허설",
      height: "h-64",
    },
    {
      image: "/macbeth-performance.png",
      title: "맥베스 무대",
      category: "과거 공연",
      height: "h-96",
    },
    {
      image: "/midsummer-nights-dream-performance.png",
      title: "한여름 밤의 꿈",
      category: "과거 공연",
      height: "h-72",
    },
    {
      image: "/theater-actor-portrait.png",
      title: "배우 프로필 촬영",
      category: "비하인드",
      height: "h-56",
    },
    {
      image: "/theater-actress-portrait.png",
      title: "무대 메이크업",
      category: "비하인드",
      height: "h-88",
    },
    {
      image: "/male-theater-actor.png",
      title: "연기 연습",
      category: "연습",
      height: "h-64",
    },
    {
      image: "/drama-channel-thumbnail.png",
      title: "극장 전경",
      category: "극장",
      height: "h-80",
    },
    {
      image: "/hamlet-theater.png",
      title: "햄릿 커튼콜",
      category: "현재 공연",
      height: "h-72",
    },
    {
      image: "/romeo-and-juliet-romantic-scene.png",
      title: "로미오와 줄리엣 무대 세트",
      category: "과거 공연",
      height: "h-64",
    },
    {
      image: "/macbeth-performance.png",
      title: "맥베스 의상 피팅",
      category: "비하인드",
      height: "h-80",
    },
    {
      image: "/midsummer-nights-dream-performance.png",
      title: "한여름 밤의 꿈 리허설",
      category: "리허설",
      height: "h-88",
    },
  ]

  const totalPages = Math.ceil(allPhotos.length / photosPerPage)
  const startIndex = (currentPage - 1) * photosPerPage
  const currentPhotos = allPhotos.slice(startIndex, startIndex + photosPerPage)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">아</span>
              </div>
              <span className="font-manrope font-bold text-xl text-foreground">극단 아르테</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#past-performances" className="text-muted-foreground hover:text-accent transition-colors">
                지난 공연
              </a>
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                극단 소개
              </a>
              <a href="#cast" className="text-muted-foreground hover:text-accent transition-colors">
                배우진
              </a>
              <a href="#gallery" className="text-muted-foreground hover:text-accent transition-colors">
                사진첩
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                문의
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"
          style={{
            backgroundImage: `url('/drama-channel-thumbnail.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-manrope text-5xl md:text-7xl font-bold mb-6 leading-tight">
            감동이 살아 숨쉬는
            <br />
            <span className="text-accent">무대</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            극단 아르테와 함께 특별한 연극의 세계로 떠나보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Ticket className="mr-2 h-5 w-5" />
              티켓 예매
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              공연 일정 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Current Performance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">현재 공연</Badge>
            <h2 className="font-manrope text-4xl font-bold text-foreground mb-4">햄릿</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              셰익스피어의 불멸의 걸작을 현대적 감각으로 재해석한 극단 아르테의 대표작
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div
              className="order-2 md:order-1 cursor-pointer"
              onClick={() => {
                window.location.href = `/performance/hamlet`
              }}
            >
              <img
                src="/hamlet-theater.png"
                alt="햄릿 공연 장면"
                className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-3 h-5 w-5" />
                <span>2024년 12월 15일 - 2025년 1월 31일</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-3 h-5 w-5" />
                <span>아르테 소극장 (서울 종로구)</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-3 h-5 w-5" />
                <span>화-일 오후 7:30 / 토-일 오후 2:30 추가</span>
              </div>
              <p className="text-foreground leading-relaxed">
                복수와 광기, 사랑과 배신이 얽힌 덴마크 왕자의 이야기를 현대적 무대 연출과 함께 선보입니다. 인간 내면의
                갈등을 깊이 있게 탐구한 작품입니다.
              </p>
              <div className="flex gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    window.location.href = `/performance/hamlet`
                  }}
                >
                  <Ticket className="mr-2 h-4 w-4" />
                  상세보기
                </Button>
                <Button variant="outline">예매하기</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Performances */}
      <section id="past-performances" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-manrope text-3xl font-bold text-center mb-12">지난 공연</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "로미오와 줄리엣",
                slug: "romeo-and-juliet", // 영어 slug 추가
                startDate: "2024년 3월 15일",
                endDate: "2024년 4월 30일",
                venue: "아르테 소극장",
                image: "/romeo-and-juliet-romantic-scene.png",
                description: "영원한 사랑 이야기의 새로운 해석",
                details:
                  "셰익스피어의 불멸의 사랑 이야기를 현대적 감각으로 재해석한 작품입니다. 베로나의 두 가문 사이의 갈등 속에서 피어난 순수한 사랑을 통해 화해와 용서의 메시지를 전달했습니다.",
              },
              {
                title: "맥베스",
                slug: "macbeth", // 영어 slug 추가
                startDate: "2024년 5월 10일",
                endDate: "2024년 6월 25일",
                venue: "대학로 예술극장",
                image: "/macbeth-performance.png",
                description: "권력과 야망의 어두운 면을 그린 걸작",
                details:
                  "스코틀랜드의 장군 맥베스가 왕위에 대한 야망으로 파멸에 이르는 과정을 그린 비극입니다. 권력욕과 죄책감, 그리고 운명에 대한 깊이 있는 탐구를 선보였습니다.",
              },
              {
                title: "한여름 밤의 꿈",
                slug: "midsummer-nights-dream", // 영어 slug 추가
                startDate: "2024년 7월 5일",
                endDate: "2024년 8월 20일",
                venue: "종로문화센터 대극장",
                image: "/midsummer-nights-dream-performance.png",
                description: "환상적이고 유쾌한 마법의 세계",
                details:
                  "아테네의 숲에서 벌어지는 요정들과 인간들의 사랑 이야기입니다. 환상적인 무대 연출과 유쾌한 코미디로 관객들에게 즐거움과 웃음을 선사했습니다.",
              },
            ].map((performance, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => {
                  window.location.href = `/performance/${performance.slug}`
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={performance.image || "/placeholder.svg"}
                    alt={performance.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-manrope">{performance.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>
                        {performance.startDate} - {performance.endDate}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{performance.venue}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{performance.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-manrope text-3xl font-bold mb-8">극단 아르테 소개</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              2010년 창단된 극단 아르테는 클래식한 작품의 현대적 재해석과 창작 연극을 통해 관객들에게 깊은 감동과 새로운
              시각을 제공합니다. 우리는 연극이 가진 순수한 힘을 믿으며, 배우와 관객이 함께 만들어가는 살아있는 무대를
              추구합니다.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">전문 배우진</h3>
                <p className="text-muted-foreground">경험 풍부한 전문 배우들과 함께</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">수상 경력</h3>
                <p className="text-muted-foreground">다수의 연극제 수상 및 인정</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">정기 공연</h3>
                <p className="text-muted-foreground">연중 다양한 작품 정기 공연</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cast Section */}
      <section id="cast" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-manrope text-3xl font-bold text-center mb-12">주요 배우진</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "김연극", role: "예술감독", image: "/theater-actor-portrait.png" },
              { name: "이무대", role: "주연배우", image: "/theater-actress-portrait.png" },
              { name: "박연기", role: "주연배우", image: "/male-theater-actor.png" },
              { name: "최드라마", role: "조연배우", image: "/placeholder-vx1zv.png" },
            ].map((actor, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={actor.image || "/placeholder.svg"}
                    alt={actor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-manrope">{actor.name}</CardTitle>
                  <CardDescription>{actor.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-manrope text-3xl font-bold text-center mb-12">사진첩</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            극단 아르테의 다양한 공연 순간들과 무대 뒤 이야기를 만나보세요
          </p>

          <div className="max-w-7xl mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {currentPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-6 group cursor-pointer"
                  onClick={() => setSelectedImage(photo)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className={`${photo.height} overflow-hidden`}>
                      <img
                        src={photo.image || "/placeholder.svg"}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-xs font-medium mb-1 text-white/80">{photo.category}</div>
                        <div className="text-sm font-manrope font-semibold">{photo.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center mt-12 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                이전
              </Button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center"
              >
                다음
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
              <div className="text-sm font-medium mb-1 text-white/80">{selectedImage.category}</div>
              <div className="text-lg font-manrope font-semibold">{selectedImage.title}</div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-manrope text-3xl font-bold text-center mb-12">문의</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              극단 아르테에 대해 궁금한 점이 있으시면 언제든지 문의해주세요.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">위치</h3>
                <p className="text-muted-foreground">서울 종로구 대학로 123</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">운영 시간</h3>
                <p className="text-muted-foreground">평일 10:00 - 18:00</p>
              </div>
            </div>
            <div className="mt-12">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Ticket className="mr-2 h-4 w-4" />
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-manrope font-bold text-xl mb-4">극단 아르테</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                감동이 살아 숨쉬는 무대,
                <br />
                극단 아르테와 함께하세요.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>📍 서울시 종로구 대학로 123</p>
                <p>📞 02-1234-5678</p>
                <p>✉️ info@arte-theater.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">공연 문의</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>예매: 02-1234-5679</p>
                <p>단체관람: 02-1234-5680</p>
                <p>평일 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 극단 아르테. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
