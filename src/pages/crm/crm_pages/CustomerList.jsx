import React from 'react'
import CRM_header from '../../../components/crmComponents/commonCRM/CRM_header'
import RedirectButtons from '../../../components/crmComponents/commonCRM/RedirectButtons'
import SearchCustomers from '../../../components/crmComponents/customerList/SearchCustomers'
import FilterButtons from '../../../components/crmComponents/customerList/FilterButtons'
import CustomerDirectory from '../../../components/crmComponents/customerList/CustomerDirectory'

const CustomerList = () => {
    return (
        <>


        {/* Main-Section */ }
        < section className = "w-full min-h-screen gap-[20px] flex flex-col" >

            {/* sub-Section */ }
            < section className = "w-full h-full p-4 sm:p-8 bg-[#0F1923]" >

            <CRM_header></CRM_header>
            <RedirectButtons></RedirectButtons>

            <SearchCustomers></SearchCustomers>

            <FilterButtons></FilterButtons>

            <CustomerDirectory></CustomerDirectory>

            </section >
                
        </section >

         </>
  )
}

export default CustomerList
