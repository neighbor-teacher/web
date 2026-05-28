import { Music, Palette, Sparkles, Heart, Bot, Paintbrush, Gem, Brain, PenTool, Flower2, Moon, HelpingHand } from 'lucide-react';

export default function ClubsSection({ onSelectClass }) {
  const clubs = [
    {
      icon: <Music size={48} strokeWidth={1} />,
      title: "노래교실",
      desc: "지친 일상에 활력을 불어넣는 즐거운 노래와 음악의 시간입니다."
    },
    {
      icon: <Palette size={48} strokeWidth={1} />,
      title: "손재주",
      desc: "함께 만들며 배우는 즐거움, 나만의 작품을 완성하는 성취감을 느낍니다."
    },
    {
      icon: <Sparkles size={48} strokeWidth={1} />,
      title: "색채힐링",
      desc: "다채로운 색깔을 통해 마음을 치유하고 정서적 안정을 찾는 힐링 시간입니다."
    },
    {
      icon: <Heart size={48} strokeWidth={1} />,
      title: "건강마스터",
      desc: "백세 시대를 위한 올바른 건강 지식과 생활 습관을 함께 배워나갑니다."
    },
    {
      icon: <Bot size={48} strokeWidth={1} />,
      title: "AI (30-40)",
      desc: "인공지능과 디지털 기술을 쉽고 재미있게 배우며 미래를 준비합니다."
    },
    {
      icon: <Paintbrush size={48} strokeWidth={1} />,
      title: "네일아트",
      desc: "손끝에 피어나는 아름다움, 나만의 감성을 표현하며 손톱을 가꾸는 힐링 시간입니다."
    },
    {
      icon: <Gem size={48} strokeWidth={1} />,
      title: "비즈공예",
      desc: "다양하고 예쁜 비즈를 활용하여 세상에 단 하나뿐인 나만의 액세서리를 직접 만듭니다."
    },
    {
      icon: <Brain size={48} strokeWidth={1} />,
      title: "AI스터디 (50-60)",
      desc: "최신 AI 트렌드를 함께 공부하고, 실무와 일상에 유용한 AI 도구 사용법을 깊이 있게 연구합니다."
    },
    {
      icon: <PenTool size={48} strokeWidth={1} />,
      title: "캘리그라피",
      desc: "아름다운 손글씨를 통해 마음을 표현하고, 나만의 감성을 담은 작품을 완성합니다."
    },
    {
      icon: <Flower2 size={48} strokeWidth={1} />,
      title: "아로마테라피",
      desc: "천연 에센셜 오일의 향기와 효능을 통해 지친 몸과 마음의 스트레스를 치유하고 완화합니다."
    },
    {
      icon: <Moon size={48} strokeWidth={1} />,
      title: "별빛러닝",
      desc: "저녁 밤하늘 아래 선선한 바람을 맞으며 이웃들과 함께 가볍게 달리고 기초 체력을 기릅니다."
    },
    {
      icon: <HelpingHand size={48} strokeWidth={1} />,
      title: "약손마사지",
      desc: "가족과 이웃의 건강을 지켜주는 전통 마사지 기법을 배우고 직접 서로 실습하며 피로를 풉니다."
    }
  ];

  const handleCardClick = (title) => {
    if (onSelectClass) {
      onSelectClass(title);
    }
    const el = document.getElementById('apply');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="clubs" className="section clubs">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">길목 커뮤니티 프로그램</h2>
          <p className="section-subtitle">{clubs.length}가지 다양한 프로그램을 통해 일상의 활력을 찾아보세요</p>
        </div>
        
        <div className="clubs-grid">
          {clubs.map((club, index) => (
            <div key={index} className="club-card" onClick={() => handleCardClick(club.title)}>
              <div className="club-icon">{club.icon}</div>
              <h3 className="club-title">{club.title}</h3>
              <p className="club-desc">{club.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

