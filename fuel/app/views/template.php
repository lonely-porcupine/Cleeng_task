<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<script
		src="https://code.jquery.com/jquery-3.2.1.min.js"
		integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
		crossorigin="anonymous"></script>
	<script>
		window.icons = {
			1: {
				icon: '<?=Asset::get_file("ludzik.png", "img")?>'
			},
			2: {
				icon: '<?=Asset::get_file("samochodziki.png", "img")?>'
			},
			3: {
				icon: '<?=Asset::get_file("adekwatnyobrazek.png", "img")?>'
			}
		};
		window.includeMarkerScript = (function() {
			var script = document.createElement('script');
			script.src = '<?=Uri::create("markers.html")?>';
			document.getElementsByTagName('head')[0].appendChild(script);
		});
	</script>
	<?php echo Asset::css('tether.min.css'); ?>
	<?php echo Asset::css('vex.css'); ?>
	<?php echo Asset::css('vex-theme-wireframe.css'); ?>
	<?php echo Asset::css('bootstrap.min.css'); ?>
	<?php echo Asset::css('bootstrap-reboot.min.css'); ?>
	<?php echo Asset::css('bootstrap-grid.min.css'); ?>
	<?php echo Asset::js('tether.min.js'); ?>
	<?php echo Asset::js('vex.combined.min.js'); ?>
	<script>vex.defaultOptions.className = 'vex-theme-wireframe';</script>
	<?php echo Asset::js('bootstrap.min.js'); ?>
	<?php echo Asset::js('maps.js'); ?>
	<?php echo Asset::css('custom.css'); ?>
	<script async defer		
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD17wQjRNDBxcdjee5dybGY4W0SyvvOdME&callback=initMap"></script>
</head>
<body>
	<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
		<a class="navbar-brand" href="<?=Uri::base()?>">eOstrzegator</a>
		<ul class="navbar-nav mr-auto">
			<li class="nav-item" id="simulationToggle">
				<a class="nav-link" href="javascript:void(0)">Location simulation: <span>off</span></a>
			</li>
		</ul>
	</nav>
	<?php echo $content; ?>

</body>
</html>
