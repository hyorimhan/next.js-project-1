import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from '@/types/type';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포켓몬 상세페이지',
  description: '1세대 포켓몬',
};

const detailPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/pokemons/${id}`);
  const data: Pokemon = await res.json();

  return (
    <div className="max-w-4xl mt-10 mx-auto border text-center">
      <div className="m-2">
        <div className="m-2 text-2xl">{data.korean_name}</div>
        <div>{`No.${data.id}`}</div>

        <Image
          src={data.sprites.front_default}
          width={100}
          height={100}
          alt="pokemon img"
          className="mx-auto"
        />
      </div>
      <div className="m-2">
        <span className=" text-orange-500">이름:</span> {data.korean_name}
      </div>
      <div className="m-2">
        <span className=" text-orange-500">키:</span>
        {data.height}m <span className=" text-orange-500"> 무게:</span>
        {data.weight}kg
      </div>
      <div>
        <div className="m-3">
          <span className=" text-orange-500">타입:</span>
          {data.types.map((t) => {
            return (
              <span
                key={t.type.name}
                className="mx-2 p-1 bg-orange-300	text-black"
              >
                {t.type.korean_name}
              </span>
            );
          })}
        </div>
        <div className="m-3">
          <span className=" text-orange-500">특성:</span>
          {data.abilities.map((a) => {
            return (
              <span
                key={a.ability.name}
                className=" mx-2 p-1 bg-orange-300 text-black	"
              >
                {a.ability.korean_name}
              </span>
            );
          })}
        </div>
      </div>

      <div>
        <div className="m-2 text-orange-500">기술:</div>
        {data.moves.map((m) => {
          return (
            <span key={m.move.name} className="mx-2">
              {m.move.korean_name}
            </span>
          );
        })}
      </div>
      <div className="m-5">
        <Link href={`/pokemonlist/`} className="p-2  bg-blue-700">
          뒤로가기
        </Link>
      </div>
    </div>
  );
};

export default detailPage;
