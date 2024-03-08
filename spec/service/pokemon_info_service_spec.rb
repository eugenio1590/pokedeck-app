require 'rails_helper'

RSpec.describe PokemonInfoService do
  describe '#call' do
    it 'fetches Pokemon details from PokeApi' do
      VCR.use_cassette('fetch_pokemon_pikachu') do
        service = PokemonInfoService.new(name: 'pikachu')

        result = service.call

        expect(result[:id]).to eq(25)
        expect(result[:name]).to eq('Pikachu')
        expect(result[:weight]).to eq(60)
        expect(result[:types]).to eq(['Electric'])
        expect(result[:abilities]).to eq(['Static', 'Lightning-rod'])
      end
    end
  end
end