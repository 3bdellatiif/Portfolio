<script setup>
const { principles } = usePortfolio()
</script>

<template>
  <section id="principles" class="section">
    <h2 data-reveal class="mb-12 text-3xl font-semibold md:text-5xl">How I build</h2>

    <ul class="grid gap-6 md:grid-cols-2">
      <li v-for="p in principles" :key="p.title" data-reveal class="surface p-7">
        <h3 class="text-xl font-semibold">{{ p.title }}</h3>
        <p class="mt-2 text-muted">{{ p.text }}</p>
      </li>
    </ul>
  </section>
</template>
