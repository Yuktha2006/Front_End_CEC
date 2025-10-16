const spices = [
 { name: "Turmeric", img: "https://cdn.pixabay.com/photo/2016/02/13/12/26/turmeric-1199717_1280.jpg" },
 { name: "Red Chilli", img: "https://cdn.pixabay.com/photo/2015/05/31/12/13/chili-792718_1280.jpg" },
 { name: "Cumin Seeds", img: "https://cdn.pixabay.com/photo/2018/07/09/10/13/cumin-3525738_1280.jpg" },
];


const Products = () => {
 return (
   <section className="products-section">
     <h2>Our Wholesale Products</h2>
     <div className="products-grid">
       {spices.map((spice) => (
         <div key={spice.name} className="product-card">
           <img src={spice.img} alt={spice.name} />
           <h3>{spice.name}</h3>
           <p>Pure and fresh spices directly from the source.</p>
         </div>
       ))}
     </div>
   </section>
 );
};


export default Products;
