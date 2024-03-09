class PokemonInfoService
  include ServiceHelper

  def initialize(name:)
    @name = name
  end

  def call
    Rails.cache.fetch("/pokemon/#{name}", expires_in: 24.hours) do
      Rails.logger.debug "[DEBUG] Using the PokeAPI."

      info = PokeApi.get(pokemon: name)
      species = PokeApi.get(pokemon_species: get_id(info.species.url))

      {
        id: info.id,
        name: info.name.capitalize,
        weight: info.weight,
        color: species.color.name,
        description: species.flavor_text_entries[0]&.flavor_text,
        chain_id: get_id(species.evolution_chain.url),
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/#{info.id}.png",
        types: info.types.map {|t| t.type.name.capitalize },
        abilities: info.abilities.map { |a| a.ability.name.capitalize }
      }
    end
  end

  private

  attr_reader :name
end
