import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Card from '../app/components/Card.vue'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  render: (args) => ({
    components: { Card },
    setup: () => ({ args }),
    template: `
      <Card v-bind="args">
        <div class="p-6 flex flex-col gap-4">
          <h3 class="font-sans font-bold text-3xl leading-10 uppercase text-black">Card Title</h3>
          <p class="font-sans font-normal text-sm leading-6 text-black">Card content goes here.</p>
        </div>
      </Card>
    `,
  }),
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithContent: Story = {
  name: 'With Content',
  render: () => ({
    components: { Card },
    template: `
      <div class="p-10 bg-neutral-100">
        <Card>
          <div class="px-6 py-8 flex flex-col gap-4 h-[311px]">
            <h3 class="font-sans font-bold text-3xl leading-10 uppercase text-black">Branding</h3>
            <p class="font-sans font-normal text-sm leading-6 text-black">
              Building identities that communicate clearly and scale confidently.
            </p>
          </div>
        </Card>
      </div>
    `,
  }),
}

export const ThreeCards: Story = {
  name: 'Three Cards',
  render: () => ({
    components: { Card },
    template: `
      <div class="p-10 bg-neutral-100">
        <div class="grid grid-cols-3 gap-10">
          <Card>
            <div class="px-6 py-8 flex flex-col gap-4 h-[311px]">
              <h3 class="font-sans font-bold text-3xl leading-10 uppercase text-black">Branding</h3>
              <p class="font-sans font-normal text-sm leading-6 text-black">Building identities that communicate clearly.</p>
            </div>
          </Card>
          <Card>
            <div class="px-6 py-8 flex flex-col gap-4 h-[311px]">
              <h3 class="font-sans font-bold text-3xl leading-10 uppercase text-black">UI & UX Design</h3>
              <p class="font-sans font-normal text-sm leading-6 text-black">Designing intuitive experiences for web and mobile.</p>
            </div>
          </Card>
          <Card>
            <div class="px-6 py-8 flex flex-col gap-4 h-[311px]">
              <h3 class="font-sans font-bold text-3xl leading-10 uppercase text-black">FE Development</h3>
              <p class="font-sans font-normal text-sm leading-6 text-black">Turning design into production-ready applications.</p>
            </div>
          </Card>
        </div>
      </div>
    `,
  }),
}
