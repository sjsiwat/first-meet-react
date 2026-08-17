function CatCard({ name, image, description }) {
  return (
    <div className="w-full max-w-[600px] bg-sky-300 rounded-2xl p-3">
      <div className="text-orange-500 font-bold text-xl text-center">
        {name}
      </div>
      <img
        className="w-full h-64 object-contain rounded-xl"
        src={image}
        alt={name}
      />
      <div className="border-2 rounded border-teal-800 p-2 mt-2">
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}

const cats = [
  {
    id: 1,
    name: "Mr. Bobo",
    image:
      "https://thumbs.dreamstime.com/b/cute-calico-cat-pixel-art-isolated-white-background-adorable-sitting-bit-style-high-quality-vector-illustration-three-447442731.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Mr. PoPo",
    image:
      "https://static.vecteezy.com/system/resources/previews/058/380/716/non_2x/pixel-art-illustration-of-a-cute-orange-and-white-cat-in-a-sitting-position-this-adorable-design-rendered-in-a-classic-pixel-style-adds-a-retro-and-whimsical-touch-on-it-vector.jpg",
    description: "Velit ipsum quae id veniam ex quaerat quasi libero.",
  },
  {
    id: 3,
    name: "Mr.Biru",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mu4dJgojkrG6NQgmIyue8t5nXW_jCXDDLeb7cWxhkn50Lc6-F5DoiAos&s=10",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

export function Body() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 justify-items-center">
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          name={cat.name}
          image={cat.image}
          description={cat.description}
        />
      ))}
    </div>
  );
}
