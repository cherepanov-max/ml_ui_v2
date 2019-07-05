<template>
	<v-app>
		<v-layout>
			<v-flex>
				<v-navigation-drawer permanent>
					<v-list>
						<v-list-tile>Вход в ML UI</v-list-tile>
						<v-divider></v-divider>
						<v-list-tile  to="/library">Библиотека</v-list-tile>
						<v-list-tile to="/lab">Лаборатория</v-list-tile>
						<v-divider></v-divider>
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
			//
		}
	}
}
</script>

<style lang="stylus" scoped>

</style>
>