<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="<?php echo get_bloginfo( 'description' ); ?>">
	<meta name="author" content="">

	<title><?php echo get_bloginfo( 'name' ); ?></title>
	
	<!--<link href="http://chrisbdev.com/Content/bundledcss.min.css" rel="stylesheet">-->
	<link href="<?php bloginfo( 'template_directory' );?>/public/styles/main.css" rel="stylesheet">
	<link href="<?php bloginfo( 'template_directory' );?>/public/styles/blog.css" rel="stylesheet">
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	<?php wp_head();?>

	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-57228765-2', 'auto');
		ga('send', 'pageview');
	</script>
</head>

<body>

    <div class="c-header raised-one">

		<div class="c-header__inner">

			<div class="c-cut-out c-header__cut-out c-header__item" id="cb-name-cutout">
				<canvas width="120" height="96" class="cutOut"></canvas>
			</div>
		
			<h1 class="c-header__main-heading c-header__item">
				Chris Berry - Front end developer
			</h1>
			
			<!--<img src="<?php bloginfo( 'template_url' );?>/img/GitHub-Mark-32px"/>-->
		</div>

    </div>

	<div>