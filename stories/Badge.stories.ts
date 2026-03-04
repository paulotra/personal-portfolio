import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Badge from '../app/components/Badge.vue'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['ui', 'brand', 'dev'],
      description: 'Visual style of the badge',
    },
  },
  args: {
    variant: 'ui',
  },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: `<Badge v-bind="args">Badge</Badge>`,
  }),
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const UI: Story = {
  args: { variant: 'ui' },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: `<Badge v-bind="args">UI</Badge>`,
  }),
}

export const Brand: Story = {
  args: { variant: 'brand' },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: `<Badge v-bind="args">Brand</Badge>`,
  }),
}

export const Dev: Story = {
  args: { variant: 'dev' },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: `<Badge v-bind="args">Dev</Badge>`,
  }),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex items-center gap-4 flex-wrap p-4">
        <Badge variant="ui">UI</Badge>
        <Badge variant="brand">Brand</Badge>
        <Badge variant="dev">Dev</Badge>
      </div>
    `,
  }),
}
