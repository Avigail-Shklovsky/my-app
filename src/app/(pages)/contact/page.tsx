import AvatarCard from '@/app/components/AvatarCard';
import React from 'react'

 const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">

      <AvatarCard name={'Avigail Shklovsky'} imageUrl={'/assets/profile.jpg'} description={"hello world"}></AvatarCard>
    </div>
  )
}
export default page;