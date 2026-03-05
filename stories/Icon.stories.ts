import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Icon from '../app/components/Icon.vue'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['arrow-diagonal', 'arrow-right'],
      description: 'Icon name from the registry',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Icon size (xs=10, sm=12, md=16, lg=20, xl=24)',
    },
  },
  args: {
    name: 'arrow-diagonal',
    size: 'sm',
  },
  render: (args) => ({
    components: { Icon },
    setup: () => ({ args }),
    template: `<Icon v-bind="args" class="text-primary-500" />`,
  }),
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => ({
    components: { Icon },
    template: `
      <div class="flex items-end gap-6 p-6">
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-diagonal" size="xs" class="text-primary-500" />
          <span class="text-xs text-neutral-600">xs / 10px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-diagonal" size="sm" class="text-primary-500" />
          <span class="text-xs text-neutral-600">sm / 12px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-diagonal" size="md" class="text-primary-500" />
          <span class="text-xs text-neutral-600">md / 16px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-diagonal" size="lg" class="text-primary-500" />
          <span class="text-xs text-neutral-600">lg / 20px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-diagonal" size="xl" class="text-primary-500" />
          <span class="text-xs text-neutral-600">xl / 24px</span>
        </div>
      </div>
    `,
  }),
}

export const Colors: Story = {
  name: 'All Colors',
  render: () => ({
    components: { Icon },
    template: `
      <div class="flex items-center gap-6 p-6">
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-diagonal" size="md" class="text-primary-500" />
          <span class="text-xs text-neutral-600">primary-500</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-diagonal" size="md" class="text-neutral-600" />
          <span class="text-xs text-neutral-600">neutral-600</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-diagonal" size="md" class="text-black" />
          <span class="text-xs text-neutral-600">black</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-diagonal" size="md" class="text-neutral-400" />
          <span class="text-xs text-neutral-600">neutral-400</span>
        </div>
      </div>
    `,
  }),
}

export const AllIcons: Story = {
  name: 'All Icons',
  render: () => ({
    components: { Icon },
    template: `
      <div class="flex items-center gap-8 p-6">
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-diagonal" size="md" class="text-primary-500" />
          <span class="text-xs text-neutral-600">arrow-diagonal</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="arrow-right" size="md" class="text-primary-500" />
          <span class="text-xs text-neutral-600">arrow-right</span>
        </div>
      </div>
    `,
  }),
}
