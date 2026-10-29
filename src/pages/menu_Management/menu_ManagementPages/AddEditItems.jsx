import React from 'react'
import MenuHeader from '../../../components/menuManagement/commonMM/MenuHeader'
import RedirectingButtons from '../../../components/menuManagement/commonMM/RedirectingButtons'
import FilterGroupButtons from '../../../components/menuManagement/commonMM/FilterGroupButtons'
import AddEditMenuItemTable from '../../../components/menuManagement/add-EditItem/AddEditMenuItemTable'
import ImageUpload from '../../../components/menuManagement/add-EditItem/ImageUpload'
import LivePreview from '../../../components/menuManagement/add-EditItem/LivePreview'
import Publishing from '../../../components/menuManagement/add-EditItem/Publishing'
import KPIaddEditItem from '../../../components/menuManagement/add-EditItem/KPIadd-EditItem'

const AddEditItems = () => {
    return (
        <>
            {/* Main-Section */}
            <section className="w-full min-w-0 min-h-screen gap-[20px] flex flex-col">

                {/* sub-Section */}
                <section className="w-full min-w-0 h-full flex-1 p-4 sm:p-8 gap-[12px] flex flex-col bg-[#0F1923] box-border">

                    <MenuHeader />
                    <RedirectingButtons />
                    <KPIaddEditItem />
                    <FilterGroupButtons />

                    {/* MainGrid */}
                    <section className="flex max-[1439px]:flex-col items-start w-[1200px] max-w-full min-w-0 h-[795px] max-[1439px]:h-auto gap-[20px]">

                        {/* left-box */}
                        <div className="flex w-[880px] max-w-full min-w-0 h-[795px] max-[1439px]:h-auto gap-[20px]">
                            {/* MenuCard */}
                            <div className="flex flex-col w-[880px] max-w-full min-w-0 h-[795px] max-[1439px]:h-auto gap-[20px]">
                                <AddEditMenuItemTable />
                                <ImageUpload />
                            </div>
                        </div>

                        {/* Right-box */}
                        <div className="flex flex-col w-[302px] max-w-full shrink-0 h-[656px] max-[1439px]:h-auto gap-[20px]">
                            <LivePreview />
                            <Publishing />
                        </div>

                    </section>

                </section>

            </section>
        </>
    )
}

export default AddEditItems