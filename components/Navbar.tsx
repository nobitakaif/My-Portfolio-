"use client"
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";


export default function Navbar(){
    return <div className="fixed top-0 left-0 right-0 border h-18 ">
        <div className="flex justify-between items-center  mr-6 ml-6 mt-4">
            <div className="text-2xl font-bold">
                Portfolio
            </div>
            <div className="flex gap-10">
                <div className="font-bold">
                    Home
                </div>
                <div>
                    About
                </div>
                <div>
                    Projects
                </div>
                <div>
                    Contacts
                </div>
            </div>
            <div className="flex gap-6">
                <ThemeToggle/>
                <Button className="w-24">Sign In</Button>
                <Button>Sign Up</Button>

            </div>
        </div>
    </div>
}