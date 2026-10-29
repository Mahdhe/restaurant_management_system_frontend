import React from 'react'
import CRM_Notification_Header from '../../../components/crmNotifications/commonCRMNotifications/CRM_Notification_Header'
import KPIrowNotifi01 from '../../../components/crmNotifications/notificationsPage01/KPIrowNotifi01'
import NotificationCenter from '../../../components/crmNotifications/notificationsPage01/NotificationCenter'
import RestaurantAnnouncement from '../../../components/crmNotifications/notificationsPage01/RestaurantAnnouncement'
import DeliveryStats from '../../../components/crmNotifications/notificationsPage01/DeliveryStats'
import RestaurantAnnounce from '../../../components/crmNotifications/notificationsPage01/RestaurantAnnounce'
import HeaderButtons from '../../../components/crmNotifications/notificationsPage01/HeaderButtons'
import Notifications02RedirectButtons from '../../../components/crmNotifications/commonCRMNotifications/Notifications02RedirectButtons'

const NotificationPage01 = () => {
    return (
        <>
            {/* Main-Section */}
            <section className="w-full min-w-0 min-h-screen gap-[20px] flex flex-col">

                {/* sub-Section */}
                <section className="w-full min-w-0 h-full flex-1 p-4 sm:p-8 gap-[12px] flex flex-col bg-[#0F1923] box-border">

                    <CRM_Notification_Header />
                    <Notifications02RedirectButtons></Notifications02RedirectButtons>

                    <KPIrowNotifi01 />

                    {/* MainBox */}
                    <div className="flex max-[1439px]:flex-col items-start w-[1200px] max-w-full min-w-0 h-[764px] max-[1439px]:h-auto gap-[20px]">

                        {/* leftBox */}
                        <div className="flex flex-col w-[850px] max-w-full min-w-0 h-[764px] max-[1439px]:h-auto gap-[20px]">

                            <NotificationCenter />

                        </div>

                        {/* RightBox */}
                        <div className="flex flex-col w-[350px] max-w-full min-w-0 shrink-0 h-[764px] max-[1439px]:h-auto gap-[20px]">

                            <RestaurantAnnouncement />
                            <DeliveryStats />

                        </div>

                    </div>

                    <RestaurantAnnounce />

                    <HeaderButtons />

                </section>

            </section>
        </>
    )
}

export default NotificationPage01