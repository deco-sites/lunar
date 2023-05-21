import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { ComponentChildren } from "preact";
import InfoCard from "$store/components/ui/InfoCard.tsx";
import Chip from "$store/components/ui/Chip.tsx";
import Input from "$store/components/ui/Input.tsx";
import RocketCircle from "$store/components/ui/RocketCircle.tsx";
import Showcase from "$store/components/ui/Showcase.tsx";

type InfoCardProps = {
  icon: ComponentChildren;
  title: string;
  content: string;
};

type SvgProps = {
  width?: number;
  height?: number;
  stroke?: string;
};

function MailIcon({ width = 28, height = 28, stroke }: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1205_1072)">
        <path
          d="M15.8333 4.16663H4.16667C3.24619 4.16663 2.5 4.91282 2.5 5.83329V14.1666C2.5 15.0871 3.24619 15.8333 4.16667 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1666V5.83329C17.5 4.91282 16.7538 4.16663 15.8333 4.16663Z"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.5 5.83337L10 10.8334L17.5 5.83337"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1205_1072">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function PadlockIcon({ width = 28, height = 28, stroke }: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1205_1080)">
        <path
          d="M14.1665 9.16663H5.83317C4.9127 9.16663 4.1665 9.91282 4.1665 10.8333V15.8333C4.1665 16.7538 4.9127 17.5 5.83317 17.5H14.1665C15.087 17.5 15.8332 16.7538 15.8332 15.8333V10.8333C15.8332 9.91282 15.087 9.16663 14.1665 9.16663Z"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.99984 14.1667C10.4601 14.1667 10.8332 13.7936 10.8332 13.3333C10.8332 12.8731 10.4601 12.5 9.99984 12.5C9.5396 12.5 9.1665 12.8731 9.1665 13.3333C9.1665 13.7936 9.5396 14.1667 9.99984 14.1667Z"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.6665 9.16667V5.83333C6.6665 4.94928 7.01769 4.10143 7.64281 3.47631C8.26794 2.85119 9.11578 2.5 9.99984 2.5C10.8839 2.5 11.7317 2.85119 12.3569 3.47631C12.982 4.10143 13.3332 4.94928 13.3332 5.83333V9.16667"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1205_1080">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function UserIcon({ width = 28, height = 28, stroke }: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_419_2037)">
        <path
          d="M13.9997 12.8333C16.577 12.8333 18.6663 10.744 18.6663 8.16667C18.6663 5.58934 16.577 3.5 13.9997 3.5C11.4223 3.5 9.33301 5.58934 9.33301 8.16667C9.33301 10.744 11.4223 12.8333 13.9997 12.8333Z"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 24.5V22.1667C7 20.929 7.49167 19.742 8.36683 18.8668C9.242 17.9917 10.429 17.5 11.6667 17.5H16.3333C17.571 17.5 18.758 17.9917 19.6332 18.8668C20.5083 19.742 21 20.929 21 22.1667V24.5"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_419_2037">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function StudentIcon({ width = 28, height = 28, stroke }: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_419_2043)">
        <path
          d="M25.6663 10.5L13.9997 5.83337L2.33301 10.5L13.9997 15.1667L25.6663 10.5ZM25.6663 10.5V17.5"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 12.3667V18.6667C7 19.595 7.7375 20.4852 9.05025 21.1416C10.363 21.7979 12.1435 22.1667 14 22.1667C15.8565 22.1667 17.637 21.7979 18.9497 21.1416C20.2625 20.4852 21 19.595 21 18.6667V12.3667"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_419_2043">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

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

const SHOWCASES = [
  {
    icon: <UserIcon stroke="#296EFF" />,
    subtitle: "Estruture suas competições",
    title: "Economize tempo e esforço com a correção automática de questões",
    imageHref: "",
    align: "right",
  },
  {
    icon: <StudentIcon stroke="#296EFF" />,
    subtitle: "Layout intuitivo",
    title: "Gerencie e acompanhe o andamento das competições",
    imageHref: "",
    align: "left",
  },
  {
    icon: <PadlockIcon stroke="#296EFF" />,
    subtitle: "Feedback imediato",
    title: "Aprimore suas habilidades de programação competindo",
    imageHref: "",
    align: "right",
  },
  {
    icon: <MailIcon stroke="#296EFF" />,
    subtitle: "Code time",
    title: "Envie as questões e some pontos por tempo de execução",
    imageHref: "",
    align: "left",
  },
];

function LunarLP() {
  return (
    <div className="bg-gray-900 flex">
      <section className="flex-1 h-screen overflow-auto">
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
      </section>
      <section className="flex-1 flex justify-center items-center">
        <div className="w-96 bg-gray-800 rounded-sm">
          <div className="flex justify-center items-center border-b border-solid border-gray-700">
            <button className="py-6 flex-1 border-r border-solid border-gray-700 text-gray-400 font-bold">
              Entrar
            </button>
            <button className="py-6 flex-1 text-gray-400 font-bold">
              Cadastrar-se
            </button>
          </div>
          <div className="p-6">
            <Input
              icon={<MailIcon stroke="#495057" width={20} height={20} />}
              label="Email"
            />
            <Input
              icon={<PadlockIcon stroke="#495057" width={20} height={20} />}
              label="Senha"
              isPassword
            />
            <button className="block ml-auto text-sm text-gray-400">
              Esqueci minha senha
            </button>
            <button className="flex justify-center items-center w-full py-4 mt-6 rounded-sm bg-blue-700 border-b border-solid border-gray-700 text-gray-400 font-bold">
              Entrar
            </button>
            <div className="flex items-center my-6">
              <hr className="flex-1 border-gray-700" />
              <span className="mx-3 text-sm text-gray-400">Ou entre com</span>
              <hr className="flex-1 border-gray-700" />
            </div>
            <div className="flex justify-around items-center">
              <button className="flex-1 bg-gray-600 rounded-sm p-4 mr-3">
                Google
              </button>
              <button className="flex-1 bg-gray-600 rounded-sm p-4">
                Github
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LunarLP;
