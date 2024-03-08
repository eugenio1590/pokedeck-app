class PokemonListService
  def initialize(page:, limit:)
    @page = page
    @limit = limit
    @offset = (page - 1) * limit
  end

  def call
    data = PokeApi.get(pokemon: { limit: limit, offset: offset })
    
    results = data.results.map { |item| PokemonInfoService.new(name: item.name).call }

    {
      count: data.count,
      page: page,
      results: results
    }
  end

  private

  attr_reader :page, :limit, :offset
end
