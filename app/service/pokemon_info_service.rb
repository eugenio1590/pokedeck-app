class PokemonInfoService
  def initialize(name:)
    @name = name
  end

  def call
    Rails.cache.fetch("/pokemon/#{name}", expires_in: 24.hours) do
      Rails.logger.debug "[DEBUG] Using the PokeAPI."

      info = PokeApi.get(pokemon: name)
      specie_id = URI.parse(info.species.url).path.split('/').reject(&:empty?).last
      species = PokeApi.get(pokemon_species: specie_id)

      {
        id: info.id,
        name: info.name.capitalize,
        weight: info.weight,
        description: species.flavor_text_entries[0]&.flavor_text,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/#{info.id}.png",
        types: info.types.map {|t| t.type.name.capitalize },
        abilities: info.abilities.map { |a| a.ability.name.capitalize }
      }
    end
  end

  private

  attr_reader :name
end
