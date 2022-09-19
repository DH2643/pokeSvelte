<script>
  import NumberEditor from './lib/NumberEditor.svelte';
  import PokePresenter from './lib/PokePresenter.svelte';
  import { currentIdx } from './store';

  const getPokemonName = async (idxToFetch) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idxToFetch}`);
    let result = await response.json();

    return result.name;
  }

  let pokemonIdx;
  let pokemonName;
  let promise;
  currentIdx.subscribe((val) => {
    pokemonIdx = val;
    promise = getPokemonName(val)
      .then((name) => pokemonName = name)
      .catch((e) => console.error(e))
  })

  const updateCurrentIdx = (e) => {
    const newIdx = e.detail
    const numIdx = parseInt(newIdx)
    if (!(numIdx > 0 && numIdx < 899)) return;
    currentIdx.set(newIdx)
  }
</script>

<main>
  <div>
    <NumberEditor currentNumber={pokemonIdx} on:numberChange={updateCurrentIdx} />
  </div>
  <div class="content">
    {#await promise}
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src="https://www.csc.kth.se/~cristi/loading.gif" height={200} />
    {:then}
      <PokePresenter pokemonIdx={pokemonIdx} pokemonName={pokemonName} />
    {/await}
  </div>
</main>

<style>

</style>
