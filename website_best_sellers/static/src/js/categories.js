
(function() {
    "use strict";
    var website = openerp.website;

    website.snippet.options["best_seller_option"]= openerp.website.snippet.Option.extend(
    {   
       
        start: function()
        {   
            this.$target.find('.parametricTemplate').html("click here to select blog from options");
        },
        onFocus: function()
        {  
            this.$target.find('.parametricTemplate').html("Select here to edit");
        },
        clean_for_save: function() 
        {
            this.$target.find('.parametricTemplate')
                .empty()
                .append(
                	jQuery('<t />')
                        .attr('t-call', 'website_best_sellers.display_categories')
                        .attr('t-ignore-branding', '1')
                        // this.$target.find('content_best_sellers')
                        // .append(
                        // 	jQuery('<t />')
                        // 	 .attr('t-call', 'website_best_sellers.display_products')
                        // 	 .attr('t-ignore-branding', '1')
                        // 	);

                        // .append(
                        //     jQuery('<t />')
                        //        .attr('t-value', this.$target.attr('data-blog_id'))
                        //        .attr('t-set', 'blog_id')
                        //        .attr('t-ignore-branding', '1'),
                        //     jQuery('<t />')
                        //         .attr('t-value', this.$target.attr('data-parameter_id'))
                        //         .attr('t-set', 'parameter_id')
                        //         .attr('t-ignore-branding', '1')
                        //      )
                       
                );
        
        }

    });
})();