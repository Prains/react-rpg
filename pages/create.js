import Title from "@/components/Title/Title";
import { SettingOption } from "./settings";
import { useState } from "react";

const Label = ({ children, label }) => {
  return (
    <labe className="flex flex-col gap-2 text-2xl items-center justify-center">
      {label}
      {children}
    </labe>
  );
};

const Create = () => {
  /*     character: {
        name: "",
        health: 0,
        class: "",
        armor: {
          health: 0,
          name: "",
        },
        weapon: {
          damage: 0,
          name: "",
        },
      }, */
  const [playerClass, setPlayerClass] = useState("warrior");

  return (
    <section>
      <Title>Создание персонажа</Title>
      <form className="flex items-center justify-center mt-10 flex-col gap-10">
        <Label label="Имя персонажа">
          <input
            type="text"
            placeholder="Введите имя персонажа"
            className="bg-transparent text-white"
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
      </form>
    </section>
  );
};

export default Create;
