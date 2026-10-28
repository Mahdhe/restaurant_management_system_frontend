import React from 'react'
import CRM_header from '../../../components/crmComponents/commonCRM/CRM_header'
import RedirectButtons from '../../../components/crmComponents/commonCRM/RedirectButtons'
import OrderHistoryTable from '../../../components/crmComponents/customerHistory/OrderHistoryTable'
import KPIrow from '../../../components/crmComponents/customerHistory/KPIrow'

const CustomerHistory = () => {
    return (
        <>
            {/* Main-Section */}
            < section className="w-full min-h-screen gap-[20px] flex flex-col" >

                {/* sub-Section */}
                < section className="w-full h-full p-4 sm:p-8 bg-[#0F1923]" >

                    <CRM_header></CRM_header>
                    <RedirectButtons></RedirectButtons>

                    <KPIrow></KPIrow>
                    <OrderHistoryTable></OrderHistoryTable>

                </section>

            </section>

        </>
    )
}

export default CustomerHistory
