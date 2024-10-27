import Link from "next/link"
    import styless from"./home.module.css"

export default function Home() {
  return (  
    <div> <h1 className={styless.heading}>Arooba Choice</h1>
    <p className={styless.p}>"Welcome to Arooba Choice – where quality, style, and affordability come together! Discover a handpicked selection of products crafted to elevate your everyday life. Whether you're seeking the latest in fashion, home decor, tech gadgets, or unique essentials, Arooba Choice has something for everyone. Enjoy exclusive deals, fast shipping, and a seamless shopping experience tailored just for you. Dive into Arooba Choice today and find your next favorite item!"

</p>
    <nav>
     <ul>
      <li className={styless.about}>
      <Link href="/about"> About</Link> 
      </li>

      <li className={styless.contact}>
        <Link href="/Contact"> Contact</Link> 
       </li>

      <li className={styless.service}>
            <Link href="/Service"> Service</Link> 
       </li>
       
     </ul>
            </nav>
             </div>
            
  )
};

