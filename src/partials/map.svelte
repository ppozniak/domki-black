<iframe
	id="mapa"
	class="map"
	src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0--fKzhnyUzG9d6he_AkjSWWzFtbDkEo&q=Wrzosowa+6,Sarbinowo&zoom=13"
	allowfullscreen
	title="Mapa Sarbinowo"
/>

<style lang="scss">
	@import '../styles/utils';

	.map {
		display: block;
		border: none;
		width: 100%;
		height: Rem(400px);
		@include from-landscape {
			height: Rem(600px);
		}
	}
</style>
