import Image from "next/image"
import React from "react"

const Header = () => {
    return (
        <div className="relative bg-sky-700 mb-8 p-5">
            <div>
                <Image src="/logo.png" alt="logo" width={100} height={100} />
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Header