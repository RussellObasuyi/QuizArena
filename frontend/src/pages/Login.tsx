import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormState {
  email: string;
  password: string;
}

interface InputFieldProps {
  type: "email" | "password";
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function InputField({ type, label, placeholder, value, onChange }: InputFieldProps) {
  return (
    <div className="mb-5">
      <label className="block text-[13px] font-medium text-[#4A3F6B] mb-1.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="
          w-full px-4 py-3 rounded-xl
          bg-[#FDFCFF] border-[1.5px] border-[#E8E2F5]
          text-[#1A1030] placeholder-[#C4BBDA] text-sm
          outline-none transition-all duration-150
          focus:border-[#8C50FF] focus:shadow-[0_0_0_4px_rgba(140,80,255,0.08)]
        "
      />
    </div>
  );
}

export default function Login() {
  const [form, setForm] = useState<FormState>({ email: "", password: "" });

  const setField = (field: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F3FF]">
      <div
        className="w-full max-w-[400px] mx-4 bg-white rounded-[24px] border border-[rgba(140,80,255,0.12)] px-10 py-11"
        style={{ boxShadow: "0 8px 48px rgba(140,80,255,0.08), 0 1px 3px rgba(0,0,0,0.04)" }}
      >
        {/* Logo */}
        <div className="w-[52px] h-[52px] rounded-2xl bg-[#F0EAFF] flex items-center justify-center mb-8">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 3z" fill="#DDD0FF" stroke="#8C50FF" strokeWidth="1.5" />
            <path d="M9.5 12l2 2 4-4" stroke="#8C50FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#F0EAFF] rounded-full px-3 py-1 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8C50FF]" />
          <span className="text-[12px] font-medium text-[#6B3FCC]">Fintech Learning Platform</span>
        </div>

        <h1 className="text-2xl font-bold text-[#1A1030] tracking-tight mb-1.5">
          Welcome back
        </h1>
        <p className="text-sm text-[#9B93B0] mb-9 leading-relaxed">
          Sign in to continue your streak on QuizArena
        </p>

        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            label="Email address"
            placeholder="you@example.com"
            value={form.email}
            onChange={setField("email")}
          />
          <InputField
            type="password"
            label="Password"
            placeholder="••••••••"
            value={form.password}
            onChange={setField("password")}
          />

          <div className="flex justify-end -mt-2 mb-7">
            <a href="#" className="text-[13px] font-medium text-[#8C50FF] hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="
              w-full py-3.5 rounded-xl
              bg-[#8C50FF] hover:bg-[#7A3EEE] active:scale-[0.98]
              text-white text-[15px] font-semibold tracking-tight
              transition-all duration-150
            "
          >
            Sign in
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#EEE9F9]" />
            <span className="text-[13px] text-[#C4BBDA]">or</span>
            <div className="flex-1 h-px bg-[#EEE9F9]" />
          </div>

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="
              w-full py-3 rounded-xl
              border-[1.5px] border-[#E8E2F5] bg-transparent
              text-[#4A3F6B] text-sm font-medium
              hover:border-[#8C50FF] hover:bg-[#FDFCFF]
              transition-all duration-150
            "
          >
            Create an account
          </button>
        </form>

        <p className="text-center text-xs text-[#C4BBDA] mt-7 leading-relaxed">
          By signing in you agree to our{" "}
          <a href="#" className="text-[#8C50FF] font-medium hover:underline">Terms of Service</a>
          {" "}and{" "}
          <a href="#" className="text-[#8C50FF] font-medium hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
