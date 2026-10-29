import React, { useMemo, useState } from 'react'

import Pic1 from '../../../assets/orderBuildPics/cardIMG1.jpg'
import Pic2 from '../../../assets/orderBuildPics/cardIMG2.jpg'
import Pic3 from '../../../assets/orderBuildPics/cardIMG3.jpg'
import Pic4 from '../../../assets/orderBuildPics/cardIMG4.jpg'

// Menu data: add or remove items here, the UI updates itself
const MENU_ITEMS = [
    { id: 1, name: 'Strawberry Cheese Cake', price: 850, img: Pic1, available: true, veg: true, spicy: false },
    { id: 2, name: 'Garden Fresh Salad', price: 650, img: Pic2, available: true, veg: true, spicy: false },
    { id: 3, name: 'Fresh Lime Juice', price: 525, img: Pic3, available: true, veg: true, spicy: false },
    { id: 4, name: 'Grilled Chicken', price: 600, img: Pic4, available: true, veg: false, spicy: true },
]

// Filter chips: the width class is kept exactly as in your original design
const FILTERS = [
    { key: 'All', widthClass: 'w-[41px]', test: () => true },
    { key: 'Available', widthClass: 'w-[75px]', test: (item) => item.available },
    { key: 'Unavailable', widthClass: 'w-[75px]', test: (item) => !item.available },
    { key: 'Veg', widthClass: 'w-[75px]', test: (item) => item.veg },
    { key: 'Spicy', widthClass: 'w-[75px]', test: (item) => item.spicy },
]

const MenuArea = ({ onAddItem = () => {} }) => {
    const [search, setSearch] = useState('')
    const [activeFilter, setActiveFilter] = useState('All')

    const visibleItems = useMemo(() => {
        const query = search.trim().toLowerCase()
        const filter = FILTERS.find((f) => f.key === activeFilter)

        return MENU_ITEMS.filter(
            (item) => filter.test(item) && item.name.toLowerCase().includes(query)
        )
    }, [search, activeFilter])

    return (

        <section className="w-[700px] max-w-full h-[885px] gap-[10px] flex flex-col box-border">

            {/* search + filters */}
            <section className="w-[650px] max-w-full h-[100px] shrink-0 rounded-[14px] gap-[15px] flex flex-col box-border">

                <div className="w-full">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Search menu items"
                        className="w-[650px] max-w-full h-[40px] block box-border rounded-[10px] border-[1px] py-[8px] px-[12px] gap-[8px] bg-[#243447] border-[#FFFFFF24] font-[DM_Sans] text-[14px] leading-[100%] tracking-[0%] text-white placeholder:text-[#556070] outline-none focus:border-[#E67E224D]"
                        placeholder="Search Menu Items"
                    />
                </div>

                <div className="w-[450px] max-w-full h-[32px] gap-[8px] flex items-center overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                    {FILTERS.map(({ key, widthClass }) => {
                        const isActive = key === activeFilter

                        return (
                            <button
                                key={key}
                                onClick={() => setActiveFilter(key)}
                                className={`${widthClass} h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] transition flex items-center justify-center overflow-hidden ${
                                    isActive
                                        ? 'bg-[#E67E2214] border-[#E67E224D]'
                                        : 'bg-[#243447] border-[#FFFFFF14] hover:bg-[#E67E2214] hover:border-[#E67E224D]'
                                }`}
                            >
                                <p className={`font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] whitespace-nowrap ${isActive ? 'text-[#E67E22]' : 'text-[#8A9BB0]'}`}>
                                    {key}
                                </p>
                            </button>
                        )
                    })}

                </div>

            </section>

            {/* cards: fills the remaining height and scrolls inside the section */}
            <section className="w-[632px] max-w-full flex-1 min-h-0 py-[10px] gap-[10px] flex flex-wrap content-start max-sm:justify-center overflow-y-auto overflow-x-hidden box-border [scrollbar-width:thin] [scrollbar-color:#243447_transparent]">

                {visibleItems.length === 0 && (
                    <p className="font-[DM_Sans] text-[14px] text-[#8A9BB0]">No items match your search.</p>
                )}

                {visibleItems.map((item) => (
                    <div
                        key={item.id}
                        className={`w-[250px] max-w-full h-[212px] shrink-0 box-border rounded-[16px] p-[10px] bg-[#1C2A38] flex flex-col ${item.available ? '' : 'opacity-50'}`}
                    >

                        <div className="w-[230px] max-w-full h-[110px] shrink-0 rounded-t-[14px] overflow-hidden">
                            <img src={item.img} alt={item.name} className="block w-full h-full object-cover" />
                        </div>

                        <div className="w-[230px] max-w-full h-[82px] shrink-0 box-border rounded-b-[16px] border-[1px] py-[12px] px-[10px] gap-[8px] flex flex-col justify-center border-[#FFFFFF14]">

                            <div className="w-[210px] max-w-full min-w-0 h-[18px] gap-[4px] flex items-center">
                                <p className="w-[210px] max-w-full min-w-0 h-[18px] font-[DM_Sans] font-semibold text-[16px] leading-[18px] tracking-[0.8px] text-[#F0F4F8] truncate">
                                    {item.name}
                                </p>
                            </div>

                            <div className="w-[210px] max-w-full min-w-0 h-[32px] gap-[4px] flex justify-between items-center">

                                <h1 className="w-[174px] min-w-0 h-[18px] font-[DM_Sans] font-bold text-[22px] leading-[18px] tracking-[0.8px] text-[#E67E22] whitespace-nowrap truncate">
                                    LKR {item.price.toLocaleString()}
                                </h1>

                                <button
                                    onClick={() => onAddItem(item)}
                                    disabled={!item.available}
                                    aria-label={`Add ${item.name}`}
                                    className="w-[32px] h-[32px] shrink-0 rounded-[999px] bg-[#E67E22] text-center text-[15px] leading-none flex justify-center items-center text-white transition hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:active:scale-100"
                                >
                                    +
                                </button>

                            </div>
                        </div>

                    </div>
                ))}

            </section>

        </section>
    )
}

export default MenuArea