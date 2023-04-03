<script>
    import '../app.css';
    import Header from '../lib/components/Header.svelte';

</script>

<Header />

<main data-sveltekit-prefetch class="cont-principal">
    <slot/>
</main>