import React from 'react'
import MenuHeader from '../../../components/menuManagement/commonMM/MenuHeader'
import RedirectingButtons from '../../../components/menuManagement/commonMM/RedirectingButtons'
import KPIrow from '../../../components/menuManagement/categoryManagement/KPIrow'
import CategoryList from '../../../components/menuManagement/categoryManagement/CategoryList'
import AddEditCategory from '../../../components/menuManagement/categoryManagement/AddEditCategory'
import CategoryRules from '../../../components/menuManagement/categoryManagement/CategoryRules'

const CategoryManagement = () => {
    return (
        <>
            {/* Main-Section */}
            < section className="w-full min-h-screen gap-[20px] flex flex-col" >

                {/* sub-Section */}
                < section className="w-full h-full p-4 sm:p-8 bg-[#0F1923]" >

                    <MenuHeader></MenuHeader>
                    <RedirectingButtons></RedirectingButtons>
                    <KPIrow></KPIrow>

                    {/* MainGrid */}
                    <section className="w-[1132px] h-[576px] gap-[20px] flex">

                        {/* LeftBox */}
                        <section className="w-[810px] h-[541px] gap-[20px] flex">

                            <CategoryList></CategoryList>

                        </section>

                        {/* RightBox */}
                        <section className="w-[302px] h-[576px] gap-[20px] flex flex-col">

                            <AddEditCategory></AddEditCategory>
                            <CategoryRules></CategoryRules>

                        </section>

                    </section>

                </section>

            </section>

        </>
    )
}

export default CategoryManagement
