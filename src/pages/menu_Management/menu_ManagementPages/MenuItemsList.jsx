import React from 'react'
import MenuHeader from '../../../components/menuManagement/menuItemsList/MenuHeader'
import KPIrow from '../../../components/menuManagement/menuItemsList/KPIrow'
import FilterGroupButtons from '../../../components/menuManagement/menuItemsList/FilterGroupButtons'
import RedirectingButtons from '../../../components/menuManagement/menuItemsList/RedirectingButtons'
import Cards from '../../../components/menuManagement/menuItemsList/Cards'
import MenuItemTable from '../../../components/menuManagement/menuItemsList/MenuItemTable'
import QuickEditTable from '../../../components/menuManagement/menuItemsList/QuickEditTable'
import MenuHealthTable from '../../../components/menuManagement/menuItemsList/MenuHealthTable'

const MenuItemsList = () => {
  return (
    <>
      {/* Main-Section */}
      < section className="w-full min-h-screen gap-[20px] flex flex-col" >

        {/* sub-Section */}
        < section className="w-full h-full p-4 sm:p-8 bg-[#0F1923]" >

          <MenuHeader></MenuHeader>
          <RedirectingButtons></RedirectingButtons>
          <KPIrow></KPIrow>
          <FilterGroupButtons></FilterGroupButtons>

          {/* Main-Grid */}
          <section className="flex w-[1132px] h-[862px] gap-[20px]">

            {/* left-box */}
            <div className="flex w-[810px] h-[862px] gap-[20px]">
              {/* Menu-Card */}
              <div className="flex flex-col w-[810px] h-[970px] gap-[20px]">
                <Cards></Cards>
                <MenuItemTable></MenuItemTable>
              </div>

            </div>

            {/* Right-box */}
            <div className="flex flex-col w-[292px] h-[616px] gap-[20px]">

              <QuickEditTable></QuickEditTable>
              <MenuHealthTable></MenuHealthTable>

            </div>

          </section>

        </section >

      </section >

    </>
  )
}

export default MenuItemsList
