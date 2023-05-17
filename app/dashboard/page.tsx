import React from 'react'
import Image from 'next/image'
import DashboardLayout from './layout';


function Dashboard({ children }: {
  children: React.ReactNode;}) {
  return (
    <div>
      <DashboardLayout/>
      
    </div>
  )
}

export default Dashboard