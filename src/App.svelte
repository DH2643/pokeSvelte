<script>
  import NumberEditor from './lib/NumberEditor.svelte';
  import PokePresenter from './lib/PokePresenter.svelte';
  import { currentIdx, currentPokemonName, fetchPromise } from './store';

  const updateCurrentIdx = (e) => {
    const newIdx = e.detail
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
      <PokePresenter pokemonIdx={$currentIdx} pokemonName={$currentPokemonName} />
    {/await}
  </div>
</main>

<style>

</style>
