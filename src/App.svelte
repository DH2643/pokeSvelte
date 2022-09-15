<script>
  import PokePresenter from './lib/PokePresenter.svelte';

  import { currentIdx } from './store';

  let pokeProps = {pokemonIdx: 66, pokemonName: 'biffen'}
</script>

<main>
  <div class="card">
    <PokePresenter {...pokeProps} />
  </div>
</main>

<style>

</style>
