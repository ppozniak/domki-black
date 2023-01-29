<footer class="section site-footer">
	&copy; Wszelkie prawa zastrzeżone
	<span class="current-year">{new Date().getFullYear()}</span> Black Sarbinowo.
	<br />
	<small class="ref"
		>Wykonanie:
		<a class="ref-link" href="https://bluebracket.net" rel="noopener" target="_blank">
			<span>blue</span>bracket</a
		>
	</small>
</footer>

<style lang="scss">
	@import '../styles/utils';

	.site-footer {
		background-color: darken($black, 5%);
		color: #fff;
		text-align: center;
		font-size: 0.8rem;
	}

	.ref {
		opacity: 0.8;
	}

	.ref-link {
		text-decoration: none;
		text-shadow: 1px 1px 0 rgba(#000, 0.6);
		color: #fff;
		span {
			color: #0096ff;
		}
		&:hover,
		&:focus {
			text-decoration: underline;
		}
	}
</style>
