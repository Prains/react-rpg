import Title from "@/components/Title/Title";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSettings } from "@/services/reducers/settings";
import { useSelector } from "react-redux";

export const SettingLabel = ({ children, label, value, callback }) => {
  return (
    <label className={`flex flex-col gap-2 text-2xl`}>
      {label}
      <select className="bg-transparent" value={value} onChange={callback}>
        {children}
      </select>
    </label>
  );
};

export const SettingOption = ({ children, value }) => {
  return (
    <option className="text-black" value={value}>
      {children}
    </option>
  );
};

const Settings = () => {
  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.settings);
  const [difficult, setDifficult] = useState(settings.difficult);
  const [size, setSize] = useState(settings.size);

  return (
    <section>
      <Title>Настройки игры</Title>
      <form className="mt-10 flex items-center justify-center flex-col gap-10">
        <SettingLabel
          label="Сложность игры"
          value={difficult}
          callback={(e) => {
            setDifficult(e.target.value);
          }}
        >
          <SettingOption value="easy">Легко</SettingOption>
          <SettingOption value="middle">Средне</SettingOption>
          <SettingOption value="hard">Сложно</SettingOption>
        </SettingLabel>
        <SettingLabel
          label="Размер текста"
          value={size}
          callback={(e) => {
            setSize(e.target.value);
          }}
        >
          <SettingOption value="small">Маленький</SettingOption>
          <SettingOption value="middle">Средний</SettingOption>
          <SettingOption value="big">Крупный</SettingOption>
        </SettingLabel>
        <button
          type="submit"
          className="text-2xl mt-10 hover:opacity-50"
          onClick={(e) => {
            e.preventDefault();
            const settingsData = { difficult: difficult, size: size };
            dispatch(setSettings(settingsData));
            alert("Настройки сохранены!");
          }}
        >
          Сохранить
        </button>
      </form>
    </section>
  );
};

export default Settings;
