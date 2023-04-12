import { useSelector } from "react-redux";
import { useState } from "react";

const CharacterPopup = ({ character, setPopupShown }) => {
  return (
    <div
      className="flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
      onClick={() => {
        setPopupShown(false);
      }}
    >
      <div className="flex items-center justify-center flex-col gap-5 text-2xl ">
        <p>Имя персонажа: {character.name}</p>
        <p>Текущее здоровье персонажа: {character.health}</p>
        <p>Максимальное здоровье персонажа: {character.maxHealth}</p>
        <p>Класс персонажа: {character.class}</p>
        <p>Броня персонажа: {character.armor.name}</p>
        <p>Оружие персонажа: {character.weapon.name}</p>
        <p>Деньги персонажа: {character.money}</p>
      </div>
    </div>
  );
};

const Game = () => {
  const { character } = useSelector((state) => state.character);
  const [popup, showPopup] = useState(true);

  return (
    <section>
      <header className="w-4/5 my-5 mx-auto text-2xl flex items-center justify-between">
        {character.name}
        <button
          className="hover:opacity-50"
          onClick={() => {
            showPopup(true);
          }}
        >
          Информация о персонаже
        </button>
      </header>
      <button>В бой</button>
      <div>
        <button>Магазин</button>
        <button>Достижения</button>
      </div>
      {popup && (
        <CharacterPopup character={character} setPopupShown={showPopup} />
      )}
    </section>
  );
};

export default Game;
