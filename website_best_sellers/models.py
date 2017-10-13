# -*- coding: utf-8 -*-

from openerp import models, fields, api

class website_seller(models.Model):
	_name = 'website.best.sellers'

	category = fields.Char(required=True,string='Category Name')
	category_id = fields.Many2one("product.public.category",string="Category ID")
	

	def test(req):
		return "HELLO"
# class website_best_sellers(models.Model):
#     _name = 'website_best_sellers.website_best_sellers'

#     name = fields.Char()