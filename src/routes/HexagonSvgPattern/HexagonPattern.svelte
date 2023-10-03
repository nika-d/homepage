<script lang="ts">
    import { v4 as uuidv4 } from 'uuid'
import Hive from './Hive.svelte'

    export let colors,
        translations,
        scaleSymbol = 0.1

    function randomColor(){
        const random = Math.random() * 10
        if (random < .8)
            return colors.accent
        if (random < 2.5)
            return colors.dark
        if (random < 8)
            return colors.medium
        else
            return colors.light
    }

    const idPattern = uuidv4().split('-')[0],
        idSymbol = uuidv4().split('-')[0]
</script>
<div class="container">
    <div class="pattern-layout">
<svg viewBox="0 0 20 20" width="100%">
    <defs>
        <pattern
                id={idPattern}
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
        >
            <desc>Sechseckgitter</desc>
            <symbol id={idSymbol} >
                <Hive/>
            </symbol>
            {#each translations as t}
                <use
                        href={'#' + idSymbol}
                        transform={'translate(' + t + ') scale('+scaleSymbol+','+scaleSymbol+')'}
                        fill={randomColor()}
                />
            {/each}
        </pattern>
    </defs>

    <rect width="26" height="26" transform="translate(-3,-3)" fill={'url(#' + idPattern + ')'} />
</svg>
    </div>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pattern-layout{
        max-width: 100vw;
    }
</style>