import AvatarCard from '@/app/components/AvatarCard';
import React from 'react'

 const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">

      <AvatarCard name={'Avigail Shklovsky'} imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNarFFKTF3w5VlL2BC7gr6gt6K-gvIHjaKiw&s' }description={"hello world"}></AvatarCard>
    </div>
  )
}
export default page;