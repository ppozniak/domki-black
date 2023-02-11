<script>
	import { closeNav, navOpened } from '$lib/store';

	const navItems = [
		{
			label: 'O nas',
			href: '#o-nas'
		},
		{
			label: 'Domki',
			href: '#domki'
		},
		{
			label: 'Cennik',
			href: '#cennik'
		},
		{
			label: 'Galeria',
			href: '#galeria'
		},
		{
			label: 'Rezerwacje',
			href: '#rezerwacje'
		},
		{
			label: 'Kontakt',
			href: '#kontakt'
		},
		{
			label: 'Mapa',
			href: '#mapa'
		}
	];
</script>

<nav class="site-nav" class:active={$navOpened}>
	<ul class="site-nav__list">
		{#each navItems as navItem}
			<li class="site-nav__item">
				<a class="site-nav__link" href={`/${navItem.href}`} on:click={closeNav}>{navItem.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	@use 'sass:math';
	@import '../styles/utils';

	.site-nav {
		position: fixed;
		top: $header-size;
		left: 0;
		width: 80%;
		background-color: $navgray;
		transform: translateX(-100%);
		bottom: 0;
		transition: transform 0.3s ease-out;
		overflow-y: auto;

		@include from-landscape {
			top: 0;
			transform: none;
			width: $nav-width;
			z-index: 1;
			padding-top: $header-size * 1.75;
			box-shadow: 0 1px 15px 1px rgba(#000, 0.3);
			background: linear-gradient(to bottom, #fff Rem(100px), $navgray);
		}
		
		@include to-landscape {
			&.active {
				opacity: 1;
				transform: translateX(0);
				box-shadow: 0 1px 15px 1px rgba(#000, 0.3);
				z-index: 1;
			}
		}
	}

	.site-nav__list {
		@extend %list-reset;
	}

	.site-nav__link {
		display: block;
		color: $font-color;
		font-size: Rem(20px);
		font-weight: bold;
		text-decoration: none;
		padding: math.div($vflow, 2) 0 0;
		padding-left: math.div($vflow, 2);
		background-color: #fff;
		border-left: 0px solid $navgray;
		transition: border-left-width 0.2s ease-out;

		&:after {
			content: '';
			display: block;
			width: 80%;
			margin: math.div($vflow, 2) 0 0 math.div($vflow, 8);
			border-bottom: 1px solid rgba($black, 0.1);
		}

		@include from-landscape {
			font-size: 1rem;
			background-color: transparent;
		}

		&:focus,
		&:hover,
		:global(.active) {
			border-left-width: 1.2rem;
		}
	}
</style>
