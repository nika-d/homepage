<script lang="ts">
    import type {PageServerData} from './$types'
    export let data : PageServerData
</script>
<!--
@todo hexagon aus homepage raus
@todo hexagon in ein projekt mit lisa graphs
-->

<div class="container">
    <div class="description">{data.text}</div>
    <div class="picture-container">
        <img src="n.png" alt="n in a circle"/>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        overflow: hidden;
        justify-content: center;
    }
    .description{
        padding: 3rem;
        min-width: 20vw;
        max-width: 100vw;
        flex-basis: 20rem;
    }
    .picture-container {
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 100vh;
        max-width: 100vw;
    }
    img {
        min-width: 100px;
        min-height: 100px;
        width: 100%;
        height: 100%;
    }
</style>