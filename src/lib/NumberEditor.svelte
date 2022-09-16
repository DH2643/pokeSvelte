<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher()

    const handleInputChange = (e) => {
        const value = e.target.value;
        dispatch('numberChange', value)
    }

    export let currentNumber;
</script>

<label>
    <input type=number value={currentNumber} on:input={handleInputChange} min=1 max=900>
</label>