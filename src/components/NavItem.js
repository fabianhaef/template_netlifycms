import React from 'react'

import Link from 'next/link'


function NavItem({name, href}) {
  return (
    <Link href={href}>
      <a className="navbar-item">
        {name}
      </a>
    </Link>
  )
}

export default NavItem
