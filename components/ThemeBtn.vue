<template>
  <ClientOnly>
    <button
      type="button"
      class="grid h-9 w-9 place-items-center rounded-lg border border-line/20 text-fg transition hover:bg-fg/5"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="toggle"
    >
      <svg
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          v-if="isDark"
          d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
        <path v-else d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
      </svg>
    </button>
    <template #fallback><span class="block h-9 w-9" /></template>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");
const toggle = () => (colorMode.preference = isDark.value ? "light" : "dark");
</script>

<style></style>
