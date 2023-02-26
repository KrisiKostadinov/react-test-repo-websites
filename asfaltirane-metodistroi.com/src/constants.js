export const navItems = [
  {
    name: "Начало",
    link: "/",
  },
  {
    name: "За нас",
    link: "/about",
  },
  {
    name: "Услуги",
    link: "/services",
    children: [
      {
        name: "Асфалтиране на улици",
        link: "/asfaltirane-na-ulitsi",
      },
      {
        name: "Асфалтиране на пътища",
        link: "/asfaltirane-na-patishta",
      },
      {
        name: "Асфалтиране на двор",
        link: "/afaltirane-na-dvor",
      },
      {
        name: "Асфалтиране на алеи",
        link: "/asfaltirane-na-alei",
      },
      {
        name: "Асфалтиране на тротоар",
        link: "/narezhdane-na-trotoar",
      },
      {
        name: "Асфалтиране на малки и големи площи",
        link: "/asfaltirane-na-malki-i-golemi-ploshti",
      },
    ]
  },
  {
    name: "Галерия",
    link: "/gallery",
  },
  {
    name: "Контакти",
    link: "/contacts",
  },
];

export const menuIcon = `<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-7 h-7"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
/>
</svg>`;

import item1 from "./assets/images/asphaltings/asphalting-road.jpeg";
import item2 from "./assets/images/asphaltings/street-asphalting.jpeg";
import item3 from "./assets/images/asphaltings/yard-asphalting.jpeg";
import item4 from "./assets/images/asphaltings/sidewalk-asphalting.jpeg";
import item5 from "./assets/images/asphaltings/alley-asphalting.jpeg";
import item6 from "./assets/images/asphaltings/parking-asphalting.jpeg";
import item7 from "./assets/images/asphaltings/small-asphalting.jpeg";
import item8 from "./assets/images/asphaltings/big-asphalting.jpeg";

export const asphaltingsImages = {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
};

export const servicesItems = [
  {
    heading: "Асфалтиране на пътища",
    img: asphaltingsImages.item1,
    text: "Занимаваме се с асфалтиране в София и страната на пътища от много години. Полагаме асфалт на терени в цялата страна.",
    link: "/asfaltirane-na-patishta",
  },
  {
    heading: "Асфалтиране на улици",
    img: asphaltingsImages.item2,
    text: "Асфалтиране на улици в цялата страна. Ние сме специялизирали в построяването и изработката на пътища.",
    link: "/asfaltirane-na-ulitsi",
  },
  {
    heading: "Полагане на бордюри",
    img: asphaltingsImages.item3,
    text: "Имаме голям опит в нареждането и пренареждането на всякакви видове бордюри на тротоари, малки и големи площи.",
    link: "/narezhdane-na-trotoar",
  },
  {
    heading: "Асфалтиране на двор",
    img: asphaltingsImages.item4,
    text: "Ако имате по-голям двор и търсите фирма за асфалтиране в София, ние можем да Ви помогнем.",
    link: "/afaltirane-na-dvor",
  },
  {
    heading: "Асфалтиране на алеи",
    img: asphaltingsImages.item5,
    text: "Нашата бригада има дългогодишен опит в асфалтирането в София и страната на алеи, улици, дворове, пътища и други.",
    link: "/asfaltirane-na-alei",
  },
  {
    heading: "Асфалтиране на паркинги",
    img: asphaltingsImages.item6,
    text: "Асфалтиране в София и страната на паркове, паркинги.",
    link: "/afaltirane-na-dvor", // TODO:
  },
  {
    heading: "Полагане на малки площи",
    img: asphaltingsImages.item7,
    text: "Ние имаме опитен екип от специалисти в асфалтирането на малки площи.",
    link: "/asfaltirane-na-malki-i-golemi-ploshti",
  },
  {
    heading: "Асфалтиране на големи площи",
    img: asphaltingsImages.item8,
    text: "Нашия екип има опитни професионалистти в полагането на асфалтова настилка на големи площи.",
    link: "/asfaltirane-na-malki-i-golemi-ploshti",
  },
];

import slide1 from "./assets/images/slider/manual-asphalting.jpg";
import slide2 from "./assets/images/slider/mashine-asphalting.jpeg";

export const slides = [
  {
    background: slide1,
    heading: "МАШИННО АСФАЛТИРАНЕ",
    text: "Ние разполагаме с най-съвременните машни и технологии за качествено асфалтиране на различни терени.",
  },
  {
    background: slide2,
    heading: "РЪЧНО АСФАЛТИРАНЕ",
    text: "Ние разполагаме с най-съвременните машни и технологии за качествено асфалтиране на различни терени.",
  },
];

import client1 from "./assets/images/clients-reviews/client-1.png";
import client2 from "./assets/images/clients-reviews/client-2.png";

export const clientReviews = [
  {
    name: "Иван Иванов",
    img: client1,
    text: "Улицата на която живея не беше ремонтирана от много години. Много съм доволен от майсторите на фирмата свършиха добра работа само за няколко дни. Подновиха и тротоара с нови плочки и бордюри. Горещо препоръчвам!",
  },
  {
    name: "Тодор Петров",
    img: client2,
    text: "Изключително съм доволен от работата ви. Имах голям двор, който трябваше да се асфалтира. Фирма Asfaltirane metodi group свърши страхотна работа.",
  },
];
