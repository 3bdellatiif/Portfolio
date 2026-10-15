<template>
  <footer class="border-t border-line/10">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 p-6 text-sm text-muted sm:flex-row"
    >
      <p>© {{ new Date().getFullYear() }} all rights reserved</p>
      <p class="flex gap-5">
        <a
          v-for="contact in contacts"
          :key="contact.title"
          target="_blank"
          :href="contact.link"
          rel="noopener"
          class="hover:text-fg"
          >{{ contact.title }}</a
        >
      </p>
    </div>
  </footer>
</template>
<script setup>
const { owner } = usePortfolio();
const contacts = owner.contact.slice(0, 2);
</script>
