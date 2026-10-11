import React from 'react'

import Img1 from '../../../assets/menuManagementImages/categoryImages/ListIMG.jpg'

const categories = [
    { id: '01', name: 'Starters', itemCount: 8, active: true, img: Img1 },
    { id: '02', name: 'Main Course', itemCount: 12, active: true, img: Img1 },
    { id: '03', name: 'Desserts', itemCount: 5, active: true, img: Img1 },
    { id: '04', name: 'Beverages', itemCount: 10, active: true, img: Img1 },
    { id: '05', name: 'Sides', itemCount: 6, active: true, img: Img1 },
]

const CategoryCard = ({ id, name, itemCount, active, img }) => {
    return (
        <div className="w-[770px] h-[75px] rounded-[14px] border-[1px] gap-[12px] flex flex-col border-[#FFFFFF14] bg-[#243447]">

            <div className="w-[750px] h-[36px] pt-[10px] gap-[10px] flex justify-between items-center px-3">

                <div className="flex gap-3 items-center">
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">{id}</p>
                    <img src={img} alt="" className="w-[24px] h-[24px] rounded-[6px]" />
                    <h3 className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8]">{name}</h3>
                </div>

                <button
                    className={`border-[1px] rounded-[999px] py-[4px] px-[9px] flex items-center justify-center ${
                        active
                            ? 'border-[#27AE604D] bg-[#27AE601F]'
                            : 'border-[#EB57574D] bg-[#EB57571F]'
                    }`}
                >
                    <p
                        className={`font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] ${
                            active ? 'text-[#27AE60]' : 'text-[#EB5757]'
                        }`}
                    >
                        {active ? 'Active' : 'Inactive'}
                    </p>
                </button>

            </div>

            <p className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0] px-2">
                {itemCount} menu items
            </p>

        </div>
    )
}

const CategoryList = () => {
    return (
        <>
            <section className="w-[810px] h-[541px] rounded-[14px] border-[1px] gap-[16px] flex flex-col bg-[#1C2A38] border-[#FFFFFF14] p-[20px] ">

                {/* Header */}
                <div className="flex justify-between items-center w-[770px] h-[46px] py-[3px] gap-[10px]">
                    <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Category List</h1>
                    <button className="bg-[#E67E22] rounded-[10px] py-[8px] px-[16px]">
                        <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">+ Add Category</p>
                    </button>
                </div>

                {/* Lists */}
                <div className="flex flex-col gap-[12px]">
                    {categories.map((cat) => (
                        <CategoryCard key={cat.id} {...cat} />
                    ))}
                </div>

            </section>
        </>
    )
}

export default CategoryList