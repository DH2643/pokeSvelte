<script>
  import NumberEditor from './NumberEditor.svelte';
  import PokeIdNameView from './PokeInfoView.svelte';

  export let pokemonIdx;
  export let pokemonName;

  let numberEditorComponent = NumberEditor;
  let numberEditorProps = {currentNumber: pokemonIdx}

  let pokeInfoComponent = PokeIdNameView;
  let pokeInfoProps =  {pokeIdProp: pokemonIdx, pokeNameProp: pokemonName, pokeImgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIdx}.png`};
</script>

<div>
<svelte:component this={numberEditorComponent} {...numberEditorProps} />
</div>
<div>
<svelte:component this={pokeInfoComponent} {...pokeInfoProps}/>
</div>