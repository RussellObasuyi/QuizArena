import { useNavigate } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TopicCard {
  icon: string;
  title: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const topics: TopicCard[] = [
  {
    icon: "💳",
    title: "Budgeting",
    description: "Learn the fundamentals of personal budgeting and financial planning",
  },
  {
    icon: "📈",
    title: "Investing",
    description: "Understand stocks, bonds, and portfolio management strategies",
  },
  {
    icon: "₿",
    title: "Crypto",
    description: "Explore blockchain technology and cryptocurrency basics",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-8 h-16 bg-white border-b border-[rgba(140,80,255,0.1)]">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-[10px] bg-[#F0EAFF] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 3z" fill="#DDD0FF" stroke="#8C50FF" strokeWidth="1.5" />
            <path d="M9.5 12l2 2 4-4" stroke="#8C50FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-[16px] font-bold text-[#1A1030]">QuizArena</span>
      </div>

      {/* Nav Links */}
      <div className="flex gap-8">
        {["Dashboard", "Learn", "Quiz", "Rooms"].map((link) => (
          <span
            key={link}
            onClick={() => navigate(`/${link.toLowerCase()}`)}
            className={`text-sm font-medium cursor-pointer transition-colors duration-150 ${
              link === "Learn" ? "text-[#8C50FF]" : "text-[#9B93B0] hover:text-[#1A1030]"
            }`}
          >
            {link}
          </span>
        ))}
      </div>

      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-[#F0EAFF] border-[1.5px] border-[rgba(140,80,255,0.25)] flex items-center justify-center text-base cursor-pointer">
        👤
      </div>
    </nav>
  );
}

function Card({ icon, title, description }: TopicCard) {
  return (
    <div
      className="bg-white rounded-[20px] border border-[rgba(140,80,255,0.1)] p-7"
      style={{ boxShadow: "0 4px 24px rgba(140,80,255,0.05)" }}
    >
      <div className="w-12 h-12 rounded-[14px] bg-[#F0EAFF] flex items-center justify-center text-[22px] mb-5">
        {icon}
      </div>
      <h2 className="text-[16px] font-semibold text-[#1A1030] mb-2">{title}</h2>
      <p className="text-[13px] text-[#9B93B0] leading-relaxed mb-6">{description}</p>
      <button
        className="
          px-5 py-2 rounded-[10px]
          bg-[#8C50FF] hover:bg-[#7A3EEE] active:scale-[0.98]
          text-white text-[13px] font-semibold
          transition-all duration-150
        "
      >
        Start
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Learn() {
  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      <Navbar />

      <div className="px-8 py-10">
        <h1 className="text-[26px] font-bold text-[#1A1030] tracking-tight mb-1.5">
          Learning Center
        </h1>
        <p className="text-sm text-[#9B93B0] mb-9">
          Master fintech concepts at your own pace
        </p>

        <div className="grid grid-cols-3 gap-5">
          {topics.map((topic) => (
            <Card key={topic.title} {...topic} />
          ))}
        </div>
      </div>
    </div>
  );
}