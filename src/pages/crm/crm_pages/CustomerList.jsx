
import React from 'react';

import CRM_header from '../../../components/crmComponents/commonCRM/CRM_header';
import RedirectButtons from '../../../components/crmComponents/commonCRM/RedirectButtons';
import SearchCustomers from '../../../components/crmComponents/customerList/SearchCustomers';
import FilterButtons from '../../../components/crmComponents/customerList/FilterButtons';
import CustomerDirectory from '../../../components/crmComponents/customerList/CustomerDirectory';

const CustomerList = () => {
  return (
    <main className="min-h-screen w-full min-w-0 bg-[#0F1923]">
      <section className="mx-auto flex w-full min-w-0 flex-col gap-4 p-3 sm:gap-5 sm:p-5 md:p-6 lg:gap-6 lg:p-9">

        {/* CRM Header */}
        <div className="w-full min-w-0">
          <CRM_header />
        </div>

        {/* Navigation Buttons */}
        <div className="w-full min-w-0">
          <RedirectButtons />
        </div>

        {/* Search Customers */}
        <div className="w-full min-w-0">
          <SearchCustomers />
        </div>

        {/* Filter Buttons */}
        <div className="w-full min-w-0">
          <FilterButtons />
        </div>

        {/* Customer Directory */}
        <div className="w-full min-w-0">
          <CustomerDirectory />
        </div>

      </section>
    </main>
  );
};

export default CustomerList
