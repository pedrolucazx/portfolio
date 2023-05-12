"use client";
import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:pedrolucas0921@gmail?subject=${formData.subject}&body=
      Olá, meu nome é ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7x px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        contato
      </h3>

      <div className="space-y-10">
        <a
          href="https://t.me/pedrolucazx"
          className="flex items-center space-x-5 justify-center"
        >
          <PaperAirplaneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">pedrolucazx</p>
        </a>
        <div className=" flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">pedrolucas0921@gmail.com</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Nome"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Assunto"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Mensagem"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
