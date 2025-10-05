import { Tag } from '@/registry/carbon/tag'
import { Icon } from '@iconify/react'
import React from 'react'

const TagExample = () => {
  return (
    <div className='flex items-center flex-wrap gap-[1px]'>
      <Tag dismissable icon={<Icon icon="carbon:chip" />} bordered>
        Tag content
      </Tag>
      <Tag
        icon={<Icon icon="carbon:accept-action-usage" />}
        bordered
        kind="destructive"
      >
        Tag content
      </Tag>
      <Tag
        icon={<Icon icon="carbon:bicycle" />}
        bordered
        kind="outline"
      >
        Tag content
      </Tag>
      <Tag
        bordered
        dismissable
        icon={<Icon icon="carbon:ibm-cloud-kubernetes-service" />}
        kind="secondary"
      >
        Tag content
      </Tag>
      <Tag
        dismissable
        icon={<Icon icon="carbon:ibm-cloud-kubernetes-service" />}
        bordered
        kind="success"
      >
        Tag content
      </Tag>
      <Tag
        dismissable
        icon={<Icon icon="carbon:ibm-cloud-kubernetes-service" />}
        bordered
        kind="mauve"
      >
        Tag content
      </Tag>
    </div>
  )
}

export default TagExample
