"use client";

import { useEffect, useState } from "react";
import NavigationModalContent from "./navigation-modal-content";
import { createPortal } from "react-dom";


export default function NavigationMobile(){
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return(
        <>
            <img onClick={() => setOpen(!open) } src="hamburger.svg" alt="Hamburger Menu"/>
            {open && mounted && createPortal(<h1 className="overlay"><NavigationModalContent onClick={() => setOpen(!open)}></NavigationModalContent></h1>, document.getElementById("portal"))}
        </>
    )
}