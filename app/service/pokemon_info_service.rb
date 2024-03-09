class PokemonInfoService
  include ServiceHelper

  def initialize(name:, simple: true)
    @name = name
    @simple = simple
  end

  def call
    basic = Rails.cache.fetch("/pokemon/#{name}", expires_in: 24.hours) do
      Rails.logger.debug "[DEBUG] Using the PokeAPI."

      info = PokeApi.get(pokemon: name)

      {
        id: info.id,
        name: info.name.capitalize,
        weight: info.weight,
        specie_id: get_id(info.species.url),
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/#{info.id}.png",
        types: info.types.map {|t| t.type.name.capitalize },
        abilities: info.abilities.map { |a| a.ability.name.capitalize }
      }
    end

    simple ? basic : basic.merge(extra_info(basic[:specie_id]))
  end

  private

  attr_reader :name, :simple

  def extra_info(specie_id)
    Rails.cache.fetch("/pokemon/#{name}/extra", expires_in: 24.hours) do
      Rails.logger.debug "[DEBUG] Using the PokeAPI."

      species = PokeApi.get(pokemon_species: specie_id)

      {
        color: species.color.name,
        description: species.flavor_text_entries[0]&.flavor_text,
        chain_id: get_id(species.evolution_chain.url),
      }
    end
  end
end
