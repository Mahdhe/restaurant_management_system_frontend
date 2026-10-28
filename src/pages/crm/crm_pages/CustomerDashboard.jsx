
import React from 'react';

import CRM_header from '../../../components/crmComponents/commonCRM/CRM_header';
import RedirectButtons from '../../../components/crmComponents/commonCRM/RedirectButtons';
import InfoCards from '../../../components/crmComponents/customerDashboard/InfoCards';
import CustomerOverview from '../../../components/crmComponents/customerDashboard/CustomerOverview';
import CustomerGrowth from '../../../components/crmComponents/customerDashboard/CustomerGrowth';
import RecentCustomerActivity from '../../../components/crmComponents/customerDashboard/RecentCustomerActivity';
import QuickActions from '../../../components/crmComponents/customerDashboard/QuickActions';
import CustomerStatistics from '../../../components/crmComponents/customerDashboard/CustomerStatistics';
import UpcomingBirthdays from '../../../components/crmComponents/customerDashboard/UpcomingBirthdays';
import CustomerSatisfaction from '../../../components/crmComponents/customerDashboard/CustomerSatisfaction';

const CustomerDashboard = () => {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#0F1923] text-white">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-5 px-3 py-4 sm:gap-6 sm:px-5 sm:py-6 lg:px-8">

        {/* Dashboard Header */}
        <header className="flex w-full min-w-0 flex-col gap-4 sm:gap-5">
          <CRM_header />
          <RedirectButtons />
        </header>

        {/* Customer KPI Cards */}
        <section className="w-full min-w-0">
          <InfoCards />
        </section>

        {/* Dashboard Main Content */}
        <section className="grid w-full min-w-0 grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">

          {/* Left Column */}
          <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
            <CustomerOverview />
            <CustomerGrowth />
            <RecentCustomerActivity />
          </div>

          {/* Right Sidebar */}
          <aside className="flex min-w-0 flex-col gap-5 sm:gap-6">
            <QuickActions />
            <CustomerStatistics />
            <UpcomingBirthdays />
            <CustomerSatisfaction />
          </aside>

        </section>

      </div>
    </main>
  );
};

export default CustomerDashboard
