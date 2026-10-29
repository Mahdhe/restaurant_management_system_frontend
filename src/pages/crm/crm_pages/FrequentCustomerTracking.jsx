import React from 'react'
import CRM_header from '../../../components/crmComponents/commonCRM/CRM_header'
import RedirectButtons from '../../../components/crmComponents/commonCRM/RedirectButtons'
import KPIrowTracking from '../../../components/crmComponents/frequentCustomerTracking/KPIrowTracking'
import RankTable from '../../../components/crmComponents/frequentCustomerTracking/RankTable'
import RecentCustomerActivities from '../../../components/crmComponents/frequentCustomerTracking/RecentCustomerActivities'
import RecentReservations from '../../../components/crmComponents/frequentCustomerTracking/RecentReservations'
import LoyaltySummary from '../../../components/crmComponents/frequentCustomerTracking/LoyaltySummary'
import BirthdayReminders from '../../../components/crmComponents/frequentCustomerTracking/BirthdayReminders'
import CustomerInsights from '../../../components/crmComponents/frequentCustomerTracking/CustomerInsights'
import QuickStatistics from '../../../components/crmComponents/frequentCustomerTracking/QuickStatistics'

const FrequentCustomerTracking = () => {
    return (
        <>
            {/* Main-Section */}
            <section className="w-full min-w-0 min-h-screen gap-[20px] flex flex-col">

                {/* sub-Section */}
                <section className="w-full min-w-0 h-full flex-1 p-4 sm:p-8 gap-[12px] flex flex-col bg-[#0F1923] box-border">

                    <CRM_header />
                    <RedirectButtons />

                    <KPIrowTracking />

                    {/* MainGrid */}
                    <section className="w-[1200px] max-w-full min-w-0 h-[1162px] max-[1439px]:h-auto gap-[20px] flex max-[1439px]:flex-col items-start mt-6">

                        {/* left-box */}
                        <div className="w-[900px] max-w-full min-w-0 h-[882px] max-[1439px]:h-auto gap-[10px] flex flex-col">

                            <RankTable />

                        </div>

                        {/* Right-box */}
                        <div className="w-[300px] max-w-full shrink-0 h-[1162px] max-[1439px]:h-auto gap-[20px] flex flex-col">

                            <RecentCustomerActivities />
                            <RecentReservations />
                            <LoyaltySummary />
                            <BirthdayReminders />
                            <CustomerInsights />
                            <QuickStatistics />

                        </div>

                    </section>

                </section>

            </section>
        </>
    )
}

export default FrequentCustomerTracking