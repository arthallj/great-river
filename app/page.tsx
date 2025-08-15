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
              <span className="font-manrope font-bold text-xl text-foreground">극단 큰강</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#past-performances" className="text-muted-foreground hover:text-accent transition-colors">
                공연
              </a>
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                소개
              </a>
              <a href="#gallery" className="text-muted-foreground hover:text-accent transition-colors">
                사진
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
            backgroundImage: `url('/IMG_4268.JPG')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-manrope text-5xl md:text-7xl font-bold mb-6 leading-tight">
            무대 위에 살아 숨쉬는 순간
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            since 2019
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              극단 소개
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              공연 목록
            </Button>
          </div>
        </div>
      </section>

      {/* Current Performance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">현재 공연</Badge>
            <h2 className="font-manrope text-4xl font-bold text-foreground mb-4">한 여름 밤의 꿈</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              셰익스피어의 불멸의 걸작을 현대적 감각으로 재해석한 극단 큰강의 새로운 작품
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
                src="/IMG_4269.JPG"
                alt="한 여름 밤의 꿈 포스터"
                className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-3 h-5 w-5" />
                <span>2025년 8월 23일 - 2025년 8월 24일</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-3 h-5 w-5" />
                <span>극장 봄</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-3 h-5 w-5" />
                <span>토 오후 4시 7시 / 일 오후 4시</span>
              </div>
              <p className="text-foreground leading-relaxed">
                사랑과 질투, 혼란과 변신이 뒤엉킨 셰익스피어의 고전을 배우 극단의 무대 뒤를 배경으로 재해석했습니다. 무대와 현실이 뒤섞이는 순간, 연극 속 연극의 매혹이 펼쳐집니다.
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
                title: "아랫것들의 위",
                slug: "romeo-and-juliet", // 영어 slug 추가
                startDate: "2025년 3월 7일",
                endDate: "2025년 3월 9일",
                venue: "소극장 혜화당",
                image: "/IMG_4267.JPG",
                description: "쓰레기로 뒤덮인 세상 속, 공허함과 희망",
                details:
                  "",
              },
              {
                title: "제2막 '빛'추다",
                slug: "macbeth", // 영어 slug 추가
                startDate: "2024년 10월 19일",
                endDate: "2024년 10월 20일",
                venue: "단막극장",
                image: "/IMG_4270.JPG",
                description: "사랑과 오해를 현대적으로 풀어낸 유쾌한 ‘십이야’",
                details:
                  "사랑과 오해가 뒤엉킨 셰익스피어의 ‘십이야’를 현대적으로 재해석해, 유쾌함 속에 숨은 진심을 그립니다.",
              },
              {
                title: "그때, 우리는",
                slug: "midsummer-nights-dream", // 영어 slug 추가
                startDate: "2024년 5월 18일",
                endDate: "2024년 5월 19일",
                venue: "단막극장",
                image: "/IMG_4271.JPG",
                description: "스물네 살 여름, 춘천에서 마주한 사랑과 이별의 기억.",
                details:
                  "스물네 살 여름, 춘천에서 마주한 사랑과 이별의 기억을 담은 이야기입니다.",
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
            <h2 className="font-manrope text-3xl font-bold mb-8">극단 큰강 소개</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              2019년 창단된 극단 큰강은 클래식한 작품의 현대적 재해석과 창작 연극을 통해 관객들에게 깊은 감동과 새로운
              시각을 제공합니다. 우리는 연극이 가진 순수한 힘을 믿으며, 배우와 관객이 함께 만들어가는 살아있는 무대를
              추구합니다.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">집중과 완성도</h3>
                <p className="text-muted-foreground">한 기수당 한 공연, 주먹구구식이 아닌 완성도 높은 무대 제작</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">누구나 참여 가능</h3>
                <p className="text-muted-foreground">20~30대 배우 지망생부터 직장인·학생까지 열린 참여</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">전문성과 즐거움</h3>
                <p className="text-muted-foreground">배우 출신 연출의 아메리칸 액팅 메소드 트레이닝과 함께하는 즐거운 연기 경험</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            극단 큰강의 다양한 공연 순간들과 무대 뒤 이야기를 만나보세요
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
