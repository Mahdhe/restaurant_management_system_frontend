import Title from "../../../components/Cupons_tax/Common/title";
import Button from "../../../components/Cupons_tax/Common/buttonrow";
import Kpirow from "../../../components/Cupons_tax/Common/kpirow";
import TaxConfiguration from "../../../components/Cupons_tax/tax/taxrules";
import BillingReview from "../../../components/Cupons_tax/tax/taxbilling";



function Tax(){
    return(
        <div className="w-full min-w-0 min-h-[1158px] bg-[#0F1923]  p-6">
            <Title />
            <Button/>
            <Kpirow />

            <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[860px_1fr]">
            <TaxConfiguration />
            <BillingReview />   
            
      </div>
        </div>
    );
}

export default Tax;