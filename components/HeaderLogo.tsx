import React from 'react'
import '@/public/LogoPotato.png'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar"

export default function HeaderLogo() {
  return (
    <Avatar>
      <AvatarImage src="LogoPotato.png" alt="shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
