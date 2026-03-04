import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Headline from '../app/components/Headline.vue'

const meta = {
  title: 'Components/Headline',
  component: Headline,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading level — controls both the HTML element and text style',
    },
  },
  args: {
    variant: 'h1',
  },
  render: (args) => ({
    components: { Headline },
    setup: () => ({ args }),
    template: `<Headline v-bind="args">Heading</Headline>`,
  }),
} satisfies Meta<typeof Headline>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: { variant: 'h1' },
  render: (args) => ({
    components: { Headline },
    setup: () => ({ args }),
    template: `<Headline v-bind="args">Heading 1</Headline>`,
  }),
}

export const H2: Story = {
  args: { variant: 'h2' },
  render: (args) => ({
    components: { Headline },
    setup: () => ({ args }),
    template: `<Headline v-bind="args">Heading 2</Headline>`,
  }),
}

export const H3: Story = {
  args: { variant: 'h3' },
  render: (args) => ({
    components: { Headline },
    setup: () => ({ args }),
    template: `<Headline v-bind="args">Heading 3</Headline>`,
  }),
}

export const H4: Story = {
  args: { variant: 'h4' },
  render: (args) => ({
    components: { Headline },
    setup: () => ({ args }),
    template: `<Headline v-bind="args">Heading 4</Headline>`,
  }),
}

export const H5: Story = {
  args: { variant: 'h5' },
  render: (args) => ({
    components: { Headline },
    setup: () => ({ args }),
    template: `<Headline v-bind="args">Heading 5</Headline>`,
  }),
}

export const H6: Story = {
  args: { variant: 'h6' },
  render: (args) => ({
    components: { Headline },
    setup: () => ({ args }),
    template: `<Headline v-bind="args">Heading 6</Headline>`,
  }),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => ({
    components: { Headline },
    template: `
      <div class="flex flex-col gap-6 p-4">
        <Headline variant="h1">Heading 1 — 60px</Headline>
        <Headline variant="h2">Heading 2 — 48px</Headline>
        <Headline variant="h3">Heading 3 — 28px</Headline>
        <Headline variant="h4">Heading 4 — 24px</Headline>
        <Headline variant="h5">Heading 5 — 14px uppercase</Headline>
        <Headline variant="h6">Heading 6 — 12px uppercase</Headline>
      </div>
    `,
  }),
}
