import React from "react";
import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import Quality from "../../components/quality/Quality";
import WhyUs from "../../components/why-us/WhyUs";
import streetAsphalting from "../../assets/images/asphaltings/street-asphalting.jpeg";
import { Link } from "react-router-dom";

const Street = () => {
  return (
    <>
      <section className="w-full py-10 max-md:px-10">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Асфалтиране на улици в Сифия и страната
          </h1>
          <div className="flex max-md:flex-col-reverse md:justify-between md:gap-10">
            <div className="md:w-3/5 max-w-[600px]">
              <p>
                Нашата фирма е специализирана в асфалтирането на улици, пътища,
                тротоари, алеи, паркинги, нареждане на бордюри и др. Фирмата ни
                разсполага с най-новите и модерни машини за да предоставим на
                клиентите си качествена услуга. Винаги се стараем да държим
                възможно най-ниски и достъпни цени за всеки наш клиент, но и да
                използваме възможно най-качествените материали.
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
                src={streetAsphalting}
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

export default Street;
