<script>
  import PokeIdNameView from './PokeInfoView.svelte';

  export let pokemonIdx;
  export let pokemonName;

  let pokeInfoComponent = PokeIdNameView;
  let pokeInfoProps;
  $: pokeInfoProps =  {pokeIdProp: pokemonIdx, pokeNameProp: pokemonName, pokeImgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIdx}.png`};
</script>

<div>
  <svelte:component this={pokeInfoComponent} {...pokeInfoProps}/>
</div>