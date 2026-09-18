import React from 'react'

import Topbar from '../../../components/orderManagement/common/Topbar'
import Menubar from '../../../components/orderManagement/common/Menubar'
import TableOrderBar from '../../../components/orderManagement/orderBuild/TableOrderBar'
import MenuArea from '../../../components/orderManagement/orderBuild/MenuArea'
import CurrentOrderPanel from '../../../components/orderManagement/orderBuild/CurrentOrderPanel'



const OrderBuild = () => {
    return (
        <>
            {/* Main-Section */}
            <section className="w-full min-h-screen gap-[20px] flex flex-col">

                {/* sub-Section */}
                <section className="w-full h-full p-4 sm:p-8 bg-[#0F1923]">

                    {/* Topbar-section */}
                    <Topbar></Topbar>

                    {/* Menubar */}
                    <Menubar></Menubar>

                    {/* TableOrder */}
                    <TableOrderBar></TableOrderBar>

                    {/* HeroSection */}
                    <section className="w-[1132px] h-[869px] gap-[20px] flex py-5">

                        <MenuArea></MenuArea>

                        <CurrentOrderPanel></CurrentOrderPanel>

                    </section>

                </section>

            </section>

        </>
    )
}

export default OrderBuild
