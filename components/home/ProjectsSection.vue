<script setup>
const { projects } = usePortfolio();
</script>

<template>
  <section id="projects" class="section">
    <div data-reveal class="mb-12">
      <h2 class="text-3xl font-semibold md:text-5xl">Selected work</h2>
      <p v-if="projects.length != 0" class="mt-4 max-w-2xl text-lg text-muted">
        Systems I architected end to end, with the decisions and results behind
        them.
      </p>
      <p v-else class="mt-4 max-w-2xl text-3xl text-muted">Coming soon!</p>
    </div>

    <ul class="grid gap-6 md:grid-cols-2">
      <li v-for="p in projects" :key="p.title" data-reveal>
        <article class="surface flex h-full flex-col gap-5 p-7 cursor-pointer">
          <header class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 class="text-2xl font-semibold">{{ p.title }}</h3>
              <p class="text-muted">{{ p.tagline }}</p>
            </div>
          </header>

          <p>{{ p.summary }}</p>

          <ul class="space-y-2 text-[0.95rem]">
            <li
              v-for="h in p.highlights"
              :key="h"
              class="border-l-2 border-accent/60 pl-4 text-fg/75"
            >
              {{ h }}
            </li>
          </ul>

          <div class="mt-auto space-y-4 border-t border-line/10 pt-5">
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="t in p.stack"
                :key="t"
                class="rounded-md bg-fg/10 px-2 py-1 font-mono text-xs"
              >
                {{ t }}
              </li>
            </ul>
            <a
              v-if="p.link"
              :href="p.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-accent hover:underline"
            >
              View project →
            </a>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>
