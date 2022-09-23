import { get, writable } from "svelte/store";

const getPokemonName = async () => {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${get(currentIdx)}`)
    .then((r) => r.json())
    .then((pokemon) => currentPokemonName.set(pokemon.name))
    .catch((e) => console.error(e));
};

export const currentIdx = writable("1");
export const currentPokemonName = writable("");

/** Keep a state of the promise so we can await it in app.svelte */
export const fetchPromise = writable(null);

/** Subscribe runs on first render so the pokemonName will be updated immediately on run */
currentIdx.subscribe(() => {
  fetchPromise.set(getPokemonName());
});
