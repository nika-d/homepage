<script lang="ts">
    import HexagonPattern from './HexagonPattern.svelte'
    import type {PageServerData} from './$types'

    export let data: PageServerData
    const translations = data.translations
</script>

<div class="container">
    <div class="description">For sources of the maths behind the pattern and the used svg icon, please see code comments.</div>
    <HexagonPattern colors={data.colors} {translations}/>
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        background-color: #645b4f;
        height: 100vh;
        overflow: hidden;
        justify-content: center;
    }
    .description{
        color: #fccf4c;
        padding: 3rem;
        min-width: 20vw;
        max-width: 100vw;
        flex-basis: 20rem;

    }
</style>