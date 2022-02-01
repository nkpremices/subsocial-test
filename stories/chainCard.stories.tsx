import {Meta, Story} from '@storybook/react'
import {ComponentProps} from 'react'
import ChainCardComponent from '../pages/components/Chains/ChainCard';

export default {
    component: ChainCardComponent,
    title: 'ChainCardComponent',
} as Meta


const Template: Story<ComponentProps<typeof ChainCardComponent>> = (args) => {
    return <div style={{ width: '300px' }}><ChainCardComponent {...args} /></div>
}

export const ChainCardProps = Template.bind({})

ChainCardProps.args = {
    chain: {
        ss58Format: 2,
        tokenDecimals: [
            12
        ],
        tokenSymbol: [
            'KSM'
        ],
        icon: 'https://sub.id/images/kusama.svg',
        name: 'Kusama',
        isConnected: true
    },
}
