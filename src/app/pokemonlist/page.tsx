import PokemonsItem from '../../components/PokemonsItem';
const PokemonListPage = () => {
  return (
    <div className="container mx-auto text-center p-3">
      <div className="text-5xl">포켓몬 도감</div>
      <PokemonsItem />
    </div>
  );
};

export default PokemonListPage;
