import React from "react";
import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import Quality from "../../components/quality/Quality";
import WhyUs from "../../components/why-us/WhyUs";
import yardAsphalting from "../../assets/images/asphaltings/yard-asphalting.jpeg";
import { Link } from "react-router-dom";

const Yard = () => {
  return (
    <>
      <section className="w-full py-10 max-md:px-10">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Асфалтиране на двор в Сифия и страната
          </h1>
          <div className="flex max-md:flex-col-reverse md:justify-between md:gap-10">
            <div className="md:w-3/5 max-w-[600px]">
              <p>
                Ако имате голямо или малко място, което може да се асфалтира,
                ние мoжем да Ви бъдем полезни. Фирмата ни се занимава от много
                години в сферата на строителството на пътища, улици и други.
                Нашите професионалисти имат дълогогодишен опит в полагането на
                асфалт и са се доказали в услугите си. Ние винаги се стараем да
                спазваме сроковете и да работим качествено.
              </p>
              <p>
                Също така предлагаме безплатен оглед на мястото, независимо къде
                се намирате. Извършваме асфалтиране в София, Пловдив и цялата
                страна
              </p>
              <p>
                Ако изберете нашата фирма, ние Ви даваме гаранция за извършените
                от нас услуги: асфалтиране на дворове, улици, паркинги, малки и
                големи площадки и други от{" "}
                <a className="text-yellow-500 font-bold" href="/contacts">
                  тук
                </a>
                .
              </p>
              <div className="flex items-center gap-5">
                <Link className="button-primary text-lg" to={"/contacts"}>
                  Контакти
                </Link>
                <Link className="button-primary text-lg" to={"/gallery"}>
                  Нашите проекти
                </Link>
              </div>
            </div>
            <div className="md:w-2/5">
              <img
                className="w-full"
                src={yardAsphalting}
                alt="Асфалтиране на улици в Сифия и страната"
              />
            </div>
          </div>
        </div>
      </section>
      <Quality />
      <div className="w-full h-5 md:h-10 bg-white rotate-2"></div>
      <ClientsReviews />
      <WhyUs />
    </>
  );
};

export default Yard;
