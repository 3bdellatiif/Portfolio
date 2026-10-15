<template>
  <main
    class="text-zinc-100 h-full flex items-center justify-center selection:bg-emerald-500/20 selection:text-emerald-300"
  >
    <ThemeBtn class="absolute right-5 top-5" />
    <div class="w-full max-w-sm flex flex-col items-center">
      <header class="anim-header flex flex-col items-center mb-8 text-center">
        <div
          class="relative w-44 aspect-square cursor-pointer select-none [perspective:1000px] mb-2"
          @click="isFlipped = !isFlipped"
          title="Click to flip"
        >
          <div
            class="w-full h-full relative transition-transform duration-500 [transform-style:preserve-3d] mb-2"
            :class="{ '[transform:rotateY(180deg)]': isFlipped }"
          >
            <div
              class="absolute inset-0 w-full h-full rounded-full [backface-visibility:hidden]"
            >
              <img
                src="https://github.com/3bdellatiif.png"
                alt="Abdelrahman"
                class="w-full h-full rounded-full object-cover"
                loading="eager"
              />
            </div>

            <!-- Back: QR Code -->
            <div
              class="absolute inset-0 w-full h-full rounded-full bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent [transform:rotateY(180deg)] [backface-visibility:hidden]"
            >
              <!-- Replace the src with your own QR code or an API-generated code -->
              <img
                :src="qrImage"
                alt="Website QR Code"
                class="w-full h-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <h1 class="text-xl font-semibold tracking-tight text-zinc-100">
          {{ owner.headline }}
        </h1>
        <p class="text-xs text-zinc-400 mt-1 tracking-wide font-mono">
          {{ owner.title }}
        </p>
      </header>

      <!-- Links List -->
      <div class="w-full flex flex-col gap-3">
        <ContactItem
          :link="link"
          v-for="link in owner.contact"
          :key="link.title"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
const { owner } = usePortfolio();
import { useSeoMeta } from "nuxt/app";
import qrImage from "../assets/qr-code.png";
const isFlipped = ref(false);
definePageMeta({
  layout: "contact",
  head
});
</script>
