import {Meta, Story} from '@storybook/react'
import {ComponentProps} from 'react'
import ChainsComponent from '../pages/components/Chains';

export default {
    component: ChainsComponent,
    title: 'ChainsComponent',
} as Meta

const props = {
    chains: {
        Kusama: {
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
        Polkadot: {
            ss58Format: 0,
            tokenDecimals: [
                10
            ],
            tokenSymbol: [
                'DOT'
            ],
            icon: 'https://sub.id/images/polkadot.svg',
            name: 'Polkadot',
            isConnected: true
        },
        Centrifuge: {
            ss58Format: 36,
            tokenDecimals: [
                18
            ],
            tokenSymbol: [
                'CFG'
            ],
            icon: 'https://sub.id/images/centrifuge.png',
            name: 'Centrifuge',
            isConnected: true
        },
        SORA: {
            ss58Format: 69,
            tokenDecimals: [
                18
            ],
            tokenSymbol: [
                'XOR'
            ],
            icon: 'https://sub.id/images/sora-substrate.svg',
            name: 'SORA',
            isConnected: true
        },
    },
    isLoadingChains: false,
}

const Template: Story<ComponentProps<typeof ChainsComponent>> = (args) => {
    return <ChainsComponent {...args} />
}

export const ChainsProps = Template.bind({})

ChainsProps.args = props

ChainsProps.argTypes = {
    isLoadingChains: {control: {disable: true}}
}
