import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    return HttpResponse.json([
      {
        name: "Chocolate",
        imagePath: "/images/chocolate.png",
      },
      {
        name: "Vanilla",
        imagePath: "/images/vanilla.png",
      },
    ]);
  }),
  http.get("http://localhost:3030/toppings", () => {
    return HttpResponse.json([
      {
        name: "Cherries",
        imagePath: "/images/cherries.png",
      },
      {
        name: "M&Ms",
        imagePath: "/images/m-and-ms.png",
      },
      {
        name: "Hot fudge",
        imagePath: "/images/hot-fudge.png",
      },
    ]);
  }),
  http.get('http://localhost:3030/not/player', ()=>{
    return HttpResponse.json([
      {
        id : 1,
        name : 'Nunez',
        position : 'FW'
      },
      {
        id : 2,
        name : 'Jota',
        position : 'FW'
      },
      {
        id : 3,
        name : 'Robertson',
        position : 'DF'
      }
    ])
  })
];
