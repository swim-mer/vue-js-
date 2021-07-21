<template>
	<div>
		<img :src="this.path + code" alt="cat code image goes here">
		<div class="get-random-code">
			<input placeholder="404">
			<button @click="$emit('getstate')">Get Code</button>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		path: 'https://http.cat/'
	}),
	props: {
		code: {
			type: String,
			default: ''
		}
	}
}
</script>

<style>
html {
	padding: 50px;
}
</style>
