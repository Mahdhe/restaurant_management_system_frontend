import React from 'react'

import Topbar from '../components/commonOM/Topbar'
import Menubar from '../components/commonOM/Menubar';
import Searchbar from '../components/menuBrowseOM/Searchbar';
import Categories from '../components/menuBrowseOM/Categories';
import Cards from '../components/menuBrowseOM/Cards';

const OrderManagementMenuBrowse = (props) => {
  return (
    <>
      {/* Main-Section */}
      <section className="w-full min-h-screen gap-[20px] flex flex-col">

        {/* sub-Section */}
        <section className="w-full h-full p-4 sm:p-8 bg-[#0F1923]">

          {/* Topbar-section */}
          <Topbar />

          {/* Menubar */}
          <Menubar />

          {/* Search-menu-items */}
          <Searchbar />

          {/* Hero-section */}
          <div className="flex flex-col lg:flex-row gap-4">

            {/* CATEGORIES */}
            <Categories />

            {/* Cards */}
            <Cards />

          </div>

        </section>

      </section>
    </>
  )
}

export default OrderManagementMenuBrowse