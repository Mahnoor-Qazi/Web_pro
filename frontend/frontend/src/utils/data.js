


const data = [{
  catId: 'c1',
  catTitle: 'single bed room',
  description: "Rent per Night",
  banner: "https://images.unsplash.com/photo-1581404554128-5032fe7874be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  rooms:
    [
      {
        id: 'r1',
        images: [
          "https://media.istockphoto.com/id/1453703764/photo/a-clean-tidy-single-bed-in-hotel-room.webp?b=1&s=170667a&w=0&k=20&c=JLnEVtbk5aT5x-80YofT4QtsuR0X3X0v9sMGQHPjkcs=",
          "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        ],
        title: "Single bed room",
        desc: "Rent per Night",
        pricePerNight: 40,
      },
      {
        id: 'r2',
        images: [
          "https://images.unsplash.com/photo-1564019472231-4586c552dc27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Uk9PTVMlMjBQSUNTJTIwc2luZ2xlJTIwYmVkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "Single bed room",
        desc: "Rent per Night",
        pricePerNight: 45,
      },
      {
        id: 'r3',
        images: [
          "https://images.unsplash.com/photo-1501780085-dae6a4f6bc7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJPT01TJTIwUElDUyUyMHNpbmdsZSUyMGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "Single Bed Room",
        desc: "Rent per Night",
        pricePerNight: 50
      },
    ]
},
{
  catId: 'c2',
  catTitle: 'Double Bed Room',
  description: "Rent per Night",
  banner: "https://media.istockphoto.com/id/1036068800/photo/eco-cotton-linen-and-blanket-on-a-bed-in-nature-loving-family-guesthouse-for-spring-and.jpg?b=1&s=170667a&w=0&k=20&c=natfxI3Iy6InmNs4ZrcPzEu9d1P-cOuFu7GjXun5Eew=",
  rooms:
    [
      {
        id: 'r4',
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Uk9PTVMlMjBQSUNTJTIwc2luZ2xlJTIwYmVkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        ],
        title: "Double Bed Room",
        desc: "Rent per Night",
        pricePerNight: 70,
      },
      {
        id: 'r5',
        images: [
          "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJPT01TJTIwUElDUyUyMHNpbmdsZSUyMGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "Double Bed Room",
        desc: "Rent per Night",
        pricePerNight: 65,
      },
      {
        id: 'r6',
        images: [
          "https://images.unsplash.com/photo-1590675560125-0d832b9d719e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJPT01TJTIwUElDUyUyMHNpbmdsZSUyMGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "Double Bed Room",
        desc: "Rent per Night",
        pricePerNight: 75
      },
    ]
},
{
  catId: 'c3',
  catTitle: 'Family Bed Room',
  description: "Rent per Night",
  banner: "https://images.unsplash.com/photo-1626868449668-fb47a048d9cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1aXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  rooms:
    [
      {
        id: 'r7',
        images: [
          "https://images.unsplash.com/photo-1565623833408-d77e39b88af6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        ],
        title: "SUITE",
        desc: "Rent per Night",
        pricePerNight: 95,
      },
      {
        id: 'r8',
        images: [
          "https://images.unsplash.com/photo-1612645213559-6af1d4edeaf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "SUITE",
        desc: "Rent per Night",
        pricePerNight: 90,
      },
      {
        id: 'r9',
        images: [
          "https://images.unsplash.com/photo-1556784344-ad913c73cfc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "SUITE",
        desc: "Rent per Night",
        pricePerNight: 100
      },
    ]
}
]

export default data;

export const adminCredentials = {
    username : 'abc',
    password : '123'
}

export let orders = [];