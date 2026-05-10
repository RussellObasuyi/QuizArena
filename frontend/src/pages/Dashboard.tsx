import { useNavigate } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ActionCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  route: string;
}

interface Stat {
  label: string;
  value: string;
  badge: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats: Stat[] = [
  { label: "Quizzes Taken", value: "12", badge: "↑ 3 this week" },
  { label: "Average Score", value: "85%", badge: "↑ Great!" },
  { label: "Topics Completed", value: "5", badge: "Keep going!" },
  { label: "Current Streak", value: "7d", badge: "🔥 On fire" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Navbar({ active }: { active: string }) {
  const navigate = useNavigate();
  const links = ["Dashboard", "Learn", "Quiz", "Rooms"];

  return (
    <nav className="flex items-center justify-between px-8 h-16 bg-white border-b border-[rgba(140,80,255,0.1)]">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-[10px] bg-[#F0EAFF] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 3z" fill="#DDD0FF" stroke="#8C50FF" strokeWidth="1.5" />
            <path d="M9.5 12l2 2 4-4" stroke="#8C50FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-[16px] font-bold text-[#1A1030]">QuizArena</span>
      </div>

      <div className="flex gap-8">
        {links.map((link) => (
          <span
            key={link}
            onClick={() => navigate(`/${link.toLowerCase()}`)}
            className={`text-sm font-medium cursor-pointer transition-colors duration-150 ${
              link === active ? "text-[#8C50FF]" : "text-[#9B93B0] hover:text-[#1A1030]"
            }`}
          >
            {link}
          </span>
        ))}
      </div>

      <div className="w-9 h-9 rounded-full bg-[#F0EAFF] border-[1.5px] border-[rgba(140,80,255,0.25)] flex items-center justify-center text-base cursor-pointer">
        👤
      </div>
    </nav>
  );
}

function ActionCardItem({ icon, title, description, route }: ActionCard) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="
        bg-white rounded-[20px] border border-[rgba(140,80,255,0.1)] p-7 cursor-pointer
        transition-all duration-150 hover:shadow-[0_8px_32px_rgba(140,80,255,0.12)]
      "
      style={{ boxShadow: "0 4px 24px rgba(140,80,255,0.05)" }}
    >
      <div className="w-[52px] h-[52px] rounded-[14px] bg-[#F0EAFF] flex items-center justify-center mb-5">
        {icon}
      </div>
      <h2 className="text-[16px] font-semibold text-[#1A1030] mb-1.5">{title}</h2>
      <p className="text-[13px] text-[#9B93B0] leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ label, value, badge }: Stat) {
  return (
    <div className="bg-[#F5F3FF] rounded-[14px] px-6 py-5">
      <p className="text-[13px] text-[#9B93B0] mb-1.5">{label}</p>
      <p className="text-[28px] font-bold text-[#1A1030] tracking-tight leading-none">
        {value}
        <span className="text-[13px] font-medium text-[#8C50FF] ml-2">{badge}</span>
      </p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Dashboard() {
  const actionCards: ActionCard[] = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="9" rx="2" fill="#8C50FF" />
          <rect x="3" y="15" width="7" height="6" rx="2" fill="#C4A0FF" />
          <rect x="13" y="3" width="8" height="6" rx="2" fill="#C4A0FF" />
          <rect x="13" y="12" width="8" height="9" rx="2" fill="#8C50FF" />
        </svg>
      ),
      title: "Continue Learning",
      description: "Pick up where you left off",
      route: "/learn",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#8C50FF" strokeWidth="1.5" fill="#F0EAFF" />
          <path d="M9 9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.4-.8 2.5-2 2.9V14" stroke="#8C50FF" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="12" cy="17" r="1" fill="#8C50FF" />
        </svg>
      ),
      title: "Take a Quiz",
      description: "Test your knowledge",
      route: "/quiz",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="8" r="3" fill="#C4A0FF" />
          <circle cx="15" cy="8" r="3" fill="#8C50FF" />
          <path d="M3 19c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6" stroke="#8C50FF" strokeWidth="1.75" strokeLinecap="round" fill="none" />
        </svg>
      ),
      title: "Join Room",
      description: "Compete with others",
      route: "/rooms",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      <Navbar active="Dashboard" />

      <div className="px-8 py-10">
        <h1 className="text-[26px] font-bold text-[#1A1030] tracking-tight mb-1.5">
          Welcome back, User 👋
        </h1>
        <p className="text-sm text-[#9B93B0] mb-9">
          Ready to level up your fintech knowledge?
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          {actionCards.map((card) => (
            <ActionCardItem key={card.title} {...card} />
          ))}
        </div>

        {/* Stats */}
        <div
          className="bg-white rounded-[20px] border border-[rgba(140,80,255,0.1)] p-7"
          style={{ boxShadow: "0 4px 24px rgba(140,80,255,0.05)" }}
        >
          <h2 className="text-[16px] font-semibold text-[#1A1030] mb-5">Your Stats</h2>
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}