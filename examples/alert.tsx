import { Alert, AlertDescription, AlertTitle } from '@/registry/carbon/alert'
import React from 'react'

const AlertExample = () => {
  return (
    <Alert>
      <AlertTitle>Notification title</AlertTitle>
      <AlertDescription>Subtitle text goes here</AlertDescription>
    </Alert>
  )
}

export default AlertExample
