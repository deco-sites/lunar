import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
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

function TextIcon({ width = 28, height = 28, stroke }: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1219_956)">
        <path
          d="M2.5 14.1667C5.2775 11.3892 6.66667 9.16667 6.66667 7.5C6.66667 5 5.83333 5 5 5C4.16667 5 3.30667 5.90417 3.33333 7.5C3.36167 9.20667 4.715 11.5642 5.41667 12.5C6.66667 14.1667 7.5 14.5833 8.33333 13.3333L10 10.8333C10.2775 13.0558 11.1108 14.1667 12.5 14.1667C12.9417 14.1667 14.6992 12.5 15 12.5C15.4308 12.5 16.2642 13.0558 17.5 14.1667"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1219_956">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_824_3660)">
        <path
          d="M15.3233 4.2567C14.016 3.15877 12.3732 2.53972 10.6664 2.50185C8.95959 2.46397 7.29095 3.00954 5.93619 4.0484C4.58143 5.08726 3.62164 6.55723 3.21541 8.21542C2.80919 9.87361 2.98085 11.6208 3.70202 13.1682C4.42319 14.7156 5.65072 15.9707 7.18176 16.726C8.71279 17.4813 10.4557 17.6917 12.1225 17.3224C13.7893 16.9531 15.2802 16.0261 16.3489 14.6948C17.4175 13.3634 18 11.7073 18 10H11.3333"
          stroke="#495057"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_824_3660">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_824_3665)">
        <path
          d="M7.5 15.8333C3.91667 17 3.91667 13.75 2.5 13.3333M12.5 17.5V14.5833C12.5 13.75 12.5833 13.4166 12.0833 12.9166C14.4167 12.6666 16.6667 11.75 16.6667 7.91663C16.6657 6.92076 16.2771 5.96438 15.5833 5.24996C15.9087 4.38493 15.8788 3.42632 15.5 2.58329C15.5 2.58329 14.5833 2.33329 12.5833 3.66663C10.8894 3.22545 9.11064 3.22545 7.41667 3.66663C5.41667 2.33329 4.5 2.58329 4.5 2.58329C4.12123 3.42632 4.09128 4.38493 4.41667 5.24996C3.72288 5.96438 3.33435 6.92076 3.33333 7.91663C3.33333 11.75 5.58333 12.6666 7.91667 12.9166C7.41667 13.4166 7.41667 13.9166 7.5 14.5833V17.5"
          stroke="#495057"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_824_3665">
          <rect width="20" height="20" fill="white" />
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
