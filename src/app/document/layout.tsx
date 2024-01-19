import React from 'react'
import Container from '../Container'

interface DocumentLayoutProps {
    children: React.ReactNode
}

const DocumentLayout: React.FC<DocumentLayoutProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default DocumentLayout