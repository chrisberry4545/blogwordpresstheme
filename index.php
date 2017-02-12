<?php get_header(); ?>

	<div class="row">

		<!--<?php get_sidebar(); ?>-->

		<div class="projectWrapper">

            <div>

                <?php 
                if ( have_posts() ) : while ( have_posts() ) : the_post();
        
                    get_template_part( 'content', get_post_format() );
    
                endwhile; endif; 
                ?>

            </div>

		</div> <!-- /.blog-main -->

	</div> <!-- /.row -->

<?php get_footer(); ?>