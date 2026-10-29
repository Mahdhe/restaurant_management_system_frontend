import Titlesection from "../../components/Authentication/title";
import Kpirow from "../../components/Authentication/kpirow";
import SecurityStatus from "../../components/Authentication/securitystatus";
import OtpVerification from "../../components/Authentication/otpsecssion";
import AuthenticationActivity from "../../components/Authentication/authenticationactivity";
import AuthenticationLog from "../../components/Authentication/log";
import SecurityDashboard from "../../components/Authentication/securitydasshboard";

function Authenticationandsecurity() {
  return (
    <div className="w-full min-w-0 min-h-[1158px] bg-[#0F1923]  p-6">
      <Titlesection />
      <Kpirow />
      <SecurityStatus />
      <OtpVerification />
      <AuthenticationActivity />
      <AuthenticationLog />
      <SecurityDashboard />
    </div>
  );
}

export default Authenticationandsecurity;
