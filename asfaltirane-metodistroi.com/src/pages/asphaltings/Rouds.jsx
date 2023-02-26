import React from "react";
import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import WhyUs from "../../components/why-us/WhyUs";
import Quality from "../../components/quality/Quality";
import bigAsphalting from "../../assets/images/asphaltings/big-asphalting.jpeg";
import { Link } from "react-router-dom";

const Rouds = () => {
  return (
    <>
      <section className="w-full py-10 max-md:px-10">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Асфалтиране на пътища в Сифия и страната
          </h1>
          <div className="flex max-md:flex-col-reverse md:justify-between md:gap-10">
            <div className="md:w-3/5 max-w-[600px]">
              <p>
                Нашата фирма е специализирана в полагането на асфалт на пътища,
                улици, нареждане бордюри и др. Ние работим с нови и модерни
                машини за да предоставим на клиентите си качество на настилката.
                Също така винаги се стараем се да държим достъпни цени за нашите
                клиенти, но и да използваме възможно най-качествените материали.
              </p>
              <p>
                Ако имате нужда от асфалтиране на улици, тротоари, дворове,
                ивици – попаднали сте на точното място. Свържете се с нас от{" "}
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

export default Rouds;
