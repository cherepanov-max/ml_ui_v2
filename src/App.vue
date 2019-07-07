<template>
	<v-app>
		<v-layout>
			<v-flex>
				<v-navigation-drawer permanent>
					<v-list>
						<v-list-tile>Вход в ML UI</v-list-tile>
						<v-divider></v-divider>
						<v-list-tile v-for="(item, key) in this.$router.options.routes" :to="item.path">{{item.path}}</v-list-tile>
						<v-divider></v-divider>
						<v-list-tile v-for="(item, key) in this.getBhildrenByRouteName()" :to="getFullChildrenPath(item.path)"> {{ item.path }} </v-list-tile>
					</v-list>
				</v-navigation-drawer>
			</v-flex>
			<v-flex>
				<router-view></router-view>
			</v-flex>
		</v-layout>
	</v-app>
</template>

<script>



export default {
	name: 'App',
	components: {

	},
	data () {
		return {

		}
	},
	computed: {
		currentTabName() {
			return this.$route.name;
		}
	},
	methods: {
		getBhildrenByRouteName() {
			for (var index in this.$router.options.routes) {
				if (this.$router.options.routes[index].name == this.currentTabName) {
					return this.$router.options.routes[index].children;
				}
			}
		},
		getFullChildrenPath(childrenPath) {
			console.log(this.$route.path + childrenPath);
			return this.$route.path + childrenPath;
		}
	}
}
</script>

<style lang="stylus" scoped>

</style>
>