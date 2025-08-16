"use client"
import { galleryPhotoFileNames } from "@/data/gallery"
import { performancesInfo } from "@/data/performance"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef, useState, useEffect } from "react"

import { Calendar, MapPin, Clock, Ticket, ChevronLeft, ChevronRight, X, Star, Diamond, Target } from "lucide-react"

export default function TheaterHomePage() {
  const [currentGalleryPage, setCurrentPage] = useState(1);
  const [currentPerformancePage, setCurrentPerformancePage] = useState(1);
  const [selectedImage, setSelectedImage] = useState< string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isFirstPerformancePage = useRef(true);
  const isFirstGalleryPage = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // 100px 이상 스크롤하면 헤더 표시
    }

    // 마운트 시 바로 한 번 실행
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isFirstGalleryPage.current) {
      isFirstGalleryPage.current = false;
      return;
    }
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  }, [currentGalleryPage]);

  useEffect(() => {
    if (isFirstPerformancePage.current) {
      isFirstPerformancePage.current = false;
      return;
    }
    document.getElementById("past-performances")?.scrollIntoView({ behavior: "smooth" });
  }, [currentPerformancePage]);

  const photosPerPage = 13;
  const totalGalleryPages = Math.ceil(galleryPhotoFileNames.length / photosPerPage);
  const startGalleryIndex = (currentGalleryPage - 1) * photosPerPage;
  const currentGalleryPhotos = galleryPhotoFileNames.slice(startGalleryIndex, startGalleryIndex + photosPerPage);

  const performancePerPage = 6;
  const allPerformances = Object.entries(performancesInfo).map(
    ([slug, data]: [string, any]) => ({ ...data, slug })
  );
  const currentPerformance = allPerformances.find((p: any) => p.isCurrentShow);
  const pastPerformances = allPerformances.filter((p: any) => !p.isCurrentShow);
  const totalPerformancePages = Math.ceil(pastPerformances.length / performancePerPage);
  const startPerformanceIndex = (currentPerformancePage - 1) * performancePerPage;
  const currentPerformances = pastPerformances.slice(startPerformanceIndex, startPerformanceIndex + performancePerPage);

  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden">

      {/* Navigation */}
      <nav
        className={`w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={`/logo-bl.png`}
                alt="극단 큰강 로고"
                className="h-10 w-auto cursor-pointer"
                onClick={() => window.location.href = `/`}
              />
            </div>
            {/* 햄버거 버튼 (모바일에서만 보임) */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="메뉴 열기"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
            {/* 데스크탑 메뉴 */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#performances" className="text-muted-foreground hover:text-accent transition-colors">
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
          {/* 모바일 메뉴 드롭다운 */}
          {menuOpen && (
            <div className="flex flex-col md:hidden mt-4 space-y-4 bg-background rounded-lg shadow-lg p-4 items-end text-right">
              <a
                href="#performances"
                className="text-muted-foreground hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                공연
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                소개
              </a>
              <a
                href="#gallery"
                className="text-muted-foreground hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                사진
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                문의
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"
          style={{
            backgroundImage: `url('/IMG_4281.JPG')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <img
              src={`/logo-wh.png`}
              alt="극단 큰강 로고"
              className="h-26 w-auto mr-2"
            />
          </div>
          <h1 className="font-manrope text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            무대 위에 살아 숨쉬는 순간
          </h1>
          <p className="text-1xl md:text-1xl lg:text-2xl mb-12 text-white/90 leading-relaxed">
            since 2019
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              극단 소개
            </Button>
          </div>
        </div>
      </section>

      {/* Current Performance */}
      <section id="performances" className="py-16 bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 mt-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">현재 공연</Badge>
            <h2 className="font-manrope text-4xl font-bold text-foreground mb-4">{currentPerformance?.title ?? "현재 공연"}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{currentPerformance?.description ?? "현재 진행 중인 공연 정보는 곧 업데이트됩니다."}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div
              className="order-2 md:order-1 cursor-pointer flex justify-center"
              onClick={() => { if (currentPerformance?.slug) { window.location.href = `/performance/${currentPerformance.slug}` } }}
            >
              <img
                src={currentPerformance?.posterImage ? `${currentPerformance.posterImage}` : `/placeholder.svg`}
                alt={currentPerformance?.title ?? "현재 공연 포스터"}
                className="rounded-lg shadow-lg max-w-xs w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-3 w-5 h-5" />
                <span>{currentPerformance ? `${currentPerformance.startDate} - ${currentPerformance.endDate}` : "일정 업데이트 예정"}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-3 w-5 h-5" />
                <span>{currentPerformance?.venue ?? "장소 미정"}</span>
              </div>
              {currentPerformance?.time && (
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-3 w-5 h-5" />
                  <span>{currentPerformance.time}</span>
                </div>
              )}
              <p className="text-foreground leading-relaxed">
                {currentPerformance.fullDescription ?? "현재 공연에 대한 자세한 설명은 곧 업데이트됩니다."}
              </p>
              <div className="flex gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => { if (currentPerformance?.slug) { window.location.href = "/performance/" + currentPerformance.slug } }}
                >
                  <Ticket className="mr-2 w-4 h-4" />
                  상세보기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Performances */}
      <section id="past-performances" className="py-16">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="font-manrope text-3xl font-bold text-center mb-12 mt-6">지난 공연</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {currentPerformances.map((performance, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => {
                  window.location.href = `/performance/${performance.slug}`
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={performance.posterImage ? `${performance.posterImage}` : `/placeholder.svg`}
                    alt={performance.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-manrope">{performance.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="mr-2 w-4 h-4" />
                      <span>
                        {performance.startDate} - {performance.endDate}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 w-4 h-4" />
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
          <div className="flex justify-center items-center mt-12 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setCurrentPerformancePage((prev) => Math.max(prev - 1, 1)) 
                }}
                disabled={currentPerformancePage === 1}
                className="flex items-center"
              >
                <ChevronLeft className="mr-1 w-4 h-4" />
                이전
              </Button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPerformancePages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPerformancePage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setCurrentPerformancePage(page)
                    }}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setCurrentPerformancePage((prev) => Math.min(prev + 1, totalPerformancePages))
                }}
                disabled={currentPerformancePage === totalPerformancePages}
                className="flex items-center"
              >
                다음
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-manrope text-3xl font-bold mt-12 mb-8">극단 큰강 소개</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              2019년 창단된 극단 큰강은 클래식한 작품의 현대적 재해석과 창작 연극을 통해 관객들에게 깊은 감동과 새로운
              시각을 제공합니다. 우리는 연극이 가진 순수한 힘을 믿으며, 배우와 관객이 함께 만들어가는 살아있는 무대를
              추구합니다.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Diamond className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">집중과 완성도</h3>
                <p className="text-muted-foreground">한 기수당 한 공연, 주먹구구식이 아닌 완성도 높은 무대 제작</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">누구나 참여 가능</h3>
                <p className="text-muted-foreground">20~30대 배우 지망생부터 직장인·학생까지 열린 참여</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-manrope font-semibold text-lg mb-2">전문성과 즐거움</h3>
                <p className="text-muted-foreground">
                  배우 출신 연출의 아메리칸 액팅 메소드 트레이닝과 함께하는 즐거운 연기 경험
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-manrope text-3xl font-bold mt-12 mb-8">사진 모음</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            극단 큰강의 다양한 공연 순간들과 무대 뒤 이야기를 만나보세요
          </p>

          <div className="max-w-7xl mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
              {currentGalleryPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-2 group cursor-pointer"
                  onClick={() => setSelectedImage(photo)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                      <img
                        src={photo ? `${photo.trim()}` : `/placeholder.svg`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center mt-12 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentGalleryPage === 1}
                className="flex items-center"
              >
                <ChevronLeft className="mr-1 w-4 h-4" />
                이전
              </Button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalGalleryPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentGalleryPage === page ? "default" : "outline"}
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
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalGalleryPages))}
                disabled={currentGalleryPage === totalGalleryPages}
                className="flex items-center"
              >
                다음
                <ChevronRight className="ml-1 w-4 h-4" />
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
          <div
            className="relative max-w-6xl w-full flex items-center justify-center bg-black rounded-lg"
            style={{ maxHeight: '95vh' }} // 기존 max-w-4xl → max-w-6xl, maxHeight도 약간 증가
          >
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-4 h-4" />
            </Button>
            <img
              src={selectedImage ? `${selectedImage.trim()}` : `/placeholder.svg`}
              className="max-h-[90vh] max-w-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="font-manrope text-3xl font-bold text-center mb-12 mt-6">문의</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              극단 큰강에 대해 궁금한 점이 있으시면 언제든지 문의해주세요.
            </p>
            <div className="mt-12">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a
                  href="https://www.somoim.co.kr/51b64868-5f6b-11e9-adec-0a10bedf2a181"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Ticket className="mr-2 w-4 h-4" />
                  문의하기
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-manrope font-bold text-xl mb-4">극단 큰강</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                감동이 살아 숨쉬는 무대,
                <br />
                극단 큰강과 함께하세요.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>
                  <a
                    href="https://www.somoim.co.kr/51b64868-5f6b-11e9-adec-0a10bedf2a181"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    소모임 극단 큰강
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 극단 큰강. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
