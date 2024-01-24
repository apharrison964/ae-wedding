"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import NavigationContent from "./navigation-content";


export default function NavigationMobile(){
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return(
        <>
            <img onClick={() => setOpen(!open) } src="hamburger.svg" alt="Hamburger Menu"/>
            {open && mounted && createPortal(<h1 className="overlay"><NavigationContent styleType={'navigationMobile'} onClick={() => setOpen(!open)}></NavigationContent></h1>, document.getElementById("portal"))}
        </>
    )
}