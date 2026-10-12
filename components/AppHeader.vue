<script setup>
const { owner } = usePortfolio()
const links = [['#projects', 'Work'], ['#stack', 'Stack'], ['#principles', 'Principles'], ['#contact', 'Contact']]

// `value` is the resolved theme ('light' | 'dark'); `preference` is what the visitor picked.
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggle = () => (colorMode.preference = isDark.value ? 'light' : 'dark')
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-4 pt-3">
    <div class="surface mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
      <a href="#top" class="font-display text-lg font-semibold text-fg">{{ owner.name }}</a>

      <nav aria-label="Primary" class="hidden gap-6 text-sm md:flex">
        <a v-for="[href, label] in links" :key="href" :href="href" class="nav-link">{{ label }}</a>
      </nav>

      <!-- Theme is only known in the browser, so SSR renders a same-size placeholder. -->
      <ClientOnly>
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-lg border border-line/20 text-fg transition hover:bg-fg/5"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggle"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path v-if="isDark" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            <path v-else d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
          </svg>
        </button>
        <template #fallback><span class="block h-9 w-9" /></template>
      </ClientOnly>
    </div>

    <!-- Scroll progress: GSAP scrubs scaleX 0 → 1. -->
    <div data-progress class="mx-auto mt-1 h-px max-w-5xl origin-left bg-accent" style="transform: scaleX(0)" aria-hidden="true" />
  </header>
</template>
