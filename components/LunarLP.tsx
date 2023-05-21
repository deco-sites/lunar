import type { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import InfoCard from "$store/components/ui/InfoCard.tsx";
import Chip from "$store/components/ui/Chip.tsx";
import Input from "$store/components/ui/Input.tsx";
import RocketCircle from "$store/components/ui/RocketCircle.tsx";
import {
  GithubIcon,
  GoogleIcon,
  MailIcon,
  PadlockIcon,
  StudentIcon,
  TextIcon,
  UserIcon,
} from "$store/components/ui/Icons.tsx";
import Showcase from "$store/components/ui/Showcase.tsx";

type InfoCardProps = {
  icon: ComponentChildren;
  title: string;
  content: string;
};

const INFO_CARDS: InfoCardProps[] = [
  {
    icon: <UserIcon stroke="#296EFF" />,
    title: "Para competidores",
    content: "Participe de competições de Programação",
  },
  {
    icon: <StudentIcon stroke="#296EFF" />,
    title: "Para professores",
    content: "Crie e gerencie competições de programação",
  },
];

type ShowcaseType = {
  icon: ComponentChildren;
  subtitle: string;
  title: string;
  imageHref: string;
  align: "left" | "right";
};

const SHOWCASES: ShowcaseType[] = [
  {
    icon: <UserIcon stroke="#296EFF" />,
    subtitle: "Estruture suas competições",
    title: "Economize tempo e esforço com a correção automática de questões",
    imageHref: "/lunar1.png",
    align: "right",
  },
  {
    icon: <StudentIcon stroke="#296EFF" />,
    subtitle: "Layout intuitivo",
    title: "Gerencie e acompanhe o andamento das competições",
    imageHref: "/lunar2.png",
    align: "left",
  },
  {
    icon: <PadlockIcon stroke="#296EFF" />,
    subtitle: "Feedback imediato",
    title: "Aprimore suas habilidades de programação competindo",
    imageHref: "/lunar3.png",
    align: "right",
  },
  {
    icon: <MailIcon stroke="#296EFF" />,
    subtitle: "Code time",
    title: "Envie as questões e some pontos por tempo de execução",
    imageHref: "/lunar4.png",
    align: "left",
  },
];

const TABS = {
  LOGIN: "login",
  REGISTER: "register",
};

function LunarLP() {
  const [tab, setTab] = useState(TABS.LOGIN);

  return (
    <div className="bg-gray-900 flex">
      <section className="flex w-3/5 h-screen overflow-auto">
        <div className="">
          <div className="relative p-16 border-b border-solid border-gray-700">
            <h1 className="text-5xl text-gray-100 mb-12">
              Somos um sistema de correção automática para competições de
              programação
            </h1>
            <Chip>Bem-vindo ao Lunar</Chip>
            <RocketCircle />
          </div>
          <div className="p-16 mb-16 border-b border-solid border-gray-700">
            {INFO_CARDS.map((infoCard) => (
              <InfoCard key={infoCard.title} {...infoCard} />
            ))}
          </div>
          {SHOWCASES.map((showcase) => (
            <Showcase key={showcase.title} {...showcase} />
          ))}
        </div>
      </section>
      <section className="flex w-2/5 justify-center items-center">
        <div className="w-96 bg-gray-800 rounded-sm">
          <div className="flex justify-center items-center border-b border-solid border-gray-700">
            <button
              onClick={() => setTab(TABS.LOGIN)}
              className={`py-6 flex-1 border-r border-solid hover:bg-gray-600 transition-colors border-gray-700 text-gray-${
                tab === TABS.LOGIN ? "200" : "400"
              }  font-bold`}
            >
              Entrar
            </button>
            <button
              onClick={() => setTab(TABS.REGISTER)}
              className={`py-6 flex-1 hover:bg-gray-600 transition-colors text-gray-${
                tab === TABS.REGISTER ? "200" : "400"
              } font-bold`}
            >
              Cadastrar-se
            </button>
          </div>
          <div className="p-6">
            <Input
              icon={<MailIcon stroke="#495057" width={20} height={20} />}
              label="Email"
            />
            {tab === TABS.REGISTER && (
              <Input
                icon={<TextIcon stroke="#495057" width={20} height={20} />}
                label="Nome"
              />
            )}
            <Input
              icon={<PadlockIcon stroke="#495057" width={20} height={20} />}
              label="Senha"
              isPassword
            />
            {tab === TABS.REGISTER && (
              <Input
                icon={<PadlockIcon stroke="#495057" width={20} height={20} />}
                label="Confirmar Senha"
                isPassword
              />
            )}
            <button className="block ml-auto text-sm text-gray-400">
              Esqueci minha senha
            </button>
            <button className="flex justify-center items-center w-full py-4 mt-6 rounded-sm hover:bg-blue-500 transition-colors bg-blue-700 border-b border-solid border-gray-700 text-gray-400 font-bold">
              Entrar
            </button>
            <div className="flex items-center my-6">
              <hr className="flex-1 border-gray-700" />
              <span className="mx-3 text-sm text-gray-400">Ou entre com</span>
              <hr className="flex-1 border-gray-700" />
            </div>
            <div className="flex justify-around items-center">
              <a
                href="https://google.com"
                target="_blank"
                className="flex-1 flex items-center justify-center hover:bg-gray-700 transition-colors text-gray-500 bg-gray-900 rounded-sm p-4 mr-3"
              >
                <GoogleIcon />
                <p className="ml-2">Google</p>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="flex-1 flex items-center justify-center hover:bg-gray-700 transition-colors text-gray-500 bg-gray-900 rounded-sm p-4"
              >
                <GithubIcon />
                <p className="ml-2">Github</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LunarLP;
