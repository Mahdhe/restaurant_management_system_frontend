import {
  Check,
  X,
  RotateCcw,
} from "lucide-react";

const activities = [
  {
    initials: "KP",
    name: "Kasun Perera",
    role: "Restaurant Manager",
    time: "08:12 AM",
    status: "Logged in",
    type: "success",
    browser: "Chrome, Windows",
    ip: "192.168.1.14",
  },
  {
    initials: "NS",
    name: "Nimali Silva",
    role: "Cashier",
    time: "09:08 AM",
    status: "Failed login",
    type: "failed",
    browser: "Safari, iOS",
    ip: "192.168.1.22",
  },
  {
    initials: "KP",
    name: "Admin",
    role: "Super Admin",
    time: "09:45 AM",
    status: "Password Reset",
    type: "reset",
    browser: "Edge, Windows",
    ip: "192.168.1.82",
  },
];

const quickActions = [
  { label: "Reset Password" },
  { label: "Unlock User" },
  { label: "Terminate Session" },
  { label: "Force Logout" },
  { label: "View Security Logs" },
  { label: "Generate Report" },
];

function ActivityStatus({ type, status }) {
  const styles = {
    success: {
      icon: Check,
      color: "text-emerald-300",
      bg: "bg-emerald-500/20",
    },
    failed: {
      icon: X,
      color: "text-red-400",
      bg: "bg-red-500/15",
    },
    reset: {
      icon: RotateCcw,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
  };

  const { icon: Icon, color, bg } = styles[type];

  return (
    <div className="mt-[5px] flex items-center gap-[5px]">
      <span
        className={`flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[4px] ${bg} ${color}`}
      >
        <Icon size={10} strokeWidth={2.5} />
      </span>

      <span className="font-dm text-[12px] tracking-[0.3px] text-[#91A0B3]">
        {status}
      </span>
    </div>
  );
}

function AuthenticationActivity() {
  return (
    <section className="mt-[16px] grid w-full min-w-0 grid-cols-1 items-start gap-[18px] lg:grid-cols-[minmax(0,1fr)_256px]">
      {/* Recent Authentication Activity */}
      <div className="min-w-0 rounded-[14px] border border-[#FFFFFF0D] bg-[#1C2A38] p-[12px] sm:p-[16px]">
        {/* Header */}
        <div className="mb-[26px] flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="font-dm text-[18px] font-bold text-[#FFFFFF]">
              Recent Authentication Activity
            </h2>

            <p className="mt-[2px] font-dm text-[12px] text-[#8A9BB0]">
              Live employee session events
            </p>
          </div>

          <span className="mt-[3px] shrink-0 rounded-full border border-[#E74C3C4D] bg-[#E74C3C1F] px-[8px] py-[3px] font-dm text-[11px] tracking-[0.08em] text-[#E74C3C]">
            Live
          </span>
        </div>

        {/* Activity List */}
        <div className="flex flex-col gap-[8px]">
          {activities.map((activity) => (
            <div
              key={`${activity.name}-${activity.time}`}
              className="flex min-w-0 gap-[10px] rounded-[14px] border border-[#FFFFFF0D] bg-[#263649] p-[12px] sm:px-[16px] sm:py-[13px]"
            >
              {/* Avatar */}
              <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[6px] bg-[#2D455A] font-dm text-[14px] font-semibold text-[#E67E22]">
                {activity.initials}
              </div>

              {/* Details */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                  <div className="min-w-0">
                    <h3 className="break-words font-dm text-[14px] font-semibold text-[#FFFFFF]">
                      {activity.name}
                    </h3>

                    <p className="mt-[2px] font-dm text-[12px] text-[#8797AA]">
                      {activity.role}
                    </p>
                  </div>

                  <span className="shrink-0 font-dm text-[12px] tracking-[0.5px] text-[#91A0B3]">
                    {activity.time}
                  </span>
                </div>

                <ActivityStatus
                  type={activity.type}
                  status={activity.status}
                />

                {/* Browser and IP */}
                <div className="mt-[8px] flex flex-wrap gap-[6px]">
                  {[activity.browser, activity.ip].map((item) => (
                    <span
                      key={item}
                      className="break-all rounded-full border border-[#FFFFFF08] bg-[#304257] px-[8px] py-[3px] font-dm text-[11px] text-[#8191A5]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <aside className="min-w-0 overflow-hidden rounded-[14px] border border-[#FFFFFF0D] bg-[#1C2A38]">
        <div className="border-b border-[#FFFFFF0D] px-[16px] py-[16px]">
          <h2 className="font-dm text-[18px] font-semibold text-[#F0F4F8]">
            Quick Actions
          </h2>
        </div>

       <div className="flex flex-col gap-[7px] p-[16px]">
  {quickActions.map(({ label }) => (
    <button
      key={label}
      type="button"
      onClick={() => console.log(`${label} clicked`)}
      className="flex min-h-[35px] w-full items-center justify-center rounded-[9px] border border-[#FFFFFF14] bg-[#263649] px-[8px] py-[8px] font-dm text-[14px] font-medium text-[#F0F4F8] transition-colors hover:border-[#52708D] hover:bg-[#30445A] focus:outline-none focus:ring-2 focus:ring-[#52708D]"
    >
      <span>{label}</span>
    </button>
  ))}
</div>
      </aside>
    </section>
  );
}

export default AuthenticationActivity;
