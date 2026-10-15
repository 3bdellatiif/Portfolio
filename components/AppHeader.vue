<script setup>
const { owner } = usePortfolio();
const links = [
  ["#projects", "Work"],
  ["#stack", "Stack"],
  // ['#principles', 'Principles'],
  ["#contact", "Contact"],
];

// `value` is the resolved theme ('light' | 'dark'); `preference` is what the visitor picked.
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-4 pt-3">
    <div
      class="surface mx-auto flex max-w-5xl items-center justify-between px-5 py-3"
    >
      <a href="#top" class="font-display text-lg font-semibold text-fg">{{
        owner.name
      }}</a>

      <nav aria-label="Primary" class="hidden gap-6 text-sm md:flex">
        <a
          v-for="[href, label] in links"
          :key="href"
          :href="href"
          class="nav-link"
          >{{ label }}</a
        >
      </nav>
      <ThemeBtn />
    </div>
    <div
      data-progress
      class="mx-auto mt-1 h-px max-w-5xl origin-left bg-accent"
      style="transform: scaleX(0)"
      aria-hidden="true"
    />
  </header>
</template>
