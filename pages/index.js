import Title from "@/components/Title/Title";
import { Container } from "@mui/material";

import Link from "next/link";

function MainpageLink({ children, link }) {
  return (
    <Link href={link} className="text-3xl text-center hover:opacity-50">
      {children}
    </Link>
  );
}

export default function Home() {

  return (
    <Container maxWidth="sm">
      <Title>Добро пожаловать в React-Rpg</Title>

      <div className="flex flex-col items-center justify-center gap-5 mt-20">
        <MainpageLink link="/create">Создать персонажа</MainpageLink>
        <MainpageLink link="/about">О игре</MainpageLink>
        <MainpageLink link="/settings">Настройки</MainpageLink>
      </div>
    </Container>
  );
}
