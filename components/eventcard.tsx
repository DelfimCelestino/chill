"use client"

import AvatarCircles from "@/components/magicui/avatar-circles";
import Link from "next/link";
import { useEffect, useState } from "react";


interface EventCardProps {
     cover: string;
     title: string;
     description: string;
     date: Date;
     price: number;
     location: string;
     guests: {
          id: number;
          name: string;
          designation: string;
          image: string;
     }[];
}


const EventCard = ({ event }: { event: EventCardProps }) => {
     const guestAvatarUrls = event.guests.slice(0, 3).map(guest => guest.image);
     const [isClient, setIsClient] = useState(false);

     useEffect(() => {
          setIsClient(true);
     }, []);

     return (
          <Link href={"/event"} className="relative">
               <div className="flex items-center justify-center p-2 bg-app-primary dark:bg-secondary text-zinc-50 absolute top-2 right-2 rounded">
                    <span className="text-xs font-bold">{event.price}MT</span>
               </div>
               <div className="h-30 lg:h-60 rounded">
                    <img src={event.cover} className="h-full w-full rounded object-cover" />
               </div>
               <div className="grid gap-2 mt-2">
                    <h1 className="font-bold text-lg">{event.title}</h1>
                    <p className="hidden lg:block text-muted-foreground text-sm">{event.description.length > 200 ? event.description.slice(0, 200) + "..." : event.description}</p>
                    <p className="lg:hidden text-muted-foreground text-sm">{event.description.length > 100 ? event.description.slice(0, 100) + "..." : event.description}</p>
                    <div className="my-3 flex items-center justify-between">
                         <span className="text-muted-foreground text-xs lg:text-sm">{event.date.toDateString()}</span>
                         {isClient && <AvatarCircles numPeople={event.guests.length} avatarUrls={guestAvatarUrls} />}
                    </div>

                    <div className="flex items-center justify-between">
                         <div className="h-2 rounded-full bg-seconday w-full">
                              <div className="h-full rounded-full w-[80%] bg-gradient-to-r from-fuchsia-500 to-purple-700" />
                         </div>
                         <span className="font-bold text-xs">1234</span>
                    </div>
               </div>
          </Link>
     );
};

export default EventCard;