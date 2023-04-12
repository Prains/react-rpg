import Title from "@/components/Title/Title";
import { SettingOption } from "./settings";
import { useState } from "react";
import { weapons } from "@/utils/weapons";
import { armors } from "@/utils/armor";
import { useDispatch } from "react-redux";
import { setCharacter } from "@/services/reducers/character";
import { useRouter } from "next/router";

const Label = ({ children, label }) => {
  return (
    <labe className="flex flex-col gap-2 text-2xl items-center justify-center">
      {label}
      {children}
    </labe>
  );
};

const Create = () => {
  const [playerClass, setPlayerClass] = useState("warrior");
  const [name, setPlayerName] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <section>
      <Title>Создание персонажа</Title>
      <form className="flex items-center justify-center mt-10 flex-col gap-10">
        <Label label="Имя персонажа">
          <input
            type="text"
            placeholder="Введите имя персонажа"
            className="bg-transparent text-white"
            value={name}
            minLength={1}
            maxLength={15}
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
          />
        </Label>
        <Label label="Выберте класс персонажа">
          <select
            className="bg-transparent"
            value={playerClass}
            onChange={(e) => {
              setPlayerClass(e.target.value);
            }}
          >
            <SettingOption value="warrior">Воин</SettingOption>
            <SettingOption value="ambusher">Разбойник</SettingOption>
            <SettingOption value="guardian">Паладин</SettingOption>
          </select>
        </Label>
        <button
          type="submit"
          className="text-3xl mt-10 hover:opacity-50"
          onClick={(e) => {
            e.preventDefault();
            if (name === undefined || name === "") {
              alert("Имя не может быть пустым");
              return;
            }

            let health = 100;

            if (playerClass === "warrior") {
              health = 120;
            }

            let armor;

            if (playerClass === "guardian") {
              armor = armors.tunik;
            }

            let weapon;

            if (playerClass === "ambusher") {
              weapon = weapons.knife;
            }

            const player = {
              name: name,
              health: health,
              maxHealth: 100,
              class: playerClass,
              armor: armor,
              weapon: weapon,
              money: 0,
            };
            dispatch(setCharacter(player));
            alert("Персонаж успешно создан!");
            router.push("/game");
          }}
        >
          Создать персонажа
        </button>
      </form>
    </section>
  );
};

export default Create;
