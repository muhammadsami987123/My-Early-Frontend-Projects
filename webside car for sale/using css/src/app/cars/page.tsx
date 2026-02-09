import React from 'react'


const cars= () => {
const cars =[
  {id:1, name: 'toyota corolla', price: 1750  , description: 'Toyota Corolla CBA-NZE124 released in May 2005 comes in X HID Limited variant with 1,496 cc engine and Automatic transmission. This model comes in Sedan body type equipped with 1NZ-FE engine model that run on Regular Gasoline . Corolla CBA-NZE124 weights 1,150 kg with 4 doors and 5 seats having a complete volumne of 11.063 m3. It comes in standard colors along with optional colors like super white II, silver mica metallic.' , module_year: '2005' , Image : "/toyota.jpg"},
  {id:2, name: 'Honda Accord DBA-CU1', price: 2014 , description: 'Honda Accord DBA-CU1 released in February 2011 comes in 20Tl variant with 1,997 cc engine and Automatic transmission. This model comes in Sedan body type equipped with R20A engine model that run on Regular Gasoline . Accord DBA-CU1 weights 1,460 kg with 4 doors and 5 seats having a complete volumne of 12.533 m3. It comes in standard colors premium white pearl, along with optional colors like crystal black pearl, cobalt blue pearl, graphite lustre metallic ,alabaster silver metallic.' , module_year: '2011' , Image : "/honda.jpg"}, 
  {id:3, name: 'Ford Mustang', price: 2500 , description: 'Ford Mustang released in April 2014 comes in V6 Coupe Premium variant with 3,721 cc engine and Automatic transmission. This model comes in Coupe body type equipped with engine model that run on Regular Gasoline . Mustang weights 1,620 kg with 2 doors and 4 seats having a complete volumne of 12.809 m3. It comes in standard colors along with optional colors like black, Stirling grey .' , module_year: '2014' , Image : "/ford.jpg"},
  {id:4, name: 'Nissan Murano CBA-TNZ51', price: 1750 , description: 'Nissan Murano CBA-TNZ51 released in April 2014 comes in 250Xl Four variant with 2,488 cc engine and CVT transmission. This model comes in SUV body type equipped with QR25DE engine model that run on Regular Gasoline . Murano CBA-TNZ51 weights 1,720 kg with 5 doors and 5 seats having a complete volumne of 15.526 m3. It comes in standard colors grayish bronze (M), Brilliant White Pearl (3P), along with optional colors like super black, dark metal gray (M) ,brilliant silver (M), Steel Blue (M).' , module_year: '2014' , Image : "/nissan.jpg"},
  {id:5, name: 'Volkswagen Arteon ABA-3HDJHF', price: 2556 , description: 'Volkswagen Arteon ABA-3HDJHF released in October 2018 comes in TSI 4Motion Elegance variant with 1,984 cc engine and Automatic transmission. This model comes in Sedan body type equipped with DJH engine model that run on Premium Gasoline . Arteon ABA-3HDJHF weights 1,700 kg with 5 doors and 5 seats having a complete volumne of 13.09 m3. It comes in standard colors oryx white mother of pearl effect, along with optional colors like deep black pearl effect, chile red (metallic), atlantic blue metallic.' , module_year: '2018' , Image : "/volkswagen.jpg"},
  {id:6, name: 'Mazda Rx-8 ABA-SE3P', price: 1400 , description: 'Mazda Rx-8 ABA-SE3P released in October 2005 comes in Base Grade variant with 1,308 cc engine and Manual transmission. This model comes in Coupe body type equipped with 13B-MSP engine model that run on Premium Gasoline . Rx-8 ABA-SE3P weights 1,310 kg with 4 doors and 4 seats having a complete volumne of 10.519 m3. It comes in standard colors snowflake white pearl mica, along with optional colors like brilliant black, galaxy grey mica ,sunlight silver metallic, velocity red mica, strat blue mica, phantom blue mica.' , module_year: '2005' , Image : "/mazda.jpg"},
  {id:7, name: 'KIA Vigato', price: 987 , description: 'KIA Vigato released in September 1997 comes in Base Grade variant with 1,793 cc engine and Manual transmission. This model comes in Open body type equipped with TS engine model that run on Regular Gasoline . Vigato weights 1,080 kg with 2 doors and 2 seats having a complete volumne of 8.525 m3. It comes in standard colors along with optional colors like ebony black, special white, signal yellow, brilliant red, sea green.' , module_year: '1997' , Image : "/kia.jpg"},
  {id:8, name: 'Hyundai Sonata GH-NF24', price: 1500 , description: 'Hyundai Sonata GH-NF24 released in September 2005 comes in 2.4Gls variant with 2,359 cc engine and Automatic transmission. This model comes in Sedan body type equipped with G4KC engine model that run on Regular Gasoline . Sonata GH-NF24 weights 1,490 kg with 4 doors and 5 seats having a complete volumne of 12.956 m3. It comes in standard colors along with optional colors like ebony black, noble white, crystal silver, Aurora blue, pure pearl white.' , module_year: '2005' , Image : "/hyundai.jpg"},
  {id:9, name: 'Chevrolet Silverado', price: 4000 , description: 'Chevrolet Silverado released in April 2010 comes in LS Extended CAB variant with 4,800 cc engine and Automatic transmission. This model comes in Pickup body type equipped with engine model that run on Regular Gasoline . Silverado weights 2,370 kg with 4 doors and 6 seats having a complete volumne of 22.288 m3. It comes in standard colors along with optional colors like black, summit white, Sheer Silver Metallic, imperial blue metallic.' , module_year: '2010' , Image : "/chevrolet.jpg"},
  {id:10, name: 'BMW M4 CBA-3C30', price: 4030 , description: 'BMW M4 CBA-3C30 released in January 2019 comes in M4 Coupe variant with 2,979 cc engine and Automatic transmission. This model comes in Coupe body type equipped with S55B30A engine model that run on Premium Gasoline . M4 CBA-3C30 weights 1,640 kg with 2 doors and 4 seats having a complete volumne of 12.134 m3. It comes in standard colors along with optional colors like black sapphire, alpine white iii or mineral white.' , module_year: '2019' , Image : "/bmw.jpg"},
  {id:11, name: 'Audi R8 Spider ABA-4SCSPF', price: 5600 , description: 'Audi R8 Spider ABA-4SCSPF released in March 2017 comes in Base Grade variant with 5,204 cc engine and Automatic transmission. This model comes in Open body type equipped with CSP engine model that run on Premium Gasoline . R8 Spider ABA-4SCSPF weights 1,770 kg with 2 doors and 2 seats having a complete volumne of 10.645 m3. It comes in standard colors along with optional colors like ibis white.' , module_year: '2017' , Image : "/audi.jpg"},
  {id:12, name: 'Mercedes Benz C Class', price: 3020 , description: 'Audi R8 Spider ABA-4SCSPF released in March 2017 comes in Base Grade variant with 5,204 cc engine and Automatic transmission. This model comes in Open body type equipped with CSP engine model that run on Premium Gasoline . R8 Spider ABA-4SCSPF weights 1,770 kg with 2 doors and 2 seats having a complete volumne of 10.645 m3. It comes in standard colors along with optional colors like ibis white.' , module_year: '2009' , Image : "/mercedes.jpg"},
]


  return (
    <div>
       <div className='cars'>
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="card-image">
              <img src={car.Image} alt={car.name} />
              <h3>{car.name}</h3>
              <p>Module Year: {car.module_year}</p>
              <div className='price'>${car.price}</div>
              <p>Description: {car.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
       </div>
    </div>
  )
}

export default cars