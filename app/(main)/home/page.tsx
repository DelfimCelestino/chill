"use client"

import EventCard from "@/components/eventcard";
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";


const events = [
     {
          id: 1,
          cover: "https://plus.unsplash.com/premium_photo-1683121126477-17ef068309bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Black Party at Night",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: new Date("2024-08-10"),
          price: 1200,
          location: "Nampula, Prato quente",
          guests: [
               {
                    id: 1,
                    name: "John Doe",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
               },
               {
                    id: 2,
                    name: "Robert Johnson",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 3,
                    name: "Jane Smith",
                    designation: "Musico",
                    image:
                         "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 4,
                    name: "Emily Davis",
                    designation: "UX Designer",
                    image:
                         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 5,
                    name: "Tyler Durden",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
               },
               {
                    id: 6,
                    name: "Dora",
                    designation: "Musico",
                    image:
                         "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
               },
          ]
     },
     {
          id: 2,
          cover: "https://plus.unsplash.com/premium_photo-1671580671733-92d038f1ea97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Moon Walker",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: new Date("2024-08-10"),
          price: 1200,
          location: "Nampula, Prato quente",
          guests: [
               {
                    id: 1,
                    name: "John Doe",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
               },
               {
                    id: 2,
                    name: "Robert Johnson",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 3,
                    name: "Jane Smith",
                    designation: "Musico",
                    image:
                         "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 4,
                    name: "Emily Davis",
                    designation: "UX Designer",
                    image:
                         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 5,
                    name: "Tyler Durden",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
               },
               {
                    id: 6,
                    name: "Dora",
                    designation: "Musico",
                    image:
                         "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
               },
          ]
     },
     {
          id: 3,
          cover: "https://plus.unsplash.com/premium_photo-1661299366011-bb9f86212bdb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Deep Sea Event",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: new Date("2024-08-10"),
          price: 1200,
          location: "Nampula, Prato quente",
          guests: [
               {
                    id: 1,
                    name: "John Doe",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
               },
               {
                    id: 2,
                    name: "Robert Johnson",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 3,
                    name: "Jane Smith",
                    designation: "Musico",
                    image:
                         "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 4,
                    name: "Emily Davis",
                    designation: "UX Designer",
                    image:
                         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 5,
                    name: "Tyler Durden",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
               },
               {
                    id: 6,
                    name: "Dora",
                    designation: "Musico",
                    image:
                         "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
               },
          ]
     },
     {
          id: 4,
          cover: "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "hangout party",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: new Date("2024-08-10"),
          price: 1200,
          location: "Nampula, Prato quente",
          guests: [
               {
                    id: 1,
                    name: "John Doe",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
               },
               {
                    id: 2,
                    name: "Robert Johnson",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 3,
                    name: "Jane Smith",
                    designation: "Musico",
                    image:
                         "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 4,
                    name: "Emily Davis",
                    designation: "UX Designer",
                    image:
                         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
               },
               {
                    id: 5,
                    name: "Tyler Durden",
                    designation: "DJ",
                    image:
                         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
               },
               {
                    id: 6,
                    name: "Dora",
                    designation: "Musico",
                    image:
                         "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
               },
          ]
     },

]

const Home = () => {
     const [date, setDate] = useState<Date | undefined>(new Date())

     return (
          <div>
               <div className="hidden lg:block fixed top-0 left-16 h-full p-8 border-r-2 mt-16">
                    <h1 className="font-bold my-4 text-xl">Filtrar a partir de:</h1>
                    <Calendar
                         mode="single"
                         selected={date}
                         onSelect={setDate}
                         className="rounded-md border shadow w-full"
                    />
               </div>

               <div className="lg:ml-[350px] grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 px-2 py-4">
                    {
                         events.map((event) => (
                              <EventCard
                                   key={event.id}
                                   event={event}
                              />
                         ))
                    }
               </div>
          </div>
     );
};

export default Home;