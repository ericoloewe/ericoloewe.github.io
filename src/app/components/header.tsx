"use client";

import Logo from "../../../public/logo.svg";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from "react";

const pages = [
  {
    name: 'Inicio',
    path: '/'
  },
]

export function Header() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  return <header className="navbar navbar-expand-lg d-none" data-bs-theme="dark"></header>;

}

