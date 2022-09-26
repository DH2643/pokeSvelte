<script>
  import PokeIdNameView from './PokeInfoView.svelte';

  /** Expose props to the component that is rendering this component */
  export let pokemonId;
  export let pokemonName;

  /** Generate the pokemon image path */
  const pokemonImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

  /** Create an object with the props that will be passed to the view  */
  const pokeInfoProps =  {pokemonId, pokemonName, pokemonImgSrc};
</script>

<div>
  <svelte:component this={PokeIdNameView} {...pokeInfoProps}/>
</div>