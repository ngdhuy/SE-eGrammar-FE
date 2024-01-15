import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const DocumentLayout = ({ 
    children, 
}: { 
    children: React.ReactNode 
}) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default DocumentLayout