import React from "react";
import { TerminalIcon, UserIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
    return(
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 incline-block mb-4" />
            </div>
        </section>
    )
}