import { writable, derived } from "svelte/store";

export const pokeInfo = writable({
  id: 3,
  name: "adam",
});

export const currentIdx = writable(1);
