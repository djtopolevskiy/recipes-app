'use client'
import { useState } from "react";
import React from 'react'
import { motion } from 'framer-motion';
import { AlignJustify, X } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

interface HeaderProps {
    scrollToBreakfast: () => void;
    scrollToDinner: () => void;
    scrollToSupper: () => void;  
  }

export default function HeaderNav(
  {
    scrollToBreakfast,
    scrollToDinner,
    scrollToSupper,
  }:HeaderProps) {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible)
  }
  const closeDropDown = () => {
    setIsDropDownVisible(false)
  }
  return (
    <nav className="flex items-center justify-center">
      <nav className="hidden md:flex">
        <Menubar>
      <MenubarMenu>
        <MenubarTrigger><span className="cursor-pointer" onClick={scrollToBreakfast}>Сніданок</span></MenubarTrigger>        
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger><span className="cursor-pointer" onClick={scrollToDinner}>Обід</span></MenubarTrigger>        
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger><span className="cursor-pointer" onClick={scrollToSupper}>Вечеря</span></MenubarTrigger>        
      </MenubarMenu>   
        <MenubarMenu>
          <MenubarTrigger>
            <Link href='/contact' >Побажання</Link>
          </MenubarTrigger>        
        </MenubarMenu>      
      </Menubar>
      </nav>
      
      <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-[#C72544] cursor-pointer"
            >
              <X />
            <DropDownMenu onClose={closeDropDown}
              
              scrollToBreakfast={scrollToBreakfast}
              scrollToDinner={scrollToDinner}
              scrollToSupper={scrollToSupper}
            /> </div>
          ) : (
              <AlignJustify
                onClick={toggleDropDown}
                className="w-8 h-8 text-[#C72544] cursor-pointer"
              /> 
          )
          }
        </div>
    </nav>
  )
}
