import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Search from "../components/Search";
import styles from "../styles/Home.module.css";
import Imagen from "../public/img/miami.jpg";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const onChangeSearch = (event) => {
    let v = event.target.value;
    setSearchText(v);
  };
  return (
    <main className="bg-darkbg h-full">
      <div className="text-white px-8 md:p-8 flex flex-col md:block items-start justify-start mx-auto w-full md:w-[70%]">
        <div className=" md:h-fit md:block flex flex-col items-center justify-center">
          <div className="text-5xl md:text-6xl font-semibold bg-gradient-to-r bg-clip-text font-Work text-transparent from-rose-100 via-indigo-500 to-teal-100 animate-text">
            Blog
          </div>
          <div className="text-xl md:text-4xl font-semibold bg-gradient-to-r bg-clip-text font-Work text-transparent from-rose-300 via-indigo-500 to-teal-100 animate-text">
            ética en la ingenieria en informatica y sistemas,
          </div>
          <div className="text-sm md:text-2xl font-semibold bg-gradient-to-r bg-clip-text font-Work text-transparent from-rose-600 via-indigo-500 to-teal-100 animate-text">
            Ética Profesional
          </div>
        </div>

        <div className="p-16 md:p-12 flex flex-col md:block items-center justify-center mx-auto w-full md:w-[70%]">
          <Search value={searchText} setter={onChangeSearch} />
          <div className="space-y-8 mt-12"></div>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-4 space-x-5">
          <div className="flex flex-col justify-center">
            <div className="w-auto rounded-2xl">
              <Image src={Imagen} alt="" className="rounded-2xl" />
            </div>
            <p className="font-bold spa my-2">Etica en la ingenieria</p>

            <p className="my-2  text-xs flex items-center justify-center">18 de septiembre del 2022</p>

            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eos ut, consequatur incidunt reprehenderit repellendus ipsum
              facilis. Dolor praesentium odit voluptatibus! Ducimus qui ratione
              deleniti similique rem officia, officiis quibusdam?
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="w-auto rounded-2xl">
              <Image src={Imagen} alt="" className="rounded-2xl" />
            </div>
            <p className="font-bold spa my-2">Etica en la ingenieria</p>

            <p className="my-2  text-xs flex items-center justify-center">18 de septiembre del 2022</p>

            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eos ut, consequatur incidunt reprehenderit repellendus ipsum
              facilis. Dolor praesentium odit voluptatibus! Ducimus qui ratione
              deleniti similique rem officia, officiis quibusdam?
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="w-auto rounded-2xl">
              <Image src={Imagen} alt="" className="rounded-2xl" />
            </div>
            <p className="font-bold spa my-2">Etica en la ingenieria</p>

            <p className="my-2  text-xs flex items-center justify-center">18 de septiembre del 2022</p>

            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eos ut, consequatur incidunt reprehenderit repellendus ipsum
              facilis. Dolor praesentium odit voluptatibus! Ducimus qui ratione
              deleniti similique rem officia, officiis quibusdam?
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="w-auto rounded-2xl">
              <Image src={Imagen} alt="" className="rounded-2xl" />
            </div>
            <p className="font-bold spa my-2">Etica en la ingenieria</p>

            <p className="my-2  text-xs flex items-center justify-center">18 de septiembre del 2022</p>

            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eos ut, consequatur incidunt reprehenderit repellendus ipsum
              facilis. Dolor praesentium odit voluptatibus! Ducimus qui ratione
              deleniti similique rem officia, officiis quibusdam?
            </p>
          </div>


          <div className="flex flex-col justify-center">
            <div className="w-auto rounded-2xl">
              <Image src={Imagen} alt="" className="rounded-2xl" />
            </div>
            <p className="font-bold spa my-2">Etica en la ingenieria</p>

            <p className="my-2  text-xs flex items-center justify-center">18 de septiembre del 2022</p>

            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eos ut, consequatur incidunt reprehenderit repellendus ipsum
              facilis. Dolor praesentium odit voluptatibus! Ducimus qui ratione
              deleniti similique rem officia, officiis quibusdam?
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="w-auto rounded-2xl">
              <Image src={Imagen} alt="" className="rounded-2xl" />
            </div>
            <p className="font-bold spa my-2">Etica en la ingenieria</p>

            <p className="my-2  text-xs flex items-center justify-center">18 de septiembre del 2022</p>

            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eos ut, consequatur incidunt reprehenderit repellendus ipsum
              facilis. Dolor praesentium odit voluptatibus! Ducimus qui ratione
              deleniti similique rem officia, officiis quibusdam?
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="w-auto rounded-2xl">
              <Image src={Imagen} alt="" className="rounded-2xl" />
            </div>
            <p className="font-bold spa my-2">Etica en la ingenieria</p>

            <p className="my-2  text-xs flex items-center justify-center">18 de septiembre del 2022</p>

            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eos ut, consequatur incidunt reprehenderit repellendus ipsum
              facilis. Dolor praesentium odit voluptatibus! Ducimus qui ratione
              deleniti similique rem officia, officiis quibusdam?
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="w-auto rounded-2xl">
              <Image src={Imagen} alt="" className="rounded-2xl" />
            </div>
            <p className="font-bold spa my-2">Etica en la ingenieria</p>

            <p className="my-2  text-xs flex items-center justify-center">18 de septiembre del 2022</p>

            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eos ut, consequatur incidunt reprehenderit repellendus ipsum
              facilis. Dolor praesentium odit voluptatibus! Ducimus qui ratione
              deleniti similique rem officia, officiis quibusdam?
            </p>
          </div>

          
        </section>
      </div>
    </main>
  );
}
