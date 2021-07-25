import React from "react"


function CardsList({ title, cal, key, index, setCards, cards }) {
    function del(){
        let newList=cards.filter((listItems,i)=> i !== index)
        setCards(newList);
    }
    return(
    <div className='cards'>
        <h1>{title}</h1>
        <h2>You have Consumed {cal} amount of Calorie</h2>
        <button className='btn'onClick={del}>Delete</button>
    </div>
    )
}
   
            function Cards({Items, setCards}){
    return(
            <div className='cards1'>
                {Items.length !== 0 ? (
                    Items.map((list, index) => {
                        return (
                            <CardsList
                                title={list[0]}
                                cal={list[1]}
                                key={index}
                                index={index}
                                setCards={setCards}
                                cards={Items}
                            />
                        )
                    })
                ) : (
                    <div className='Empty'>No list</div>
                )}
            </div>
            )
        
}
            export default Cards;

