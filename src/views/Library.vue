<template>
    <v-flex>
        {{ test() }}Library
    </v-flex>
</template>

<script>
export default {
	name: 'Library',
	components: {

	},
	data () {
		return {
			//
		}
    },
    methods: {
        test() {
            console.log(this.$router.options.routes);
            console.log(this.$route);
        }
    }
}
</script>
