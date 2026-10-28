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
            <section className="w-full min-w-0 min-h-screen gap-[20px] flex flex-col">

                {/* sub-Section */}
                <section className="w-full min-w-0 h-full flex-1 p-4 sm:p-8 gap-[12px] flex flex-col bg-[#0F1923] box-border">

                    <MenuHeader />
                    <RedirectingButtons />
                    <KPIrow />

                    {/* MainGrid */}
                    <section className="w-[1200px] max-w-full min-w-0 h-[576px] max-[1439px]:h-auto gap-[20px] flex max-[1439px]:flex-col items-start">

                        {/* LeftBox */}
                        <section className="w-[875px] max-w-full min-w-0 h-[541px] max-[1439px]:h-auto gap-[20px] flex">

                            <CategoryList />

                        </section>

                        {/* RightBox */}
                        <section className="w-[302px] max-w-full shrink-0 h-[576px] max-[1439px]:h-auto gap-[20px] flex flex-col">

                            <AddEditCategory />
                            <CategoryRules />

                        </section>

                    </section>

                </section>

            </section>
        </>
    )
}

export default CategoryManagement