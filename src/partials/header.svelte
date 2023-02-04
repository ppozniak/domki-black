<script>
import { toggleNav, navOpened } from "$lib/store";
import LogoSvg from '$lib/images/LogoBlack.svg?component';
</script>

<header class="site-header">
	<div class="container">
		<div class="site-header__body">
			<a href="#top">
				<h1 class="site-logo">
						<LogoSvg   />
				</h1>
			</a>
			<button class="site-nav-toggle" type="button" on:click={toggleNav}>
				<span class="hamburger hamburger--spin" class:is-active="{$navOpened}">
					<span class="hamburger-box">
						<span class="hamburger-inner" />
						<span class="sr-only">Otworz lub zamknij menu</span>
					</span>
				</span>
			</button>
		</div>
	</div>
</header>

<style lang="scss">
	@import '../styles/utils';

	.site-header {
		display: flex;
		position: fixed;
		top: 0;
		width: 100%;
		align-items: center;
		height: $header-size;
		background-color: #fff;
		z-index: 2;
		box-shadow: 0 1px 20px 4px rgba($black, 0.14);

		@include from-landscape {
			left: 0;
			width: $nav-width;
			background: none;
			box-shadow: none;
			border: none;
			z-index: 2;
			height: auto;
		}
	}

	.site-header {
		.container,
		.site-header__body,
		a,
		h1 {
			height: 100%;
		}
	}

	.site-header__body {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		padding: Rem(9px) 0;
		@include from-landscape {
			display: block;
			justify-content: center;
			border-bottom: 1px solid rgba($black, 0.14);
		}
	}

	.site-logo {
		display: flex;
		align-items: center;
		margin: 0;
		margin-right: auto;
	}

	.site-logo__image {
		display: block;
		height: 100%;
		width: auto;
		max-height: Rem(65px);

		@include from-landscape {
			width: 100%;
			height: auto;
		}
	}

	.site-nav-toggle {
		padding: 0;
		margin: 0;
		background: none;
		border: none;
		color: #fff;
		&:focus,
		&:hover {
			outline: none;
		}
		@include from-landscape {
			display: none;
		}
	}
</style>
