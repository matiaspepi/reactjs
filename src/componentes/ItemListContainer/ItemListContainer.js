import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h3 className="sub-tittle">
                {greeting}
            </h3>
        </div>
    )
}
export default ItemListContainer