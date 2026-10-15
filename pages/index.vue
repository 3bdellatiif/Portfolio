<script setup>
const { owner } = usePortfolio();
const description = `${owner.headline} ${owner.tagline}`;
useSeoMeta({
  title: `${owner.name}: ${owner.title}`,
  description,
  ogTitle: `${owner.name}: ${owner.title}`,
  ogDescription: description,
});
</script>

<template>
  <main>
    <HomeHeroSection />
    <HomeProjectsSection />
    <HomeStackSection />
    <HomeContactSection />
  </main>
</template>
