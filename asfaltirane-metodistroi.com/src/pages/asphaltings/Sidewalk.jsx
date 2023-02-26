import React from "react";
import ClientsReviews from "../../components/clients-reviews/ClientsReviews";
import Quality from "../../components/quality/Quality";
import WhyUs from "../../components/why-us/WhyUs";
import sidewalkAsphalting from "../../assets/images/asphaltings/sidewalk-asphalting.jpeg";
import { Link } from "react-router-dom";

const Sidewalk = () => {
  return (
    <>
      <section className="w-full py-10 max-md:px-10">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl">
            Нареждне на тротоар в Сифия и страната
          </h1>
          <div className="flex max-md:flex-col-reverse md:justify-between md:gap-10">
            <div className="md:w-3/5 max-w-[600px]">
              <p>
                Асфалтиране София, Полвдив се е доказала като надежна и
                професионална фирма за асфалтиране и нареждане на тротоари,
                улици, пътища и други.
              </p>
              <p>
                Ние разсполагаме с висико-технологични и модерни машини за
                полагане на асфалт на всякакви терени. Нашите специалисти имат
                голям опит по различни места в цялата страна и можем да им се
                доверим, че знаят как да подходят към всяка задача.
              </p>
              <p>
                Фирмата предлага безплатен оглед, където и да се намирате в
                страната.
              </p>
              <p>
                Има места, на които би било по-подходящо да се нанася ръчно
                настилката, а на други машинно. Ако имате някакви въпроси
                най-добре се свържете с наш специалист за консултация от{" "}
                <a className="text-yellow-500 font-bold" href="/contacts">
                  тук
                </a>
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
                src={sidewalkAsphalting}
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

export default Sidewalk;
