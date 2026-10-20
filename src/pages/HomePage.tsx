import { useState, useEffect } from "react"

import { CardsContainer } from "@components/cards/CardsContainer"
import { CardsList } from "@components/cards/CardsList"

const fetchCardsData = async () => {
    return Array.from({ length: 56 }, (_, i) => ({
        id: i,
        title: `Карточка ${i + 1}`,
        content: "Контент карточки..."
    }));
};

export function HomePage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCardsData()
            .then((result) => {
                setData(result);
            })
            .catch((error) => console.error("Ошибка при загрузке:", error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    return(
        <CardsContainer>
            <CardsList items={data} />
        </CardsContainer>
    );
}
