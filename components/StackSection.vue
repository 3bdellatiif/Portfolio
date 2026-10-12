<script setup>
const { tech } = usePortfolio();
const hover = (icon) => {
  const n = parseInt(icon?.hex ?? "000000", 16);
  const brightness =
    ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000;
  return brightness < 40 ? "rgb(var(--c-fg))" : `#${icon.hex}`;
};
</script>

<template>
  <section id="stack" class="section">
    <h2 data-reveal class="mb-12 text-3xl font-semibold md:text-5xl">
      Tools I work with
    </h2>

    <ul class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      <li
        v-for="t in tech"
        :key="t.name"
        data-reveal
        class="surface group flex flex-col items-center gap-4 px-4 py-7 cursor-pointer"
        :style="{ '--brand': hover(t.icon) }"
      >
        <svg
          v-if="t.icon"
          class="h-10 w-10 fill-muted transition-colors duration-300 group-hover:fill-[var(--brand)]"
          viewBox="0 0 24 24"
          role="img"
          :aria-label="`${t.name} logo`"
        >
          <path :d="t.icon.path" />
        </svg>
        <span
          v-else
          class="grid h-10 w-10 place-items-center rounded-lg border border-muted/60 font-mono text-sm text-muted"
          aria-hidden="true"
        >
          {{ t.name.slice(0, 2) }}
        </span>
        <span class="text-sm font-medium text-fg">{{ t.name }}</span>
      </li>
    </ul>
  </section>
</template>
