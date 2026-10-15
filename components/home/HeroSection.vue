<script setup>
const { owner } = usePortfolio()
</script>

<template>
  <section id="top" class="relative isolate flex min-h-[100svh] items-center overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div data-parallax="30" class="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
      <div data-parallax="-20" class="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-fg/10 blur-3xl" />
    </div>

    <div class="mx-auto w-full max-w-5xl px-6 pb-20 pt-32">
      <h1 data-hero class="max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
        {{ owner.headline }}
        <span class="block text-muted">{{ owner.tagline }}</span>
      </h1>
      <p data-hero class="mt-8 max-w-xl text-lg">{{ owner.blurb }}</p>
      <div data-hero class="mt-10 flex flex-wrap gap-3">
        <a href="#projects" class="btn-primary">See selected work</a>
        <NuxtLink to="/contact" class="btn-ghost">Get in touch</NuxtLink>
      </div>
    </div>
  </section>
</template>
