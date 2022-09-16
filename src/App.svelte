<script>
  import NumberEditor from './lib/NumberEditor.svelte';
  import PokePresenter from './lib/PokePresenter.svelte';
  import { currentIdx } from './store';

  const getPokemonName = async (idxToFetch) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idxToFetch}`)
    let result = await response.json();

    return result.name;
  }

  let pokemonIdx;
  let pokemonName;
  currentIdx.subscribe((val) => {
    pokemonIdx = val;
    getPokemonName(val).then((name) => pokemonName = name).catch((e) => console.error(e))
  })

  const updateCurrentIdx = (e) => {
    const newIdx = e.detail
    
    const numIdx = parseInt(newIdx)
    if (!(numIdx > 0 && numIdx < 900)) return;
    
    currentIdx.set(newIdx)
  }
</script>

<main>
  <div class="card">
    <NumberEditor currentNumber={pokemonIdx} on:numberChange={updateCurrentIdx}  />
    <PokePresenter pokemonIdx={pokemonIdx} pokemonName={pokemonName} />
  </div>
</main>

<style>

</style>
