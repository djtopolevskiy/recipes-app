import React from 'react'
import Image from 'next/image'

const dinners = [
	{
		index: 0,
		name: "КУРЯЧІ ГОМІЛКИ В СМЕТАННОМУ СОУСІ З ГІРЧИЦЕЮ",
		foto: "/dinner1.jpg",
		gradients: [
			"ІНГРЕДІЄНТИ",
			"Курячі гомілки 8 шт.",
			"Сметана ТМ «Рудь», 21 % 250 г",
			"Часник 2 зубчики",
			"Лимон 1 шт.",
			"Петрушка пучок",
			"Гірчиця 1 ст. л.",
			"Карі, куркума за смаком",
			"Сіль, перець за смаком",
			"Рослинна олія 20 г"
		],
		description: "1. Миємо курячі гомілки, даємо зайвій рідині стекти. Викладаємо гомілки в глибоку ємність. 2. В окремій посудині готуємо соус. До сметани додаємо сік лимона, гірчицю, подрібнену петрушку, пропущений через прес часник, сіль і спеції: карі, куркуму та перець. Всі інгредієнти ретельно перемішуємо. 3. Заливаємо гомілки сметанним соусом, перемішуємо. 4. Форму для запікання змащуємо рослинною олією, викладаємо гомілки разом із соусом. 5. Розігріваємо духовку до 180 °C та запікаємо м’ясо протягом 50 хвилин — до золотистого кольору. Смачного!",
		style: "flex flex-col"
	},
	{
		index: 1,
		name: "АРОМАТНА ЗАПІКАНКА З КАРТОПЛІ, ЯЛОВИЧОГО ФАРШУ ТА ГРИБІВ",
		foto: "/dinner2.jpg",
		gradients: [
			"ІНГРЕДІЄНТИ",
			"Картопля 500 г",
			"Яловичий фарш 400 г",
			"Овочі з грибами «Преміум» 200 г",
			"Морква 200 г",
			"Цибуля 2 шт.",
			"Вершки 100 г",
			"Сметана ТМ «Рудь» 100 г",
			"Сир пармезан 200 г",
			"Вершкове масло «Хуторок селянський», 73 % 50 г",
			"Базилік за смаком",
			"Паприка за смаком",
			"Сіль, перець за смаком"
		],
		description: "ПРИГОТУВАННЯ 1. Чистимо картоплю, нарізаємо тонкими кружальцями. Подрібнюємо цибулю, на грубій тертці натираємо моркву та сир. 2. До м'ясного фаршу додаємо базилік, паприку, сіль, перець, а також вершки. Вимішуємо. 3. Суміш овочів та грибів «Преміум» підсмажуємо на рослинній олії з половиною цибулі до золотистого кольору. 4. Решту цибулі разом із морквою пасеруємо на олії протягом п'яти хвилин. Додаємо ложку сметани, солимо, перемішуємо. Накриваємо кришкою й тушкуємо протягом трьох хвилин на середньому вогні. 5. Змащуємо форму для випікання рослинною олією й викладаємо інгредієнти шарами. На дно викладаємо половину картоплі. Потім — м'ясний фарш. Далі — суміш овочів та грибів. Наступний шар — моркв'яний. Зверху викладаємо решту картоплі. 6. Перемішуємо сметану, вершки та натертий сир. Заливаємо страву. 7. Ставимо наповнену форму в розігріту до 200 °С духовку та запікаємо протягом 40–50 хвилин до утворення рум'яної скоринки. Смачного!",
		style: " flex flex-col pt-6"
	}
]



export default async function Dinner() {
  
  return (
    <section className="scroll-mt-10 flex flex-col items-center justify-start w-full h-auto overflow-hidden text-center relative">
      <div className='bg-[#D8D297] flex w-full h-10 items-center justify-center text-center border-t border-b border-t-[#C72544] border-b-[#C72544]'>
        <h1 className='text-xl font-bold uppercase'>ОБІД</h1>
      </div>
           
      <article className='flex flex-col items-center justify-start text-center h-auto max-w-7xl'>
        {dinners.map((dinner) => (
          <div key={dinner.name} className="h-auto flex flex-col justify-between border rounded-3xl px-6">
            <div className={dinner.style}>
              <div className='flex flex-col items-center justify-center w-full h-24 relative'>
                <Image
                  src={dinner.foto}
                  width={500}
                  height={500}
                  alt="breacfast1"
                  className='flex absolute top-0 object-cover w-full h-24'
                />
                foto
              </div>
              <div className="flex items-center justify-center font-bold gap-1 p-2">{dinner.index+1+') '} {dinner.name} </div>
              <ul className='flex flex-col items-center'>
                {dinner.gradients.map((gradient) => (
                 <li key={gradient} className="flex items-center justify-center">
                      {gradient}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center w-full">{dinner.description}</div>
            </div>
          </div>
        ))}
        </article>
          
        </section>  
  )
}
