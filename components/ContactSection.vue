<script setup>
const { owner } = usePortfolio()
const form = reactive({ name: '', email: '', message: '' })

// No backend: the browser validates the fields, then the message opens in the visitor's email app.
function send() {
  const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
  const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
  location.href = `mailto:${owner.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contact" class="section">
    <div data-reveal class="mb-12 text-center">
      <h2 class="text-3xl font-semibold md:text-5xl">Let’s talk</h2>
      <p class="mx-auto mt-4 max-w-xl text-lg text-muted">Tell me about the problem and the constraints. I reply within two working days.</p>
    </div>

    <form data-reveal class="surface mx-auto max-w-xl space-y-5 p-7" @submit.prevent="send">
      <div>
        <label for="name" class="mb-2 block text-sm font-medium text-fg">Name</label>
        <input id="name" v-model="form.name" class="field" autocomplete="name" required minlength="2" />
      </div>
      <div>
        <label for="email" class="mb-2 block text-sm font-medium text-fg">Email</label>
        <input id="email" v-model="form.email" class="field" type="email" autocomplete="email" required />
      </div>
      <div>
        <label for="message" class="mb-2 block text-sm font-medium text-fg">Message</label>
        <textarea id="message" v-model="form.message" class="field min-h-36 resize-y" rows="5" required minlength="20" />
      </div>

      <button type="submit" class="btn-primary">Write the email</button>
      <p class="text-sm text-muted">
        Opens your email app with the message ready to send to
        <a :href="`mailto:${owner.email}`" class="text-accent hover:underline">{{ owner.email }}</a>.
      </p>
    </form>
  </section>
</template>
