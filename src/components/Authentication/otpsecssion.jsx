
const otpData = [
  { label: "Email OTP", value: "Enabled", type: "green-badge" },
  { label: "SMS OTP", value: "Enabled", type: "green-badge" },
  { label: "OTP Expiry Time", value: "5 Minutes", type: "blue" },
  { label: "OTP Requests Today", value: "148", type: "normal" },
  { label: "Failed OTP Verifications", value: "6", type: "red" },
  { label: "Average Verification Time", value: "18 Seconds", type: "green-badge" },
];

const sessionData = [
  { label: "Auto Logout", value: "15 Minutes", type: "red" },
  { label: "Idle Timeout", value: "Enabled", type: "green-badge" },
  { label: "Maximum Session Duration", value: "8 Hours", type: "blue" },
  { label: "Remember Device", value: "Disabled", type: "orange-badge" },
  { label: "Expired Sessions Today", value: "18", type: "red" },
  { label: "Currently Active Sessions", value: "86", type: "green" },
];

function StatusValue({ item }) {
  const styles = {
    "green-badge":
      "rounded-full border border-[#27AE6040] bg-[#27AE6018] px-[8px] py-[3px] text-[#27AE60]",
    "orange-badge":
      "rounded-full border border-[#F39C1240] bg-[#F39C1218] px-[8px] py-[3px] text-[#F39C12]",
    blue: "text-[#3498DB]",
    red: "text-[#FF453A]",
    green: "text-[#27AE60]",
    normal: "text-[#F0F4F8]",
  };

  return (
    <span
      className={`shrink-0 text-[13px] font-medium leading-[14px] ${
        styles[item.type] || styles.normal
      }`}
    >
      {item.value}
    </span>
  );
}

function SettingsBox({ title, subtitle, badge, data, buttonText }) {
  return (
    <div className="flex min-w-0 flex-col rounded-[12px] border border-[#34485B] bg-[#1C2A38] p-[18px] font-dm">
      {/* Header */}
      <div className="mb-[20px] flex min-h-[44px] items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-[14px] font-semibold leading-[18px] tracking-[0.5px] text-[#F0F4F8]">
            {title}
          </h3>

          <p className="text-[12px] leading-[15px] tracking-[0.3px] text-[#8A9BB0]">
            {subtitle}
          </p>
        </div>

        {badge && (
          <span className="shrink-0 rounded-full border border-[#2980B955] bg-[#2980B922] px-[9px] py-[3px] text-[11px] leading-[14px] text-[#2980B9] font-semibold">
            {badge}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex-1">
        {data.map((item) => (
          <div
            key={item.label}
            className="flex min-h-[40px] items-center justify-between gap-3 border-b border-[#FFFFFF0D] py-[8px]"
          >
            <span className="min-w-0 text-[13px] leading-[18px] text-[#8A9BB0]">
              {item.label}
            </span>

            <StatusValue item={item} />
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-[17px] flex min-h-[35px] w-full items-center justify-center rounded-[9px] border border-[#FFFFFF14] bg-[#243447] px-3 text-center text-[14px] font-semibold leading-[18px] text-[#F0F4F8] transition-colors hover:bg-[#2D4055]"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default function SecuritySettings() {
  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-4 xl:grid-cols-2 mt-[16px]">
      {/* Box 1: OTP Verification */}
      <SettingsBox
        title="OTP Verification Status"
        subtitle="One-time password delivery and verification health"
        badge="Today"
        data={otpData}
        buttonText="Manage OTP Policy"
      />

      {/* Box 2: Session Management */}
      <SettingsBox
        title="Session Management"
        subtitle="Idle timeout and active session controls"
        data={sessionData}
        buttonText="Manage Session Policy"
      />
    </div>
  );
}
