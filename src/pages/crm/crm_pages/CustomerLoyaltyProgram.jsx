import React from 'react'
import CRM_header from '../../../components/crmComponents/commonCRM/CRM_header'
import RedirectButtons from '../../../components/crmComponents/commonCRM/RedirectButtons'
import KPIrowLoyalty from '../../../components/crmComponents/Loyalty Program/KPIrowLoyalty'
import LoyaltyCard from '../../../components/crmComponents/Loyalty Program/LoyaltyCard'
import RewardHistory from '../../../components/crmComponents/Loyalty Program/RewardHistory'

const CustomerLoyaltyProgram = () => {
    return (
        <>
            {/* Main-Section */}
            <section className="w-full min-w-0 h-[1184px] max-[1439px]:h-auto min-h-screen gap-[20px] flex flex-col">

                {/* sub-Section */}
                <section className="w-full min-w-0 h-full flex-1 p-4 sm:p-8 gap-[12px] flex flex-col bg-[#0F1923] box-border">

                    <CRM_header />
                    <RedirectButtons />

                    <KPIrowLoyalty />

                    {/* Content */}
                    <section className="w-[1200px] max-w-full min-w-0 h-[774px] max-[1439px]:h-auto gap-[20px] flex flex-col">

                        <LoyaltyCard />
                        <RewardHistory />

                    </section>

                </section>

            </section>
        </>
    )
}

export default CustomerLoyaltyProgram