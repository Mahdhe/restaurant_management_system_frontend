import React from 'react'
import CRM_header from '../../../components/crmComponents/commonCRM/CRM_header'
import RedirectButtons from '../../../components/crmComponents/commonCRM/RedirectButtons'
import InfoCards from '../../../components/crmComponents/customerDashboard/InfoCards'
import CustomerOverview from '../../../components/crmComponents/customerDashboard/CustomerOverview'
import CustomerGrowth from '../../../components/crmComponents/customerDashboard/CustomerGrowth'
import RecentCustomerActivity from '../../../components/crmComponents/customerDashboard/RecentCustomerActivity'
import QuickActions from '../../../components/crmComponents/customerDashboard/QuickActions'
import CustomerStatistics from '../../../components/crmComponents/customerDashboard/CustomerStatistics'
import UpcomingBirthdays from '../../../components/crmComponents/customerDashboard/UpcomingBirthdays'
import CustomerSatisfaction from '../../../components/crmComponents/customerDashboard/CustomerSatisfaction'

const CustomerDashboard = () => {
    return (
        <>
            {/* Main-Section */}
            < section className="w-full min-h-screen gap-[20px] flex flex-col" >

                {/* sub-Section */}
                < section className="w-full h-full p-4 sm:p-8 bg-[#0F1923]" >

                <CRM_header></CRM_header>
                <RedirectButtons></RedirectButtons>

                <InfoCards></InfoCards>

                {/* MainBox */}
                <div className="flex w-[1132px] h-[1138px] gap-[20px]">

                    {/* leftBox */}
                    <div className="flex flex-col w-[812px] h-[1138px] gap-[20px]">

                        <CustomerOverview></CustomerOverview>
                        <CustomerGrowth></CustomerGrowth>
                        <RecentCustomerActivity></RecentCustomerActivity>

                    </div>

                    {/* RightBox */}
                    <div className="flex flex-col w-[300px] h-[1018px] gap-[20px]">

                        <QuickActions></QuickActions>
                        <CustomerStatistics></CustomerStatistics>
                        <UpcomingBirthdays></UpcomingBirthdays>
                        <CustomerSatisfaction></CustomerSatisfaction>


                    </div>

                </div>
                
                </section>

            </section>

        </>
    )
}

export default CustomerDashboard
