import PokemonsComponents from '../components/PokemonsComponents';
const PokemonListPage = () => {
  return (
    <div className="container mx-auto text-center p-3">
      <div className="text-5xl">포켓몬 도감</div>
      <PokemonsComponents />
    </div>
  );
};

export default PokemonListPage;
