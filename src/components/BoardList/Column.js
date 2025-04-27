import Card from './Card'

const Column = ({ columnName, children }) => {
    const cards = [
        //
        `${columnName} Card 1`,
        `${columnName} Card 2`,
        `${columnName} Card 3`,
    ]

    return (
        <div className="column">
            <h3>{columnName}</h3>
            <div>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        cardName={card}
                    />
                ))}
            </div>
        </div>
    )
}

export default Column
