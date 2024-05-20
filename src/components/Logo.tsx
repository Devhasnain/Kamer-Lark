import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"}>
        <Image alt='' src={"/assets/logo.png"} height={100} width={100} />
    </Link>
  )
}

export default Logo