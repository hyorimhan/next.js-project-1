import PokemonListPage from './pokemonlist/page';
import { Pokemon } from '@/types/type';

export const getPokemons = async () => {
  const res = await fetch('http://localhost:3000/api/pokemons');
  const data: Pokemon[] = await res.json();
  return data;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <PokemonListPage />
      </div>
    </main>
  );
}
