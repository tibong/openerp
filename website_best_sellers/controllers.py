# -*- coding: utf-8 -*-
import json
from openerp import http
import base64
from openerp.http import request
from openerp.exceptions import Warning

class WebsiteBestSellers(http.Controller):
# if product_com.product_template_id is product_id:

	@http.route(['/wew'], type='json', auth='public', website=True)
	def index(self, data_id=None, **post):
		products_compare = None
		values = {}
		# raise Warning(id)
		products = request.env['product.template'].sudo().search([('public_categ_ids','=',data_id)],[])
		# products =  http.request.env['product.template'].sudo().search(['public_categ_ids','in',id],[])
		# for product in products:
		for product in products:
			values.update({product.id:{'name':product.name,'image':product.image}})
		return json.dumps(values)
		# values = {
  #   				'id':products_compare.product_template_id
  #   				'cat_id':products_compare.product_public_category_id
  #   			}
    				# if products_compare:
		# 	for product_com in products_compare:
		# 		productos =  http.request.env['product.template'].sudo().search([('id','in',product_com.product_template_id)])
    	
    	# best_sellers = request.env['product.template'].sudo().search([('customer','=',True)])
        # return http.request.render('website_best_sellers.snippets', {
        #     'objects': ["Diana Padilla", "Jody Caroll", "Lester Vaughn"]
        # })
        # cr, uid, pool = request.cr, request.uid, request.registry
    	# values = {}
    	# products = http.request.env['product.template'].search([])
    	# product_id = product.id for product in products

    		# for product in products:
    		# 	if product.id in product_com.product_template_id:
    		# 		products_2 = http.request.env['product.template'].search([])
    		# 		values = {
    		# 			'products':http.request.env['product.template']
    		# 		}

