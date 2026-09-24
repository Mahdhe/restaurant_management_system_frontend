import Title from "../../../components/Cupons_tax/Common/title";
import Button from "../../../components/Cupons_tax/Common/buttonrow";
import Kpirow from "../../../components/Cupons_tax/Common/kpirow";
import TaxConfiguration from "../../../components/Cupons_tax/tax/taxrules";


function Tax(){
    return(
        <div className="w-full min-w-0 min-h-[1158px] bg-[#0F1923]  p-6">
            <Title />
            <Button/>
            <Kpirow />
            <TaxConfiguration />
        </div>
    );
}

export default Tax;