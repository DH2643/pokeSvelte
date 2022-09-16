import { writable, derived } from "svelte/store";

export const currentIdx = writable("1");
export const isFetching = writable(true);
