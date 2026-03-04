import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Button from '../app/components/Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'disabled'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'Size of the button',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show or hide the trailing icon',
    },
  },
  args: {
    variant: 'primary',
    size: 'default',
    showIcon: true,
  },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `<Button v-bind="args">Button</Button>`,
  }),
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// ── Single variant stories ────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', size: 'default' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `<Button v-bind="args">Primary</Button>`,
  }),
}

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'default' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `<Button v-bind="args">Secondary</Button>`,
  }),
}

export const Outline: Story = {
  args: { variant: 'outline', size: 'default' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `<Button v-bind="args">Outline</Button>`,
  }),
}

export const Disabled: Story = {
  args: { variant: 'disabled', size: 'default' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `<Button v-bind="args">Disabled</Button>`,
  }),
}

// ── Kitchen sink ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-center gap-4 flex-wrap p-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="disabled">Disabled</Button>
      </div>
    `,
  }),
}

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-end gap-4 flex-wrap p-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">XLarge</Button>
      </div>
    `,
  }),
}

export const DesignSheet: Story = {
  name: 'Design Sheet',
  render: () => ({
    components: { Button },
    template: `
      <div class="p-6 flex flex-col gap-6">
        <div class="flex items-end gap-4">
          <Button variant="primary"  size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="outline"  size="sm">Outline</Button>
          <Button variant="disabled" size="sm">Disabled</Button>
        </div>
        <div class="flex items-end gap-4">
          <Button variant="primary"  size="default">Primary</Button>
          <Button variant="secondary" size="default">Secondary</Button>
          <Button variant="outline"  size="default">Outline</Button>
          <Button variant="disabled" size="default">Disabled</Button>
        </div>
        <div class="flex items-end gap-4">
          <Button variant="primary"  size="lg">Primary</Button>
          <Button variant="secondary" size="lg">Secondary</Button>
          <Button variant="outline"  size="lg">Outline</Button>
          <Button variant="disabled" size="lg">Disabled</Button>
        </div>
        <div class="flex items-end gap-4">
          <Button variant="primary"  size="xl">Primary</Button>
          <Button variant="secondary" size="xl">Secondary</Button>
          <Button variant="outline"  size="xl">Outline</Button>
          <Button variant="disabled" size="xl">Disabled</Button>
        </div>
      </div>
    `,
  }),
}
