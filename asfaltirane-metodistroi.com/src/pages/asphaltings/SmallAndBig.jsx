import React from "react";
import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import Quality from "../../components/quality/Quality";
import WhyUs from "../../components/why-us/WhyUs";
import smallAsphalting from "../../assets/images/asphaltings/small-asphalting.jpeg";
import bigAsphalting from "../../assets/images/asphaltings/big-asphalting.jpeg";
import { Link } from "react-router-dom";

const SmallAndBig = () => {
  return (
    <>
      <section className="w-full py-10 max-md:px-10">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Полагане на асфалт на малки и големи площи в Сифия и страната
          </h1>
          <div className="flex max-md:flex-col-reverse md:justify-between md:items-center md:gap-10">
            <div className="md:w-2/5 max-w-[600px]">
              <p>
                Фирмата се занимава повече от 20 години с полагане на асфалтова
                настилка на пътища, улици, дворове, алеи, градинки, малки и
                големи площи. През годините сме натрупали солиден опит в
                асфалтирането и можем да кажем, че наистина си разбираме от
                работата. Работили сме по всякакви места в София, Пловдив и
                страната и имаме опит на много и различни терени.
              </p>
              <p>
                Ние предлагаме безплатен оглед на терена, без значение къде в
                България се намирате. Ако разполагате с място, което искате да
                бъде асфалтирано, можете да се свържете с нас за консултация и
                безплатен оглед.
              </p>
              <p>
                Винаги спазваме сроковете за да са доволни и двете страни.
                Използваме машини за полагането на асфалт, но има места, на
                които трябва да се положи асфалта ръчно.
              </p>
              <p>
                Ако се доверите на нас, ние Ви даваме гаранция за всички наши
                услуги. Разбира се и на ниски цени. от{" "}
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
            <div className="md:w-3/5 grid grid-cols-1 gap-5 md:grid-cols-2 max-md:pb-5">
              <img
                className="w-full h-full"
                src={smallAsphalting}
                alt="Асфалтиране на улици в Сифия и страната"
              />
              <img
                className="w-full h-full"
                src={bigAsphalting}
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

export default SmallAndBig;
