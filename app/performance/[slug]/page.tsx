import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ArrowLeft, ArrowRight, Users, Star, Ticket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const performances = {
    "midsummer-nights-dream": {
      title: "한 여름 밤의 꿈",
      startDate: "2025년 8월 23일",
      endDate: "2025년 8월 24일",
      venue: "극장 봄",
      image: "/IMG_4269.JPG",
      detailImage: "",
      description: "셰익스피어의 불멸의 걸작을 현대적 감각으로 재해석한 극단 큰강의 새로운 작품",
      fullDescription: `사랑과 질투, 혼란과 변신이 뒤엉킨 셰익스피어의 고전을 배우 극단의 무대 뒤를 배경으로 재해석했습니다. 무대와 현실이 뒤섞이는 순간, 연극 속 연극의 매혹이 펼쳐집니다.
대학로 극장에서 벌어지는 요정들과 인간들의 사랑 이야기를 현대적 감각으로 풀어낸 작품입니다. 환상적인 무대 연출과 유쾌한 코미디로 관객들에게 즐거움과 웃음을 선사합니다.
`,
      cast: ["김경한 (라이센더)", "김지우 (퍼크3)", "노하윤( 허미어)", "박철희 (바텀)", "성규동 (퀸스)", "오은규 (퍼크2)", "이종원 (디미트리어스)", "이자아 (티타니아)", "최서우 (헬레나)", "최진혁 (오베론)", "하다운 (퍼크1)", "한미소 (플롯)"],
      director: "오준혁",
      writer: "오준혁",
      light: "김홍찬",
      design: "서민지",
      project: "프로젝트 유후",
      runtime: "1시간 10분",
      link: "",
      isCurrentShow: true,
    },
    "those-below-above": {
      title: "아랫것들의 위",
      startDate: "2025년 3월 7일",
      endDate: "2025년 3월 9일",
      venue: "소극장 혜화당",
      image: "/IMG_4267.JPG",
      detailImage: "/25001847-01.jpg",
      description: "쓰레기로 뒤덮인 세상 속, 공허함과 희망",
      fullDescription: `현대 사회의 계층 구조와 소외감을 날카롭게 그려낸 창작 연극입니다. 쓰레기로 뒤덮인 세상에서 살아가는 사람들의 이야기를 통해 현실의 모순과 희망을 동시에 보여줍니다.
극단 큰강의 독창적인 연출로 무거운 주제를 관객들이 쉽게 공감할 수 있도록 풀어냈습니다. 특히 무대 위 쓰레기 더미 속에서 피어나는 인간애의 모습이 깊은 감동을 주었습니다.
사회적 메시지와 예술성을 모두 갖춘 의미 있는 작품으로 평가받았습니다.`,
      cast: ["강희만 (감정사)", "김지우 (안경소년)", "노하윤 (소녀)", "박철희 (청년1)", "염재민 (멍소년)", "오진우 (수집가)", "이수옥 (공주)", "이종원 (칼잡이남)", "하다운 (칼잡이녀)", "홍시영 (청년2)"],
      director: "오준혁",
      writer: "임진현",
      light: "김홍찬",
      design: "서민지",
      project: "프로젝트 유후",
      runtime: "1시간 30분",
      link: "https://tickets.interpark.com/goods/25001847",
      isCurrentShow: false,
    },
    "act-2-chasing-light": {
      title: "제2막 '빛'추다",
      startDate: "2024년 10월 19일",
      endDate: "2024년 10월 20일",
      venue: "단막극장",
      image: "/IMG_4270.JPG",
      detailImage: "/24012719-02.jpg",
      description: "사랑과 오해를 현대적으로 풀어낸 유쾌한 '십이야'",
      fullDescription: `셰익스피어의 '십이야'를 현대적으로 재해석한 작품입니다. 사랑과 오해가 뒤엉킨 이야기를 유쾌함 속에 숨은 진심을 그려내며 관객들에게 웃음과 감동을 선사했습니다.
성별을 바꾼 주인공의 정체성 혼란과 사랑의 착각을 통해 현대 사회의 다양성과 포용에 대한 메시지를 담았습니다. 코미디 요소와 진지한 주제 의식이 절묘하게 조화를 이룬 작품입니다.
젊은 배우들의 에너지 넘치는 연기와 창의적인 무대 연출이 돋보였던 공연이었습니다.`,
      cast: ["김지우 (페이비언)", "노하윤 (코델리어)", "박철희 (말보리오)", "오진우 (오시노)", "이수옥 (올리비아)", "이종원 (토비)", "이현영 (마리아)", "임미성 (연출)", "최서우 (베로니)", "하다운 (바이올라)"],
      director: "오준혁",
      runtime: "1시간 25분",
      writer: "오준혁",
      light: "김홍찬",
      design: "서민지",
      project: "프로젝트 유후",
      link: "https://tickets.interpark.com/goods/24012719",
      isCurrentShow: false,
    },
    "back-then-we-were": {
      title: "그때, 우리는",
      startDate: "2024년 5월 18일",
      endDate: "2024년 5월 19일",
      venue: "단막극장",
      image: "/IMG_4271.JPG",
      detailImage: "",
      description: "스물네 살 여름, 춘천에서 마주한 사랑과 이별의 기억",
      fullDescription: `스물네 살 여름, 춘천에서 마주한 사랑과 이별의 기억을 담은 감성적인 창작 연극입니다. 청춘의 아름다움과 아픔을 섬세하게 그려내며 관객들의 마음을 울렸습니다.
첫사랑의 설렘과 이별의 아픔, 그리고 시간이 흘러 다시 만난 두 사람의 이야기를 통해 사랑의 의미와 성장에 대해 이야기합니다. 춘천의 아름다운 풍경을 배경으로 한 서정적인 무대가 인상적이었습니다.
관객들의 청춘 시절을 떠올리게 하는 따뜻하고 애틋한 작품으로 많은 사랑을 받았습니다.`,
      cast: ["김도연 (선영)", "김지우 (수진)", "노하윤 (세진)", "박철희 (명수)", "오진우 (응덕)", "이수옥 (선영)", "이종원 (영민)", "이현영 (수진)", "최영규 (지환)", "최진혁 (병태)", "하다운 (주미)"],
      director: "오준혁",
      runtime: "1시간 20분",
      writer: "",
      light: "김홍찬",
      design: "서민지",
      project: "프로젝트 유후",
      link: "",
      isCurrentShow: false,
    },
    "french-fries": {
      title: "감자 후라이",
      startDate: "2023년 12월 16일",
      endDate: "2023년 12월 17일",
      venue: "SK소극장",
      image: "/IMG_4272.JPG",
      detailImage: "",
      description: "사랑에 속아 돈마저 잃은 인간 군상의 희비극",
      fullDescription: `사랑에 속아 돈마저 잃은 인간 군상의 희비극을 그린 창작 연극입니다. 현대 사회의 물질주의와 인간 관계의 복잡함을 날카롭게 풍자하며 관객들에게 깊은 여운을 남겼습니다.`,
      cast: ["김경한 (광호)", "김기홍 (월초)", "김지우 (홍도)", "김홍찬 (철수)", "노하윤 (봉옥)", "박철희 (중실)", "박효용 (수련)", "서유진 (혜숙)", "이수옥 (춘홍)", "최진혁 (김군)", "하다운 (모)", "황동준 (부)"],
      director: "오준혁",
      runtime: "1시간 20분",
      writer: "오준혁",
      light: "김홍찬",
      design: "서민지",
      project: "프로젝트 유후",
      link: "",
      isCurrentShow: false,
    },
    "hyehwa-dong": {
      title: "혜화동",
      startDate: "2023년 7월 8일",
      endDate: "2023년 7월 9일",
      venue: "뜻밖의 극장",
      image: "/IMG_4273.JPG",
      detailImage: "",
      description: "소박한 시골 마을에서 삶과 죽음, 사랑의 의미를 담담하게 그린 이야기.",
      fullDescription: `소박한 시골 마을에서 삶과 죽음, 사랑의 의미를 담담하게 그린 이야기로, 인간 존재의 본질을 탐구합니다.`,
      cast: ["김기홍", "김도연", "김성경", "김지우", "김홍찬", "노하윤", "서유진", "오준혁", "이현영", "조경호"],
      director: "오준혁",
      runtime: "1시간 30분",
      writer: "",
      light: "김홍찬",
      design: "서민지",
      project: "프로젝트 유후",
      link: "",
      isCurrentShow: false,
    },
    "those-below-above-0": {
      title: "아랫것들의 위",
      startDate: "2023년 1월 28일",
      endDate: "2023년 1월 29일",
      venue: "서완소극장",
      image: "/IMG_4274.JPG",
      detailImage: "/22017917-03.jpg",
      description: "쓰레기로 뒤덮인 세상 속, 공허함과 희망",
      fullDescription: `현대 사회의 계층 구조와 소외감을 날카롭게 그려낸 창작 연극입니다. 쓰레기로 뒤덮인 세상에서 살아가는 사람들의 이야기를 통해 현실의 모순과 희망을 동시에 보여줍니다.`,
      cast: ["김경한 (멍소년)", "김기홍 (존재자)", "김성경(칼잡이남)", "김지우(안경소년)", "배진석 (청년2)", "오준혁 (수집가)","이여진 (소녀)", "이종원 (청년1)", "이현영 (공주)", "전민지 (칼잡이녀)", "최진혁 (감정사)"],
      director: "임진현",
      runtime: "1시간 30분",
      writer: "임진현",
      light: "김홍찬",
      design: "서민지",
      project: "프로젝트 유후",
      link: "https://tickets.interpark.com/goods/22017917",
      isCurrentShow: false,
    },
    "mujue" : {
      title: "뮤죄",
      startDate: "2022년 8월 27일",
      endDate: "2022년 8월 28일",
      venue: "성균소극장",
      image: "/IMG_4275.JPG",
      detailImage: "",
      description: "살인사건 배심원들의 치열한 토론 속에서 드러나는 편견과 진실의 힘.",
      fullDescription: `살인사건 배심원들의 치열한 토론 속에서 드러나는 편견과 진실의 힘을 그린 작품입니다. 다양한 인물들이 각자의 시각으로 사건을 바라보며 벌어지는 갈등과 화해를 통해 인간 본성에 대한 깊은 통찰을 제공합니다.`,
      cast: ["김경한", "김지우", "박건영","배진석","이여진","이종원","이현영","장소희","전민지","조권목", "최진혁", "하지원"],
      director: "오준혁",
      runtime: "1시간 20분",
      writer: "",
      light: "",
      design: "서민지",
      project: "프로젝트 유후",
      link: "",
      isCurrentShow: false,
    },
    "the-truth": {
      title: "The truth",
      startDate: "2022년 3월 26일",
      endDate: "2022년 3월 27일",
      venue: "성균소극장",
      image: "/IMG_4327.JPG",
      detailImage: "/IMG_4383.JPG",
      description: "마녀사냥에 휩싸인 마을에서 광기와 진실이 맞부딪히는 이야기.",
      fullDescription: `마녀사냥에 휩싸인 마을에서 광기와 진실이 맞부딪히는 이야기로, 인간의 본성과 사회의 어두운 면을 날카롭게 파헤칩니다. 극단 큰강의 독창적인 연출과 배우들의 열연이 돋보이는 작품입니다.`,
      cast: ["김도연", "김성경", "김예은", "김지우", "박소희","이영인","이종원","이현영","전민지","조권목", "조병규"],
      director: "오준혁",
      runtime: "1시간 20분",
      writer: "",
      light: "",
      design: "서민지",
      project: "프로젝트 유후",
      link: "https://tickets.interpark.com/goods/22003005",
      isCurrentShow: false,
    },
    "french-fries-0": {
      title: "사랑에 속고 돈에 울고",
      startDate: "2021년 3월 20일",
      endDate: "2021년 3월 21일",
      venue: "창조소극장",
      image: "/IMG_4328.JPG",
      detailImage: "",
      description: "사랑에 속아 돈마저 잃은 인간 군상의 희비극",
      fullDescription: `사랑에 속아 돈마저 잃은 인간 군상의 희비극을 그린 창작 연극입니다. 현대 사회의 물질주의와 인간 관계의 복잡함을 날카롭게 풍자하며 관객들에게 깊은 여운을 남겼습니다.`,
      cast: ["김대현", "김도연", "김영진", "문서연", "배진석","이종원","이현영","전민지","조권목", "진식", "한여주"],
      director: "오준혁",
      runtime: "1시간 20분",
      writer: "",
      light: "임효섭",
      design: "서민지",
      project: "프로젝트 유후",
      link: "",
      isCurrentShow: false,
    },
    "midsummer-nights-dream-0": {
      title: "한 여름 밤의 꿈",
      startDate: "2020년 9월 5일",
      endDate: "2020년 9월 6일",
      venue: "소극장 봄",
      image: "/IMG_4329.JPG",
      detailImage: "",
      description: "셰익스피어의 불멸의 걸작을 현대 적 감각으로 재해석한 극단 큰강의 새로운 작품",
      fullDescription: `셰익스피어의 불멸의 걸작을 현대적 감각으로 재해석한 극단 큰강의 새로운 작품입니다. 사랑과 질투, 혼란과 변신이 뒤엉킨 셰익스피어의 고전을 배우 극단의 무대 뒤를 배경으로 재해석했습니다. 무대와 현실이 뒤섞이는 순간, 연극 속 연극의 매혹이 펼쳐집니다.
대학로 극장에서 벌어지는 요정들과 인간들의 사랑 이야기를 현대적 감각으로 풀어낸 작품입니다. 환상적인 무대 연출과 유쾌한 코미디로 관객들에게 즐거움과 웃음을 선사합니다.`,
      cast: ["김민경", "김연희", "김현준", "노신동", "이상아", "이종원", "이현영", "임미성", "장재원", "조호정"],
      director: "오준혁",
      runtime: "1시간 10분",
      writer: "오준혁",
      light: "임효섭",
      design: "서민지",
      project: "프로젝트 유후",
      link: "",
      isCurrentShow: false,
    },
    "midsummer-nights-dream-1": {
      title: "한 여름 밤의 꿈",
      startDate: "2020년 7월 18일",
      endDate: "2020년 7월 19일",
      venue: "소극장 봄",
      image: "/IMG_4331.JPG",
      detailImage: "",
      description: "셰익스피어의 불멸의 걸작을 현대적 감각으로 재해석한 극단 큰강의 새로운 작품",
      fullDescription: `셰익스피어의 불멸의 걸작을 현대적 감각으로 재해석한 극단 큰강의 새로운 작품입니다. 사랑과 질투, 혼란과 변신이 뒤엉킨 셰익스피어의 고전을 배우 극단의 무대 뒤를 배경으로 재해석했습니다. 무대와 현실이 뒤섞이는 순간, 연극 속 연극의 매혹이 펼쳐집니다.
대학로 극장에서 벌어지는 요정들과 인간들의 사랑 이야기를 현대적 감각으로 풀어낸 작품입니다. 환상적인 무대 연출과 유쾌한 코미디로 관객들에게 즐거움과 웃음을 선사합니다.`,
      cast: ["김지영", "문수지", "배진석", "서이경", "이명재", "이병현", "이연수", "이유리", "조권목", "최재호"],
      director: "오준혁",
      runtime: "1시간 10분",
      writer: "오준혁",
      light: "임효섭",
      design: "서민지",
      project: "프로젝트 유후",
      link: "",
      isCurrentShow: false,
    },
    "twelfth-night-0": {
      title: "십이야",
      startDate: "2020년 5월 2일",
      endDate: "2020년 5월 3일",
      venue: "소극장 봄",
      image: "/IMG_4330.JPG",
      detailImage: "",
      description: "사랑과 오해를 현대적으로 풀어낸 유쾌한 '십이야'",
      fullDescription: `셰익스피어의 '십이야'를 현대적으로 재해석한 작품입니다. 사랑과 오해가 뒤엉킨 이야기를 유쾌함 속에 숨은 진심을 그려내며 관객들에게 웃음과 감동을 선사했습니다.
성별을 바꾼 주인공의 정체성 혼란과 사랑의 착각을 통해 현대 사회의 다양성과 포용에 대한 메시지를 담았습니다. 코미디 요소와 진지한 주제 의식이 절묘하게 조화를 이룬 작품입니다.
젊은 배우들의 에너지 넘치는 연기와 창의적인 무대 연출이 돋보였던 공연이었습니다.`,
      cast: ["강연현", "김지나", "김지은", "박수", "신건식", "임미성", "전아영", "최현미", "황동준"],
      director: "오준혁",
      runtime: "1시간 25분",
      writer: "오준혁",
      light: "임효섭",
      design: "서민지",
      project: "프로젝트 유후",
      link: "",
      isCurrentShow: false,
    },
    "twelfth-night-1": {
      title: "십이야",
      startDate: "2020년 3월 14일",
      endDate: "2020년 3월 15일",
      venue: "소극장 봄",
      image: "/IMG_4333.JPG",
      detailImage: "",
      description: "사랑과 오해를 현대적으로 풀어낸 유쾌한 '십이야'",
      fullDescription: `셰익스피어의 '십이야'를 현대적으로 재해석한 작품입니다. 사랑과 오해가 뒤엉킨 이야기를 유쾌함 속에 숨은 진심을 그려내며 관객들에게 웃음과 감동을 선사했습니다.
성별을 바꾼 주인공의 정체성 혼란과 사랑의 착각을 통해 현대 사회의 다양성과 포용에 대한 메시지를 담았습니다. 코미디 요소와 진지한 주제 의식이 절妙하게 조화를 이룬 작품입니다.
젊은 배우들의 에너지 넘치는 연기와 창의적인 무대 연출이 돋보였던 공연이었습니다.`,
      cast: ["강연현", "고은주", "배진석", "안창용", "오은경", "이유리", "이지애", "진식", "최진혁"],
      director: "오준혁",
      runtime: "1시간 25분",
      writer: "오준혁",
      light: "임효섭",
      design: "서민지",
      project: "프로젝트 유후",
      link: "",
      isCurrentShow: false,
    },
    "not-your-fault": {
      title: "네 잘못이 아니야",
      startDate: "2019년 9월 21일",
      endDate: "2019년 9월 22일",
      venue: "소극장 봄",
      image: "/IMG_4332.JPG",
      detailImage: "",
      description: "네 잘못이 아니야는 창작극",
      fullDescription: `네 잘못이 아니야는 창작극으로, 현대 사회의 소통 단절과 인간 관계의 복잡함을 그려낸 작품입니다. 주인공들이 겪는 갈등과 화해를 통해 관객들에게 깊은 감동을 선사했습니다.`,
      cast: ["조호정", "배진석", "김지영", "강영현", "안창용", "최진혁", "조영준", "나준수", "최현미"],
      director: "오준혁, 안창용",
      runtime: "1시간 20분",
      writer: "Nangbi",
      light: "임효섭",
      design: "서민지",
      project: "프로젝트 유후",
      link: "",
      isCurrentShow: false,
    },
  }

export function generateStaticParams() {
  return Object.keys(performances).map((slug) => ({ slug }))
}
export const dynamicParams = false

export default async function PerformanceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  
  const performance = performances[slug as keyof typeof performances]

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

  const relatedPerformances = Object.entries(performances)
    .filter(([key]) => key !== slug)
    .slice(0, 10)
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
                // onClick={() => window.location.href = `${prefix}/`}
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
                        src={performance.image ? `${performance.image}` : `/placeholder.svg`}
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
                  <CardContent>
                    <div className="space-y-3">
                      {relatedPerformances.map((relatedPerf) => (
                        <Link
                          key={relatedPerf.slug}
                          href={`/performance/${relatedPerf.slug}`}
                          className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Image
                            src={relatedPerf.image ? `${relatedPerf.image}` : `/placeholder.svg`}
                            alt={relatedPerf.title}
                            width={50}
                            height={50}
                            className="w-12 h-12 object-cover rounded"
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
