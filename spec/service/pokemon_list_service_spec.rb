require 'rails_helper'

RSpec.describe PokemonListService do
  describe '#call' do
    it 'fetches a list of Pokemon from PokeApi' do
      VCR.use_cassette('fetch_pokemon_list_page_1') do
        service = PokemonListService.new(page: 1, limit: 10)

        result = service.call

        expect(result[:results].count).to eq(10)
        expect(result[:page]).to eq(1)
      end
    end
  end
end