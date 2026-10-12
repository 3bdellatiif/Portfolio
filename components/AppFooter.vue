<template>
  <footer class="border-t border-line/10">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row"
    >
      <p>© {{ new Date().getFullYear() }} all rights reserved</p>
      <p class="flex gap-5">
        <a :href="owner.github" rel="noopener" class="hover:text-fg">GitHub</a>
        <a :href="owner.linkedin" rel="noopener" class="hover:text-fg"
          >LinkedIn</a
        >
      </p>
    </div>
  </footer>
</template>
<script setup>
const { owner } = usePortfolio();
</script>
