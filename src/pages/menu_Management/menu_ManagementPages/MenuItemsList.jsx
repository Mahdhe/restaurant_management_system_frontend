import React from 'react'
import MenuHeader from '../../../components/menuManagement/commonMM/MenuHeader'
import FilterGroupButtons from '../../../components/menuManagement/commonMM/FilterGroupButtons'
import RedirectingButtons from '../../../components/menuManagement/commonMM/RedirectingButtons'
import Cards from '../../../components/menuManagement/menuItemsList/Cards'
import MenuItemTable from '../../../components/menuManagement/menuItemsList/MenuItemTable'
import QuickEditTable from '../../../components/menuManagement/menuItemsList/QuickEditTable'
import MenuHealthTable from '../../../components/menuManagement/menuItemsList/MenuHealthTable'
import KPImenuItemsList from '../../../components/menuManagement/menuItemsList/KPImenuItemsList'

const MenuItemsList = () => {
  return (
    <>
      {/* Main-Section */}
      <section className="w-full min-w-0 min-h-screen gap-[20px] flex flex-col">

        {/* sub-Section */}
        <section className="w-full min-w-0 h-full flex-1 p-4 sm:p-8 gap-[12px] flex flex-col bg-[#0F1923] box-border">

          <MenuHeader />
          <RedirectingButtons />
          <KPImenuItemsList />
          <FilterGroupButtons />

          {/* Main-Grid */}
          <section className="flex max-[1439px]:flex-col items-start w-[1200px] max-w-full min-w-0 h-[862px] max-[1439px]:h-auto gap-[20px]">

            {/* left-box */}
            <div className="flex w-[880px] max-w-full min-w-0 h-[862px] max-[1439px]:h-auto gap-[20px]">
              {/* Menu-Card */}
              <div className="flex flex-col w-[880px] max-w-full min-w-0 h-[970px] max-[1439px]:h-auto gap-[20px]">
                <Cards />
                <MenuItemTable />
              </div>

            </div>

            {/* Right-box */}
            <div className="flex flex-col w-[292px] max-w-full shrink-0 h-[616px] max-[1439px]:h-auto gap-[20px]">

              <QuickEditTable />
              <MenuHealthTable />

            </div>

          </section>

        </section>

      </section>

    </>
  )
}

export default MenuItemsList