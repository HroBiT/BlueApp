import Card from "./Components/Card";
import { prisma } from "@/utils/client-prisma";

const Home = async () => {
  const cards = await prisma.card.findMany();
  // const cardsCollection = collection(db, 'cards');
  // const cardsSnapshot = await getDocs(cardsCollection);
  // const cardsList = cardsSnapshot.docs.map(doc => doc.data() as CardData);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-6xl p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              Nazwa={card.name}
              Cena={card.price}
              Specyfikacja={card.specification}
              Image={card.image}
              // addToCart={addToCart}
              // goToDetails={() => goToDetails(card)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
