class PokemonController < ApplicationController
  def index
    @data = PokemonListService.new(page: params[:page].to_i, limit: params[:limit].to_i).call
    render json: @data
  end
end
