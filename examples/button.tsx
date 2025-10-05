import { Button } from '@/registry/carbon/button/button'
import React from 'react'

const ButtonExample = () => {
  return (
    <>
      <div className='flex items-center gap-[1px]'>
        <Button>Primary</Button>
        <Button kind='destructive'>Destructive</Button>
        <Button kind='tertiary'>Tertiary</Button>
      </div>
    </>
  )
}

export default ButtonExample
