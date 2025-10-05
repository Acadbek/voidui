import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/carbon/tabs";
import { Icon } from '@iconify/react';


const TabsExample = () => {
  const [activeTab, setActiveTab] = React.useState('tab1');
  const [tabs, setTabs] = React.useState([
    { id: 'tab1', label: 'Home', content: 'Home content' },
    { id: 'tab2', label: 'Profile', content: 'Profile content' },
    { id: 'tab3', label: 'Settings', content: 'Settings content' }
  ]);

  const handleTabClose = (closedValue: string) => {
    setTabs(prev => prev.filter(tab => tab.id !== closedValue));

    if (activeTab === closedValue) {
      const remainingTabs = tabs.filter(tab => tab.id !== closedValue);
      if (remainingTabs.length > 0) {
        setActiveTab(remainingTabs[0].id);
      }
    }

    console.log(`Tab closed: ${closedValue}`);
  };
  return (
    <Tabs kind="contained" value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        {tabs.map(tab => (
          <TabsTrigger
            icon={<Icon icon='carbon:3d-cursor' />}
            key={tab.id}
            value={tab.id}
            onClose={handleTabClose}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(tab => (
        <TabsContent key={tab.id} value={tab.id}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default TabsExample
