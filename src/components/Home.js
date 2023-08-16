import style from '../components/home.css'
function Home(){
    return(
        <div>
            <h1>Home Component</h1>
            <div className='cart'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/df/Shopping_cart_icon.svg' />
                <br/>
                <span> Total Cost: </span>
            </div>
            <div className="cart-items wrapper">
                <div className="item">
                    <img className = "img" src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                    <br/><span>Iphone 11</span>
                    <br/><span>Price : $1000.00</span>
                    <br/><button className='addToCart-button button'>Add to cart</button>
                
                </div>
                <div className="item">
                    <img className = "img" src="https://images.unsplash.com/photo-1511300961358-669ca3ad05af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                    <br/><span>Iphone 11</span>
                    <br/><span>Price : $1000.00</span>
                    <br/><button className='addToCart-button button'>Add to cart</button>
                
                </div>
                <div className="item">
                    <img className = "img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                    <br/><span>Iphone 11</span>
                    <br/><span>Price : $1000.00</span>
                    <br/><button className='addToCart-button button'>Add to cart</button>
                
                </div>
            </div>
        </div>
    )
}
export default Home;