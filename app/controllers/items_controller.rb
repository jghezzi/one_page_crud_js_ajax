class ItemsController < ApplicationController

	def index
		@items = Item.all
		@new_item = Item.new
	end

	def update
	  @items = Item.all
	  @item = Item.find(params[:id])
	  if @item.update_attributes(item_params)
	    respond_to do |format|
				format.js
				format.html { redirect_to items_path }
			end
		else
			respond_to do |format|
				format.js { render plain: "0" }
				format.html { redirect_to lists_path, notice: "Update failed." }
			end
		end
	end


	def create
		@new_item = Item.new(item_params)
		if @new_item.save
			respond_to do |format|
				format.js {render json: @new_item}
			end
		else
			respond_to do |format|
				format.js { render plain: "0" }
				format.html { redirect_to lists_path, notice: "Create failed." }
			end
		end
	end

	def destroy
		@item = Item.find(params[:id])
		if @item.destroy
				respond_to do |format|
					format.js
					format.html { redirect_to items_path }
				end
		else
			respond_to do |format|
				format.js { render plain: "0" }
				format.html { redirect_to lists_path, notice: "Destroy failed." }
			end
		end
	end

	private

	def item_params
		params.require(:item).permit!
	end

end