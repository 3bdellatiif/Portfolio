<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: () => ({
      statusCode: 404,
      statusMessage: "Page Not Found",
      message: "The page you are looking for doesn't exist or has been moved.",
    }),
  },
});

const handleClearError = () => {
  clearError({ redirect: "/" });
};

definePageMeta({
  layout: "default",
});
</script>

<template>
  <main
    class="min-h-screen bg-[#090a0f] text-zinc-100 flex items-center justify-center p-6 selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-hidden"
  >
    <div
      aria-hidden="true"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"
    />

    <div
      class="relative z-10 w-full max-w-md flex flex-col items-center text-center"
    >
      <!-- Large Error Display -->
      <h1
        class="text-7xl sm:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-600 mb-4 select-none"
      >
        {{ error.statusCode || 404 }}
      </h1>

      <!-- Error Title & Description -->
      <h2
        class="text-xl sm:text-2xl font-semibold text-zinc-200 tracking-tight mb-2"
      >
        Lost in the digital void
      </h2>

      <p class="text-sm text-zinc-400 max-w-sm mb-8 leading-relaxed">
        {{
          error.message ||
          "The page you are looking for doesn't exist, has been moved, or an unexpected error occurred."
        }}
      </p>

      <!-- Action Button -->
      <button
        type="button"
        @click="handleClearError"
        class="group inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700/80 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-600 text-sm font-medium text-zinc-200 hover:text-white transition-all duration-200 hover:translate-x-[2px] hover:-translate-y-[2px] shadow-lg shadow-black/40"
      >
        <span>Back to homepage</span>
      </button>

      <!-- Footer Help Hint -->
      <span class="mt-12 text-xs font-mono text-zinc-600">
        3bdellatiif.com
      </span>
    </div>
  </main>
</template>
