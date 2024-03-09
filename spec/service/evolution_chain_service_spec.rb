require 'rails_helper'

RSpec.describe EvolutionChainService do
  describe '#call' do
    it 'fetches Pokemon evolution chain from PokeApi' do
      VCR.use_cassette('fetch_evolution_chain_of_pikachu') do
        service = EvolutionChainService.new(id: "10")

        result = service.call

        expect(result).to eq({
          info: {
            id: 172, 
            name: "Pichu",
            weight: 20, 
            color: "yellow",
            description: "It is not yet\nskilled at storing\nelectricity.\fIt may send out a\njolt if amused\nor startled.", 
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png", 
            types: ["Electric"], 
            abilities: ["Static", "Lightning-rod"],
            chain_id: "10"
          },
          evolves_to: [
            {
              info: {
                id: 25,
                name: "Pikachu",
                weight: 60,
                color: "yellow",
                description: "When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.", 
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", 
                types: ["Electric"], 
                abilities: ["Static", "Lightning-rod"],
                chain_id: "10"
              },
              evolves_to: [
                {
                  info: {
                    id: 26,
                    name: "Raichu", 
                    weight: 300,
                    color: "yellow", 
                    description: "Its long tail serves as a ground to protect itself\nfrom its own high-voltage power.", 
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png", 
                    types: ["Electric"], 
                    abilities: ["Static", "Lightning-rod"],
                    chain_id: "10"
                  },
                  evolves_to: []
                }
              ]
            }
          ]
        })
      end
    end
  end
end
