class EvolutionChainService
  
  def initialize(id:)
    @id = id
  end

  def call
    species = Rails.cache.fetch("/evolution_chain/#{id}", expires_in: 24.hours) do
      Rails.logger.debug "[DEBUG] Using the PokeAPI."

      chain = PokeApi.get(evolution_chain: id).chain

      build_evoultion_item(chain)
    end
  end

  private

  attr_reader :id

  def build_evoultion_item(item)
    {
      info: PokemonInfoService.new(name: item.species.name).call,
      evolves_to: item.evolves_to.map { |item| build_evoultion_item(item) }
    }
  end
end