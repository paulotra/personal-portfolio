<template>
  <div class="w-full">
    <!-- Loading -->
    <div v-if="loading" class="flex items-center justify-center h-[80px] text-xs text-neutral-400">
      Loading contributions...
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-xs text-neutral-400">
      Unable to load contributions.
    </div>

    <!-- Grid -->
    <div v-else class="relative w-full overflow-x-auto">
      <div class="flex gap-[3px] min-w-0">
        <div
          v-for="(week, wi) in weeks"
          :key="wi"
          class="flex flex-col gap-[3px]"
        >
          <div
            v-for="day in week"
            :key="day.date"
            class="w-[10px] h-[10px] rounded-[2px] cursor-default relative group"
            :style="{ backgroundColor: levelColor(day.level) }"
          >
            <!-- Tooltip -->
            <div
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-neutral-900 text-white text-[10px] leading-tight rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none z-20 transition-opacity duration-100"
            >
              <span class="font-semibold">{{ day.count }} contribution{{ day.count !== 1 ? 's' : '' }}</span>
              <span class="text-neutral-400"> on {{ formatDate(day.date) }}</span>
              <!-- Arrow -->
              <span class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900" />
            </div>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="flex items-center gap-1 mt-2 justify-end">
        <span class="text-[10px] text-neutral-400 mr-1">Less</span>
        <div v-for="l in [0, 1, 2, 3, 4]" :key="l" class="w-[10px] h-[10px] rounded-[2px]" :style="{ backgroundColor: levelColor(l) }" />
        <span class="text-[10px] text-neutral-400 ml-1">More</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  username: {
    type: String,
    required: true,
  },
})

const loading = ref(true)
const error = ref(false)
const weeks = ref([])

const COLORS = {
  0: '#ebedf0',
  1: '#9be9a8',
  2: '#40c463',
  3: '#30a14e',
  4: '#216e39',
}

function levelColor(level) {
  return COLORS[level] ?? COLORS[0]
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function buildWeeks(contributions) {
  // Fill the last 52 weeks from today
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const map = {}
  for (const c of contributions) {
    map[c.date] = c
  }

  // Start from the Sunday 52 weeks ago
  const start = new Date(today)
  start.setDate(start.getDate() - start.getDay() - 52 * 7)

  const result = []
  let current = new Date(start)

  while (current <= today) {
    const week = []
    for (let d = 0; d < 7; d++) {
      const dateStr = current.toISOString().slice(0, 10)
      const entry = map[dateStr]
      week.push({
        date: dateStr,
        count: entry?.count ?? 0,
        level: entry?.level ?? 0,
      })
      current.setDate(current.getDate() + 1)
    }
    result.push(week)
  }
  return result
}

onMounted(async () => {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${props.username}?y=last`)
    if (!res.ok) throw new Error('Failed')
    const data = await res.json()
    weeks.value = buildWeeks(data.contributions)
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>
