//app/page
"use client";
import HeroBanner from "@/component/Hero_section/HeroBanner";
import AboutUs from "@/component/AboutUs";
import Services from "@/component/Service";
import AreaOfPractice from "@/component/AriaOfPractice";
import StaffSection from "@/component/StaffSection";
import SuscribeToNewsLetter from "@/component/SuscribeToNewsLetter";
import {useEffect} from "react";




export default function Home() {





    return (
        <>
            <HeroBanner/>
            <Services/>
            <AboutUs/>
            <AreaOfPractice/>
            <StaffSection/>
            <SuscribeToNewsLetter/>

        </>
    );
}