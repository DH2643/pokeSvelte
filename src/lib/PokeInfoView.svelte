<script>
  export let pokemonId;
  export let pokemonName;
  export let pokemonImgSrc;
</script>

<h1>{pokemonId} {pokemonName}</h1>
<img src={pokemonImgSrc} height={200} alt={`Image of ${pokemonName}`} />
