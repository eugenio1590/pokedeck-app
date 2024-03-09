class PokemonController < ApplicationController
  def index
    @data = PokemonListService.new(page: params[:page].to_i, limit: params[:limit].to_i).call
    render json: @data
  end

  def show
    @info = PokemonInfoService.new(name: params[:name].downcase).call
    @evolutions = EvolutionChainService.new(id: @info[:chain_id]).call
    @info = @info.merge({evolutions: @evolutions})
    render json: @info
  end
end
