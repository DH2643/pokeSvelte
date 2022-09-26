import { get, writable } from "svelte/store";

/** Async function for fetching the name of the currently selected pokemon and setting the state to the result of the parsed request */
const getPokemonName = async () => {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${get(currentIdx)}`)
    .then((r) => r.json())
    .then((pokemon) => currentPokemonName.set(pokemon.name))
    .catch((e) => console.error(e));
};

export const currentIdx = writable("1");
export const currentPokemonName = writable("");

/** Keep a state of the promise so we can await it in App.svelte */
export const fetchPromise = writable(null);

/**
 * Every time the current index is changed (subscribe), we want to update the state with the new pokemon's name.
 * Note: Subscribe runs on first render so the pokemonName will be updated immediately on run
 */
currentIdx.subscribe(() => {
  fetchPromise.set(getPokemonName());
});
