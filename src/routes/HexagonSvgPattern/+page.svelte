<script lang="ts">
    import Psychology from './Psychology.svelte'
    import OtherHouses from "./OtherHouses.svelte"
    import Lan from "./Lan.svelte"
    import HexagonPattern from './HexagonPattern.svelte'
    import type { PageServerData } from './$types'
    import Dice from './Dice.svelte'

    export let data: PageServerData
    const translations = data.translations
</script>

<div>
    <Dice/>
</div>

<div class="row p-5 gap-3">
    <div class="col">
        <HexagonPattern colors={data.colors.colorsPsychology} {translations}>
            <Psychology/>
        </HexagonPattern>
    </div>
    <div class="col">
        <HexagonPattern colors={data.colors.colorsOtherHouses} scaleSymbol={0.05} {translations}>
            <OtherHouses/>
        </HexagonPattern>
    </div>
    <div class="col">
        <HexagonPattern colors={data.colors.colorsLan} scaleSymbol={0.05} {translations}>
            <Lan/>
        </HexagonPattern>
    </div>
</div>
