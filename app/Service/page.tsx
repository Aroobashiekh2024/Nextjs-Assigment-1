import Link from "next/link"
import styless from '../service/services.module.css'
export default function Services (){
    return(
        <div>
            <h1 className={styless.service}>
                 Service
            </h1>
            <p className={styless.p}>"At Arooba Choice, we’re committed to providing a seamless and enjoyable shopping experience from start to finish. We’re proud to offer services that put our customers first, making shopping convenient, reliable, and satisfying every time."

Curated Product Selection: We carefully select each product to ensure that our collection meets high standards of quality, style, and value, so you can shop with confidence.

Fast and Reliable Shipping: Enjoy quick and dependable delivery with tracking options. We work with trusted carriers to ensure your purchases arrive safely and on time.

Personalized Customer Support: Our friendly support team is here to help with any questions or concerns. Whether you need product information, order updates, or assistance with a return, we’re just a message away.

Exclusive Member Offers: Join the Arooba Choice community! Subscribe to receive early access to sales, member-only discounts, and special promotions throughout the year.</p>
            <ul>
                <li className={styless.myservices}>
                    <Link href="/Service/myservices"> My services</Link>
                </li>
            </ul>
        </div>
    )
}