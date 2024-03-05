
import React from 'react'
import Image from 'next/image'

const breakfasts = [
	{
		index: 0,
		name: "ПАСТА З КРЕВЕТКАМИ",
		foto: "/breakfast1.jpg",
		gradients: [
			"Інгредієнти на 2 порції:",
			"200 г пасти @lapasta_ua",
			"10-15 креветок",
			"10 чері",
			"1 зубчик часнику",
			"20 г шпинату(за бажанням)",
			"200 мл вершків 33%",
			"сіль, масло, олія, зелень, пармезан"
		],
		description: "Приготування: розігріваємо пательню з олією і шматочком масла, підсмажуємо креветки(можуть бути як сирі, так і варені), додаємо нарізаний часник, чері, шпинат, прогріваємо разом декілька хвилин, додаємо вершки, прогріваємо до загустіння, солимо. Паралельно відварюємо пасту, і додаємо її до соусу, прогріваємо разом пару хвилин і смакуємо, смачного!",
		style: "flex flex-col"
	},
	{
		index: 1,
		name: "Суперкорисні білкові коржики з сочевиці",
		foto: "/breakfast2.png",
		gradients: ["Інгредієнти на 8 коржиків:", "200 г сухої сочевиці", "150 мл води", "для начинки: те, що ви любите, в мене це вершковий сир, зелень, огірок і рибка"],
		description: "Приготування: Сочевицю заливаємо водою і залишаємо на 4 години/ніч. Воду зливаємо, сочевицю промиваємо, заливаємо 150 мл води і збиваємо блендером. Розігріваємо пательню і половником виливаємо сочевичне тісто, розрівнюємо і смажимо з двох сторін до золотистості. Я злегка змащую пательню гхі, так вони будуть смачнішими і скоринка буде гарна. Коржики охолоджуємо і смакуємо з любимою начинкою. Смачного!",
		style: " flex flex-col pt-6"
	}
]

export default async function Breakfast() {
  
  return (
    <section className="flex flex-col items-center justify-start w-full overflow-hidden text-center ">
      <div className='bg-[#D8D297] flex w-full h-10 items-center justify-center text-center border-b border-b-[#C72544]'>
        <h1 className='text-xl font-bold uppercase'>Сніданок</h1>
      </div>
      
      <article className='flex flex-col items-center justify-start text-center w-full h-auto max-w-7xl'>
        {breakfasts.map((breakfast) => (
          <div key={breakfast.name} className="h-auto w-full flex flex-col justify-between border rounded-3xl px-6">
            <div className={breakfast.style}>
              <div className='flex flex-col items-center justify-center w-full h-24 relative'>
                <Image
                  src={breakfast.foto}
                  width={500}
                  height={500}
                  alt="breacfast1"
                  className='flex absolute top-0 object-cover w-full h-24'
                />
                foto
              </div>
              <div className="flex items-center justify-center font-bold gap-1 p-2">{breakfast.index+1+') '} {breakfast.name} </div>
              <ul className='flex flex-col items-center'>
                {breakfast.gradients.map((gradient) => (
                 <li key={gradient} className="flex items-center justify-center">
                      {gradient}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center w-full">{breakfast.description}</div>
            </div>
          </div>
        ))}
        </article>
          
      </section>  
  )
}
