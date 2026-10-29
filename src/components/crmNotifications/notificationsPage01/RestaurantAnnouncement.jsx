import React, { useState } from 'react'

const fieldLabel =
  "font-['DM_Sans'] font-medium text-[11px] leading-none tracking-[0.08em] text-[#8A9BB0] uppercase"

const fieldBase =
  "w-full rounded-[10px] border border-[#FFFFFF14] bg-[#243447] px-[12px] text-[14px] text-white " +
  "font-['DM_Sans'] placeholder:text-[#8A9BB0] outline-none transition-colors " +
  "focus:border-[#E8821A] focus:ring-1 focus:ring-[#E8821A]/40"

const RestaurantAnnouncement = () => {
  const [form, setForm] = useState({
    title: '',
    message: '',
    priority: 'Normal',
    sendTo: 'All Staff',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveDraft = () => {
    console.log('Draft saved:', form)
  }

  const handleSend = () => {
    console.log('Announcement sent:', form)
  }

  return (
    <section className="sm:w-[300px] md:w-[350px] rounded-[14px] bg-[#1C2A38] border border-[#FFFFFF14] font-['DM_Sans']">
      {/* Header */}
      <div className="flex items-center gap-[10px] px-[20px] pt-[20px]">
        <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[12px] bg-[#2980B91F]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2980B9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m3 11 18-5v12L3 14v-3z" />
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
          </svg>
        </div>

        <div className="flex flex-col gap-[4px]">
          <h1 className="font-semibold text-[14px] leading-none text-white">
            Restaurant Announcement
          </h1>
          <p className="text-[12px] leading-none text-[#8A9BB0]">
            Broadcast to staff or customers
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-[16px] px-[20px] py-[20px]">
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="title" className={fieldLabel}>
            Announcement Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Kitchen maintenance scheduled"
            className={`${fieldBase} h-[34px]`}
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <label htmlFor="message" className={fieldLabel}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your announcement here...."
            className={`${fieldBase} h-[62px] resize-none py-[8px]`}
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <label htmlFor="priority" className={fieldLabel}>
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className={`${fieldBase} h-[34px] cursor-pointer`}
          >
            <option>Normal</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
        </div>

        <div className="flex flex-col gap-[8px]">
          <label htmlFor="sendTo" className={fieldLabel}>
            Send To
          </label>
          <select
            id="sendTo"
            name="sendTo"
            value={form.sendTo}
            onChange={handleChange}
            className={`${fieldBase} h-[34px] cursor-pointer`}
          >
            <option>All Staff</option>
            <option>Kitchen</option>
            <option>Front of House</option>
            <option>Customers</option>
          </select>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-[20px] border-t border-[#FFFFFF14]" />

      {/* Actions */}
      <div className="flex gap-[8px] p-[20px]">
        <button
          type="button"
          onClick={handleSaveDraft}
          className="h-[38px] flex-1 rounded-[10px] border border-[#FFFFFF14] bg-[#243447] text-[13px] font-semibold text-white transition-colors hover:bg-[#2B3F54]"
        >
          Save Draft
        </button>
        <button
          type="button"
          onClick={handleSend}
          className="h-[38px] flex-1 rounded-[10px] bg-[#E8821A] text-[13px] font-semibold text-white transition-colors hover:bg-[#F08F2B]"
        >
          Send
        </button>
      </div>
    </section>
  )
}

export default RestaurantAnnouncement