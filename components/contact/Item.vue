<script lang="ts" setup>
const props = defineProps(["link"]);
console.log("props.link");
</script>

<template>
  <a
    :href="link.url"
    target="_blank"
    rel="noopener noreferrer"
    class="anim-link group flex items-center justify-between px-4 py-3.5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-200 hover:-translate-x-1.5 hover:-translate-y-1.5"
  >
    <div class="flex items-center gap-3.5 min-w-0">
      <img
        :src="link.icon"
        :alt="`${link.title} icon`"
        class="w-5 h-5 group-hover:opacity-100 transition-opacity flex-shrink-0"
        loading="lazy"
      />
      <div class="flex flex-col text-left truncate">
        <span
          class="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors"
        >
          {{ link.title }}
        </span>
      </div>
    </div>
  </a>
</template>
