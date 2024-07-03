'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from '@/types/type';

const PokemonsItem = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const res = await fetch('http://localhost:3000/api/pokemons');
      const data: Pokemon[] = await res.json();
      setPokemons(data);
    };
    getPokemons();
  }, []);

  return (
    <div className="grid grid-cols-6 gap-4 mt-10">
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id} className="border">
            <Link href={`/detailPage/${pokemon.id}`}>
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt="pokemon img"
                className="mx-auto"
              />
              <div> {pokemon.korean_name}</div>
              {`도감번호: ${pokemon.id}`}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonsItem;
