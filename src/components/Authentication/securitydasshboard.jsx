
import { useState } from "react";
import {
  AlertTriangle,
  X,
  RotateCcw,
  Check,
} from "lucide-react";

const summaryData = [
  { label: "Today's Logins", value: 142, color: "#F0F4F8" },
  { label: "Today's Failed Logins", value: 24, color: "#FF4D43" },
  { label: "Active Sessions", value: 86, color: "#3BB273" },
  { label: "Password Changes", value: 6, color: "#E67E22" },
  { label: "Password Resets", value: 4, color: "#E67E22" },
  { label: "Locked Accounts", value: 3, color: "#E74C3C" },
  { label: "New Devices", value: 3, color: "#2980B9" },
  { label: "Suspicious Attempts", value: 2, color: "#E74C3C" },
];

const initialRecommendations = [
  { label: "Enable MFA", checked: true },
  { label: "Review Failed Logins", checked: false },
  { label: "Terminate Idle Sessions", checked: true },
  { label: "Rotate Admin Passwords", checked: true },
  { label: "Update Password Policy", checked: false },
  { label: "Monitor Unknown Devices", checked: false },
  { label: "Review Security Logs", checked: true },
];

const alerts = [
  {
    title: "Unauthorized Login Attempt",
    detail: "11:42 AM",
    type: "danger",
    icon: AlertTriangle,
  },
  {
    title: "Multiple Failed Passwords",
    detail: "Sahan Bandara · 09:15 AM",
    type: "danger",
    icon: X,
  },
  {
    title: "Admin Password Changed",
    detail: "Head Office · 09:45 AM",
    type: "warning",
    icon: RotateCcw,
  },
  {
    title: "New Device Login",
    detail: "Dilani Fernando · 10:52 AM",
    type: "info",
    
  },
  {
    title: "Session Timeout",
    detail: "Ruwan Jayasuriya · 03:15 PM",
    type: "neutral",
   
  },
];

const alertColors = {
  danger: { color: "#FF4D43", bg: "#FF4D4315" },
  warning: { color: "#F39C12", bg: "#F39C1215" },
  info: { color: "#2980B9", bg: "#2980B915" },
  neutral: { color: "#8AABCF", bg: "#8AABCF15" },
};

function Panel({ title, children, className = "" }) {
  return (
    <section
      className={`min-w-0 rounded-[13px] border border-[#FFFFFF12] bg-[#1C2A38] ${className}`}
    >
      <h2 className="border-b border-[#FFFFFF0D] px-4 py-[17px] text-[14px] font-semibold tracking-[1px] text-[#F0F4F8]">
        {title}
      </h2>

      {children}
    </section>
  );
}

function SecuritySummary() {
  return (
    <Panel title="Security Summary" className="h-full">
      <div className="px-4">
        {summaryData.map((item) => (
          <div
            key={item.label}
            className="flex min-h-[30px] items-center justify-between gap-2 border-b border-[#FFFFFF0D] py-[7px] last:border-b-0"
          >
            <span className="text-[13px] font-[400] text-[#8A9BB0]">
              {item.label}
            </span>

            <span
              className="text-[13px] font-semibold"
              style={{ color: item.color }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function SecurityRecommendations() {
  const [recommendations, setRecommendations] = useState(
    initialRecommendations
  );

  const toggleRecommendation = (index) => {
    setRecommendations((previous) =>
      previous.map((item, i) =>
        i === index
          ? { ...item, checked: !item.checked }
          : item
      )
    );
  };

  return (
    <Panel title="Security Recommendation" className="h-full">
      <div className="px-4 py-[17px]">
        {recommendations.map((item, index) => (
          <button
            type="button"
            key={item.label}
            onClick={() => toggleRecommendation(index)}
            className="flex min-h-[39px] w-full items-center gap-[9px] text-left"
          >
            <span
              className={`flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-[3px] ${
                item.checked
                  ? "bg-[#36B37E]"
                  : "bg-[#344250]"
              }`}
            >
              {item.checked && (
                <Check
                  size={11}
                  strokeWidth={3}
                  className="text-white"
                />
              )}
            </span>

            <span className="text-[13px] font-semibold text-[#F0F4F8]">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </Panel>
  );
}

function SecurityScore() {
  return (
    <Panel title="Security Score" className="h-full">
      <div className="flex flex-col items-center px-3 pt-[25px]">
        <div className="relative flex h-[117px] w-[117px] items-center justify-center">
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 h-full w-full -rotate-90"
          >
            <circle
              cx="60"
              cy="60"
              r="47"
              fill="none"
              stroke="#344250"
              strokeWidth="21"
            />

            <circle
              cx="60"
              cy="60"
              r="47"
              fill="none"
              stroke="#36B37E"
              strokeWidth="21"
              strokeDasharray={`${2 * Math.PI * 47 * 0.94} ${
                2 * Math.PI * 47 * 0.06
              }`}
              strokeLinecap="butt"
            />
          </svg>

          <div className="relative text-center">
            <p className="text-[18px] font-bold text-[#F0F4F8]">
              94%
            </p>
            <p className="text-[12px] text-[#8A9BB0]">
              EXCELLENT
            </p>
          </div>
        </div>

        <p className="mt-[31px] text-center text-[14px] font-semibold text-[#3BB273]">
          Security Level: Low Risk
        </p>

        <p className="mt-[7px] text-center text-[12px] text-[#8A9BB0]">
          Last assessed today at 06:00 AM
        </p>
      </div>
    </Panel>
  );
}


function LatestAlerts() {
  return (
    <Panel title="Latest Alerts" className="h-full">
      <div className="px-4">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          const colors = alertColors[alert.type];

          return (
            <div
              key={alert.title}
              className="flex min-h-[54px] items-center gap-[9px] border-b border-[#FFFFFF0D] py-[10px] last:border-b-0"
            >
              <span
                className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[4px]"
                style={{ backgroundColor: colors.bg }}
              >
                {Icon && (
                  <Icon
                    size={10}
                    strokeWidth={2}
                    style={{ color: colors.color }}
                  />
                )}
              </span>

              <div className="min-w-0">
                <p className="text-[14px] font-semibold leading-[15px] text-[#F0F4F8]">
                  {alert.title}
                </p>

                <p className="text-[12px] leading-[14px] text-[#8A9BB0]">
                  {alert.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}


export default function SecurityDashboard() {
  return (
    <div className="min-h-screen bg-[#0F1923] mt-[16px] font-['DM_Sans',sans-serif]">
      <div className="grid grid-cols-1 gap-[9px] sm:grid-cols-2 xl:grid-cols-[1fr_1.12fr_1fr_1fr]">
        <SecuritySummary />
        <SecurityRecommendations />
        <SecurityScore />
        <LatestAlerts />
      </div>
    </div>
  );
}
