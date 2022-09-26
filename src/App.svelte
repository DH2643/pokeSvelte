<script>
  import NumberEditor from './lib/NumberEditor.svelte';
  import PokePresenter from './lib/PokePresenter.svelte';
  import { currentIdx, currentPokemonName, fetchPromise } from './store';

  /** On idx change event, set the current index in the store if it is within the constraints */
  const updateCurrentIdx = ({detail: newIdx}) => {
    const numIdx = parseInt(newIdx)
    if (!(numIdx > 0 && numIdx < 899)) return;
    currentIdx.set(newIdx)
  }
</script>

<main>
  <div>
    <NumberEditor currentNumber={$currentIdx} on:numberChange={updateCurrentIdx} />
  </div>
  <div class="content">
    {#await $fetchPromise}
      <img src="https://www.csc.kth.se/~cristi/loading.gif" height={200} alt="loading spinner"  />
    {:then}
      <PokePresenter pokemonId={$currentIdx} pokemonName={$currentPokemonName} />
    {/await}
  </div>
</main>

<style>

</style>
