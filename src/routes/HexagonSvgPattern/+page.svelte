<script lang="ts">
    import HexagonPattern from './HexagonPattern.svelte'
    import type {PageServerData} from './$types'

    export let data: PageServerData
    const translations = data.translations
</script>

<div>
<HexagonPattern colors={data.colors} {translations}/>

<p>For sources of the maths behind the pattern and the used svg icon, please see code comments.</p>

</div>

<style>
    div {
    background-color: #645b4f;
}
    p {
        color: #fccf4c;
    }
</style>