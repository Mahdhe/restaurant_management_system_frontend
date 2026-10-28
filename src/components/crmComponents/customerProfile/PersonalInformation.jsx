import React from 'react'

const INPUT =
    'w-full min-w-0 h-full bg-transparent outline-none font-[DM_Sans] text-[14px] max-sm:text-[16px] leading-[18px] tracking-[0%] text-[#F0F4F8] placeholder:text-[#556070]'

// wrap / box / wrapH / boxH carry the exact width and height classes from your original markup
const Field = ({
    id,
    label,
    placeholder,
    type = 'text',
    wrap = 'w-[370px]',
    box = 'w-[370px]',
    wrapH = 'h-[66px]',
    boxH = 'h-[40px]',
    multiline = false,
}) => (
    <div className={`${wrap} max-w-full max-sm:w-full min-w-0 ${wrapH} max-sm:h-auto gap-[8px] flex flex-col`}>

        <label htmlFor={id} className="font-[DM_Sans] text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0%] text-[#8A9BB0]">{label}</label>

        <div className={`${box} max-w-full max-sm:w-full min-w-0 ${boxH} rounded-[10px] border-[1px] py-[8px] px-[12px] gap-[8px] flex ${multiline ? 'items-start' : 'items-center'} bg-[#243447] border-[#FFFFFF24] box-border focus-within:border-[#E67E224D]`}>
            {multiline ? (
                <textarea id={id} placeholder={placeholder} className={`${INPUT} resize-none`} />
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className={`${INPUT} ${type === 'date' ? '[color-scheme:dark] [&::-webkit-calendar-picker-indicator]:cursor-pointer' : ''}`}
                />
            )}
        </div>

    </div>
)

const ROW = 'w-[752px] max-w-full shrink-0 py-[10px] gap-[12px] flex max-sm:flex-col bg-[#1C2A38] box-border'

const PersonalInformation = () => {
    return (
        <section className="w-[812px] max-w-full min-w-0 h-[675px] max-sm:h-auto gap-[20px] flex">

            <div className="w-[812px] max-w-full min-w-0 h-[675px] max-sm:h-auto gap-[16px] flex flex-col rounded-[14px] border-[1px] p-[20px] max-sm:p-[14px] bg-[#1C2A38] border-[#FFFFFF14] box-border">

                {/* Header */}
                <div className="w-[772px] max-w-full min-w-0 h-[30px] shrink-0 py-[3px] flex gap-[10px] justify-between items-center box-border">

                    <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#F0F4F8]">Personal Information</h1>

                    <button type="button" className="w-[105px] h-[24px] shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex bg-[#E67E220F] border-[#E67E224D] justify-center items-center box-border">
                        <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E67E22]">VIP Customer</span>
                    </button>

                </div>

                {/* Form */}
                <div className="w-[772px] max-w-full min-w-0 h-[589px] max-sm:h-auto p-[10px] max-sm:p-0 gap-[10px] flex flex-col box-border">

                    <div className={`${ROW} h-[86px] max-sm:h-auto`}>
                        <Field id="full-name" label="FULL NAME" placeholder="e.g. Kasun Perera" />
                        <Field id="phone" label="PHONE" type="tel" placeholder="+94 77 000 0000" />
                    </div>

                    <div className={`${ROW} h-[86px] max-sm:h-auto`}>
                        <Field id="email" label="EMAIL ADDRESS" type="email" placeholder="name@restro.lk" />
                        <Field id="dob" label="DATE OF BIRTH" type="date" />
                    </div>

                    <div className={`${ROW} h-[86px] max-sm:h-auto`}>
                        <Field id="address" label="ADDRESS" wrap="w-[752px]" box="w-[752px]" placeholder="Street address, city" />
                    </div>

                    <div className={`${ROW} h-[86px] max-sm:h-auto`}>
                        <Field id="emergency" label="EMERGENCY CONTACT" type="tel" placeholder="+94 77 000 0000" />
                        <Field id="contact-method" label="PREFERRED CONTACT METHOD" placeholder="Whatsapp" />
                    </div>

                    <div className={`${ROW} h-[115px] max-sm:h-auto`}>
                        <Field
                            id="notes"
                            label="NOTES"
                            wrap="w-[752px]"
                            box="w-[752px]"
                            wrapH="h-[115px]"
                            boxH="h-[89px]"
                            multiline
                            placeholder="Regular Friday night guest, prefers window-side seating and quiet corner tables."
                        />
                    </div>

                    <div className="w-[702px] max-w-full h-[60px] max-sm:h-auto shrink-0 py-[10px] gap-[12px] flex justify-end items-center box-border">

                        <button type="button" className="w-[60px] h-[40px] shrink-0 rounded-[10px] border-[1px] py-[8px] px-[16px] gap-[8px] flex items-center justify-center bg-[#243447] border-[#FFFFFF24] box-border transition hover:bg-[#2D4157]">
                            <span className="whitespace-nowrap font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#F0F4F8]">Cancel</span>
                        </button>

                        <button type="button" className="w-[135px] h-[40px] shrink-0 rounded-[10px] py-[8px] px-[16px] gap-[12px] flex items-center justify-center bg-[#E67E22] box-border transition hover:brightness-110">
                            <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#F0F4F8]">Save Customer</span>
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default PersonalInformation