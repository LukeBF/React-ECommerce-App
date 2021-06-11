import React from 'react'

const OrderItem = () => {
    return (
        <>
            <div>
                <p>Product</p>
            </div>
           
            <div class="unit-qty">
                <button class="minus-btn" type="button">-</button>
                <input type="text" id="qty-field" value=""/>
                <button class="plus-btn" type="button">+</button>
            </div>
            <div>
                <input type="text" placeholder="$" class="unit-price"/>
            </div>

            <div>
                <input type="text" placeholder="$" class="ext-price"/>
            </div>

        </>
    )
}

export default OrderItem
