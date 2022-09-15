<script>
    export let pokeIdProp
    export let pokeNameProp
    export let pokeImgSrc
</script>

<h1>{pokeIdProp} {pokeNameProp}</h1>
<!-- svelte-ignore a11y-missing-attribute -->
<img src={pokeImgSrc} height={200}/>