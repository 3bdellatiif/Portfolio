/**
 * All scroll behaviour, powered by GSAP (loaded lazily, browser only):
 *  - Smooth anchor scrolling for every in-page link (ScrollToPlugin)
 *  - Active nav link follows the section in view (ScrollTrigger)
 *  - `[data-hero]`    hero intro, staggered
 *  - `[data-reveal]`  fade-up when scrolled into view (batched, so rows of cards stagger)
 *  - `[data-parallax="n"]` drifts n% of its height while the hero scrolls away
 *  - `[data-progress]` scroll progress bar
 * Without the `js` class (reduced motion, or GSAP failed) nothing is hidden and links jump natively.
 */
export function useAnimations() {
  let context
  let removeClick

  onMounted(async () => {
    const root = document.documentElement
    if (!root.classList.contains('js')) return

    try {
      const [{ gsap }, { ScrollTrigger }, { ScrollToPlugin }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/ScrollToPlugin'),
      ])
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

      context = gsap.context(() => {
        gsap.to('[data-hero]', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.1 })

        ScrollTrigger.batch('[data-reveal]', {
          start: 'top 88%',
          once: true,
          onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, overwrite: true }),
        })

        gsap.to('[data-progress]', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } })

        gsap.utils.toArray('[data-parallax]').forEach((el) =>
          gsap.to(el, {
            yPercent: Number(el.dataset.parallax),
            ease: 'none',
            scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true },
          }),
        )

        gsap.utils.toArray('.nav-link').forEach((link) =>
          ScrollTrigger.create({
            trigger: link.getAttribute('href'),
            start: 'top 50%',
            end: 'bottom 50%',
            onToggle: (self) => link.toggleAttribute('data-active', self.isActive),
          }),
        )
      })

      const onClick = (event) => {
        const href = event.target.closest('a[href^="#"]')?.getAttribute('href')
        const target = href && href.length > 1 ? document.querySelector(href) : null
        if (!target) return
        event.preventDefault()
        gsap.to(window, { duration: 1, ease: 'power3.inOut', scrollTo: { y: target, offsetY: 72 } })
        history.replaceState(null, '', href)
      }
      document.addEventListener('click', onClick)
      removeClick = () => document.removeEventListener('click', onClick)
    } catch {
      root.classList.remove('js') // GSAP failed to load: show everything instead of leaving it hidden
    }
  })

  onBeforeUnmount(() => {
    context?.revert()
    removeClick?.()
  })
}
