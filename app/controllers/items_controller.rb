class ItemsController < ApplicationController

	def index
		@items = Item.all
		@new_item = Item.new
	end

	# def new
	# 	@new_item = Item.new
	# end

	def create
		@new_item = Item.new(item_params)
		if @new_item.save
			redirect_to "/items"
		end
	end

	private

	def item_params
		params.require(:item).permit!
	end

end