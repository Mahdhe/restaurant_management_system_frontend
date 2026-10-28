import React from 'react'
import CRM_header from '../../../components/crmComponents/commonCRM/CRM_header'
import RedirectButtons from '../../../components/crmComponents/commonCRM/RedirectButtons'
import PersonalInformation from '../../../components/crmComponents/customerProfile/PersonalInformation'
import VisitInformation from '../../../components/crmComponents/customerProfile/VisitInformation'
import CustomerNote from '../../../components/crmComponents/customerProfile/CustomerNote'
import MemberDetails from '../../../components/crmComponents/customerProfile/MemberDetails'

const CustomerProfile = () => {
    return (
        <>
            {/* Main-Section */}
            <section className="w-full min-w-0 min-h-screen gap-[20px] flex flex-col">

                {/* sub-Section */}
                <section className="w-full min-w-0 h-full flex-1 p-4 sm:p-8 gap-[12px] flex flex-col bg-[#0F1923] box-border">

                    <CRM_header />
                    <RedirectButtons />

                    {/* MainGrid */}
                    <section className="w-[1500px] max-w-full min-w-0 h-[1004px] max-[1439px]:h-auto gap-[10px] flex max-[1439px]:flex-col items-start mt-6">

                        {/* left-box */}
                        <div className="w-[1100px] max-w-full min-w-0 h-[1004px] max-[1439px]:h-auto gap-[20px] flex flex-col">

                            <PersonalInformation />
                            <VisitInformation />

                        </div>

                        {/* Right-box */}
                        <div className="w-[400px] max-w-full min-w-0 h-[1004px] max-[1439px]:h-auto gap-[20px] flex flex-col">

                            <MemberDetails />
                            <CustomerNote />

                        </div>

                    </section>

                </section>

            </section>
        </>
    )
}

export default CustomerProfile