import React from 'react'

import Topbar from '../../../components/orderManagement/common/Topbar'
import Menubar from '../../../components/orderManagement/common/Menubar';
import Searchbar from '../../../components/orderManagement/menubrowse/Searchbar';
import Categories from '../../../components/orderManagement/menubrowse/Categories';
import Cards from '../../../components/orderManagement/menubrowse/Cards';

const MenuBrowse = (props) => {
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

export default MenuBrowse