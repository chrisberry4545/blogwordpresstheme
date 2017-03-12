<?php get_header(); ?>

	<div>

		<!--<?php get_sidebar(); ?>-->

		<div class="c-main-content-wrapper">

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