import { Button } from '@/registry/carbon/button/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/carbon/tooltip'
import React from 'react'

const TooltipExample = () => {
  return (
     <TooltipProvider delayDuration={10}>
      <Tooltip>
        <TooltipTrigger>
          <Button>Hover</Button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
     </TooltipProvider>
  )
}

export default TooltipExample
