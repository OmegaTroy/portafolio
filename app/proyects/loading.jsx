import React from 'react'

const imag = [
    {name:'ima1' , src:'/images/1157039.png'},
    {name:'ima2' , src:'/images/1162959.jpg'},
    {name:'ima3' , src:'/images/1181312.png'},
    {name:'ima4' , src:'/images/1215131.jpg'},
    {name:'ima5' , src:'/images/1225414.png'},
    {name:'ima6' , src:'/images/1311951.jpg'},
    {name:'ima7' , src:'/images/1312367.jpg'},
    {name:'ima8' , src:'/images/1313754.png'},
    {name:'ima9' , src:'/images/1313891.png'},
    {name:'ima10' , src:'/images/1314707.jpg'},
    {name:'ima11' , src:'/images/1316300.jpeg'},
    {name:'ima12' , src:'/images/1316856.png'},
    {name:'ima13' , src:'/images/1317712.jpeg'},
    {name:'ima14' , src:'/images/1318187.png'},
    {name:'ima15' , src:'/images/1318253.jpeg'},
    {name:'ima16' , src:'/images/1318467.png'},
    {name:'ima17' , src:'/images/1320139.png'},
    {name:'ima18' , src:'/images/1320352.jpeg'},
    {name:'ima19' , src:'/images/596607.jpg'},
    {name:'ima0' , src:'/images/649533.png'},
  ]

export default function loading() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-5'>
    {imag.map(img=>(
      <div key={img.name} className='w-[421px] h-[352px] object-cover rounded-xl border-2 border-Cuarto'>
        <p>loading</p>
      </div> 
    ))}
  </div>
  )
}

