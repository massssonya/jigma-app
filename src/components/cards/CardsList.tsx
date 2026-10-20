import { CardsContainer } from "./CardsContainer"
import { ViewCard } from "./ViewCard"

export function CardsList({ items }){
    if (!items.length) {
        return <div>Список пуст</div>;
    }
    return(
        <>
            {items.map((item) => (
                <CardsContainer.Item key={item.id}>
                    <ViewCard title={item.title} content={item.content} />
                </CardsContainer.Item>
            ))}
        </>
    )
}