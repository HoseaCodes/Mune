import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import NewsletterModal from '../NewsletterModal'

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  modalOpen?: boolean;
}

export default function Layout({ children, modalOpen }: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    if (modalOpen) {
      setIsModalOpen(true);
    }
  }, [modalOpen]);
  
  const handleOpenModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <Header onClick={handleOpenModal}/>
          {children}
        <Footer /> 
        <NewsletterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}
