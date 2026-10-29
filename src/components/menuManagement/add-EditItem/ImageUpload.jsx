import React, { useRef, useState } from 'react'

const UploadIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="shrink-0" aria-hidden="true">
        <defs>
            <linearGradient id="uploadBgGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0FAFFF" />
                <stop offset="100%" stopColor="#367AF2" />
            </linearGradient>
            <linearGradient id="uploadSunGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FDFDFD" />
                <stop offset="100%" stopColor="#B3E0FF" />
            </linearGradient>
            <linearGradient id="uploadHillGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#B3E0FF" />
                <stop offset="100%" stopColor="#8CD0FF" />
            </linearGradient>
        </defs>
        <rect width="50" height="50" rx="12" fill="url(#uploadBgGrad)" />
        <circle cx="35" cy="14" r="4.2" fill="url(#uploadSunGrad)" />
        <path d="M2 50 L2 40 Q2 37 4.5 35.5 L13 30 Q15 28.8 17 30 L36 42 Q38 43 38 45 L38 50 Z" fill="url(#uploadHillGrad)" opacity="0.55" />
        <path d="M8 50 L22 30 Q24 27.5 26 30 L48 44 L48 50 Z" fill="url(#uploadHillGrad)" />
    </svg>
)

const ImageUpload = () => {
    const inputRef = useRef(null)
    const [fileName, setFileName] = useState('')

    const handleChange = (e) => {
        const file = e.target.files?.[0]
        setFileName(file ? file.name : '')
    }

    const handleCancel = () => {
        setFileName('')
        if (inputRef.current) inputRef.current.value = ''
    }

    const openPicker = () => inputRef.current?.click()

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            openPicker()
        }
    }

    return (
        <section className="w-[810px] max-w-full min-w-0 h-[285px] gap-[10px] flex flex-col rounded-[14px] border-[1px] p-[20px] max-sm:p-[14px] bg-[#1C2A38] border-[#FFFFFF14] box-border" >
            {/* Header */}
            <div className="w-[762px] max-w-full h-[30px] shrink-0 py-[3px] flex justify-between items-center gap-[10px] box-border">
                <h1 className="min-w-0 truncate font-[DM_Sans] text-[18px] max-sm:text-[16px] leading-[100%] font-bold text-[#F0F4F8]">Image Upload</h1>
                <button type="button" className="shrink-0 flex items-center">
                    <p className="border-[1px] px-[10px] rounded-xl whitespace-nowrap leading-[18px] text-[#2980B9] bg-[#2980B91F] border-[#2980B94D] font-[DM_Sans] text-[11px] font-semibold">Required</p>
                </button>
            </div>

            {/* Drop zone */}
            <div
                role="button"
                tabIndex={0}
                aria-label="Upload food image"
                onClick={openPicker}
                onKeyDown={handleKeyDown}
                className="w-[770px] max-w-full min-w-0 h-[153px] shrink-0 gap-[8px] flex flex-col items-center justify-center rounded-[12px] border-[1px] border-dashed py-[20px] px-[102px] max-sm:px-[12px] bg-[#0F1923] border-[#FFFFFF24] cursor-pointer box-border outline-none transition hover:border-[#E67E224D] focus-visible:border-[#E67E224D]"
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/png, image/jpeg"
                    className="hidden"
                    onChange={handleChange}
                />

                <UploadIcon />

                <div className="text-center max-w-full min-w-0">
                    <p className="truncate font-[DM_Sans] text-[13px] font-semibold leading-[16px] tracking-[0.8%] text-[#8A9BB0]">
                        {fileName || 'Upload food image'}
                    </p>
                </div>

                <div className="text-center max-w-full min-w-0">
                    <p className="truncate font-[DM_Sans] text-[12px] font-semibold leading-[16px] tracking-[0.8%] text-[#556070]">Recommended 800×600 JPG / PNG</p>
                </div>

            </div>

            {/* Actions */}
            <div className="w-[770px] max-w-full h-[40px] shrink-0 gap-[12px] flex justify-end items-stretch box-border">
                <button
                    type="button"
                    onClick={handleCancel}
                    className="h-full shrink-0 flex items-center justify-center whitespace-nowrap bg-[#243447] border-[1px] border-[#FFFFFF24] px-4 rounded-xl text-[#F0F4F8] font-[DM_Sans] text-[14px] max-sm:text-[13px] leading-[18px] font-bold cursor-pointer box-border transition hover:bg-[#2D4157]"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="h-full shrink-0 flex items-center justify-center whitespace-nowrap bg-[#E67E22] border-[1px] border-[#FFFFFF24] px-4 rounded-xl text-[#F0F4F8] font-[DM_Sans] text-[14px] max-sm:text-[13px] leading-[18px] font-semibold cursor-pointer box-border transition hover:brightness-110"
                >
                    Save menu
                </button>
            </div>

        </section>
    )
}

export default ImageUpload