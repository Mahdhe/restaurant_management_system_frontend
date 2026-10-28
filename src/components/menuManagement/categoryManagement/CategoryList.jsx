import React from 'react'

import Img1 from '../../../assets/menuManagementImages/categoryImages/ListIMG.jpg'

const categories = [
    { id: '01', name: 'Starters', itemCount: 8, active: true, img: Img1 },
    { id: '02', name: 'Rice & Curry', itemCount: 12, active: true, img: Img1 },
    { id: '03', name: 'Pasta & Noodles', itemCount: 5, active: true, img: Img1 },
    { id: '04', name: 'Desserts', itemCount: 10, active: true, img: Img1 },
    { id: '05', name: 'Beverages', itemCount: 6, active: true, img: Img1 },
]

const CategoryCard = ({ id, name, itemCount, active, img }) => {
    return (
        <div className="w-[830px] max-w-full min-w-0 h-[75px] shrink-0 rounded-[14px] border-[1px] gap-[12px] flex flex-col border-[#FFFFFF14] bg-[#243447] box-border">

            <div className="w-[830px] max-w-full min-w-0 h-[36px] shrink-0 pt-[10px] gap-[10px] flex justify-between items-center px-3 box-border">

                <div className="flex flex-1 min-w-0 gap-3 max-sm:gap-2 items-center">
                    <p className="shrink-0 font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">{id}</p>
                    <img src={img} alt="" className="w-[24px] h-[24px] shrink-0 rounded-[6px] object-cover" />
                    <h3 className="min-w-0 truncate font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#F0F4F8]">{name}</h3>
                </div>

                <button
                    type="button"
                    className={`shrink-0 box-border border-[1px] rounded-[999px] py-[4px] px-[9px] flex items-center justify-center ${
                        active
                            ? 'border-[#27AE604D] bg-[#27AE601F]'
                            : 'border-[#EB57574D] bg-[#EB57571F]'
                    }`}
                >
                    <p
                        className={`whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] ${
                            active ? 'text-[#27AE60]' : 'text-[#EB5757]'
                        }`}
                    >
                        {active ? 'Active' : 'Inactive'}
                    </p>
                </button>

            </div>

            <p className="shrink-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0] px-3">
                {itemCount} menu items
            </p>

        </div>
    )
}

const CategoryList = () => {
    return (
        <>
            <section className="w-[870px] max-w-full min-w-0 h-[541px] rounded-[14px] border-[1px] gap-[16px] flex flex-col bg-[#1C2A38] border-[#FFFFFF14] p-[20px] max-sm:p-[14px] box-border overflow-hidden">

                {/* Header */}
                <div className="flex justify-between items-center w-[825px] max-w-full min-w-0 h-[46px] shrink-0 py-[3px] gap-[10px] box-border">
                    <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#F0F4F8]">Category List</h1>
                    <button type="button" className="shrink-0 flex items-center justify-center bg-[#E67E22] rounded-[10px] py-[8px] px-[16px] max-sm:px-[12px] box-border transition hover:brightness-110">
                        <p className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#F0F4F8]">+ Add Category</p>
                    </button>
                </div>

                {/* Lists */}
                <div className="flex flex-col gap-[12px] min-w-0 shrink-0">
                    {categories.map((cat) => (
                        <CategoryCard key={cat.id} {...cat} />
                    ))}
                </div>

            </section>
        </>
    )
}

export default CategoryList