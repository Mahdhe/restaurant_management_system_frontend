import React from 'react'
import MenuHeader from '../../../components/menuManagement/commonMM/MenuHeader'
import RedirectingButtons from '../../../components/menuManagement/commonMM/RedirectingButtons'
import KPIrow from '../../../components/menuManagement/commonMM/KPIrow'
import FilterGroupButtons from '../../../components/menuManagement/commonMM/FilterGroupButtons'
import AddEditMenuItemTable from '../../../components/menuManagement/add-EditItem/AddEditMenuItemTable'
import ImageUpload from '../../../components/menuManagement/add-EditItem/ImageUpload'
import LivePreview from '../../../components/menuManagement/add-EditItem/LivePreview'
import Publishing from '../../../components/menuManagement/add-EditItem/Publishing'

const AddEditItems = () => {
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

                    {/* MainGrid */}
                    <section className="flex w-[1132px] h-[795px] gap-[20px]">

                        {/* left-box */}
                        <div className="flex w-[810px] h-[795px] gap-[20px]">
                            {/* MenuCard */}
                            <div className="flex flex-col w-[810px] h-[795px] gap-[20px]">
                                <AddEditMenuItemTable></AddEditMenuItemTable>
                                <ImageUpload></ImageUpload>
                            </div>
                        </div>

                        {/* Right-box */}
                        <div className="flex flex-col w-[302px] h-[656px] gap-[20px]">
                            <LivePreview></LivePreview>
                            <Publishing></Publishing>
                        </div>

                    </section>

                </section>

            </section>


        </>
    )
}

export default AddEditItems
