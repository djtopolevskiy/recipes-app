import React from 'react'
import Image from 'next/image'
const suppers = [
	{
		index: 0,
		name: "КЛАСИЧНИЙ МІЛКШЕЙК ІЗ МОЛОКОМ ТА МОРОЗИВОМ",
		foto: "/supper1.jpg",
		gradients: [
			"ІНГРЕДІЄНТИ",
			"Молоко ТМ «Рудь» 400 мл",
			"Морозиво «Крем-пломбір» ТМ «Рудь» 200 г",
			"Цукор за смаком",
			"Ванільний цукор за смаком",
			"Збиті вершки 50 г",
			"М’ята для прикрашання",
			"Шоколад або кориця за бажанням"
		],
		description: "ПРИГОТУВАННЯ. Етап перший. Охолоджене молоко наливаємо в чашу блендера, додаємо звичайний та ванільний цукор і морозиво «Крем-пломбір» ТМ «Рудь». Збиваємо інгредієнти до однорідності та утворення легкої пінки на поверхні напою. Етап другий. Розливаємо коктейль у склянки. Прикрашаємо збитими вершками та гілочкою м’яти. За бажанням посипаємо вершки дрібкою кориці чи натертим шоколадом. Освіжний класичний мілкшейк готовий! Подавайте до столу!",
		style: "flex flex-col"
	},
	{
		index: 1,
		name: "КАКАО З ПЕРЦЕМ ЧИЛІ, КОРИЦЕЮ ТА МУСКАТНИМ ГОРІХОМ",
		foto: "/supper2.jpg",
		gradients: [
			"ІНГРЕДІЄНТИ",
			"Молоко 300 мл",
			"Какао-порошок 1,5 ст. л.",
			"Свіжий перець чилі 1–2 г",
			"Горіх мускатний мелений дрібка",
			"Кориця ¼ ч. л.",
			"Екстракт ванільний ¼ ч. л.",
			"Вода 1 ст. л.",
			"Мед 1 ч. л.",
			"Чорний шоколад 1 шматочок"
		],
		description: "ПРИГОТУВАННЯ. Етап № 1. Наливаємо молоко в невелику каструлю та підігріваємо на маленькому вогні. Кип’ятити не потрібно. Етап № 2. Какао-порошок насипаємо в чашку, змішуємо з корицею та мускатним горіхом. Додаємо ванільний екстракт і воду. Ретельно перемішуємо всі компоненти до однорідної маси. Етап № 3. Натираємо перець чилі на дрібну тертку. З’єднуємо пастоподібну суміш та дрібку чилі з молоком і добре перемішуємо какао. Доводимо до кипіння, додаємо цукор або чайну ложечку меду. Проціджуємо та наливаємо в склянку або чашку. Етап № 4. Натираємо чорний шоколад на дрібну тертку та посипаємо ним готовий напій.",
		style: " flex flex-col pt-6"
	}
]



export default async function Supper() {
  
  return (
    <section className="flex flex-col items-center justify-start w-full h-auto overflow-hidden text-center relative">
      <div className='bg-[#D8D297] flex w-full h-10 items-center justify-center text-center border-t border-b border-t-[#C72544] border-b-[#C72544]'>
        <h1 className='text-xl font-bold uppercase'>Вечеря</h1>
      </div>
           
      <article className='flex flex-col items-center justify-start text-center h-auto max-w-7xl'>
        {suppers.map((supper) => (
          <div key={supper.name} className="h-auto flex flex-col justify-between border rounded-3xl px-6">
            <div className={supper.style}>
              <div className='flex flex-col items-center justify-center w-full h-24 relative'>
                <Image
                  src={supper.foto}
                  width={500}
                  height={500}
                  alt="breacfast1"
                  className='flex absolute top-0 object-cover w-full h-24'
                />
                foto
              </div>
              <div className="flex items-center justify-center font-bold gap-1 p-2">{supper.index+1+') '} {supper.name} </div>
              <ul className='flex flex-col items-center'>
                {supper.gradients.map((gradient) => (
                 <li key={gradient} className="flex items-center justify-center">
                      {gradient}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center w-full">{supper.description}</div>
            </div>
          </div>
        ))}
        </article>
          
        </section>  
  )
}
