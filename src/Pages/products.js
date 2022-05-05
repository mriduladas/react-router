import { Link } from "react-router-dom";

const Product = () => {

    const paths =['/product/book', '/product/carpet', '/product/course'];
    return (
    <section>
        <h1>The Product Page</h1>
            <ul>
                <li>
                    <Link to='/product/book'>Book</Link>
                </li>
                <li>
                    <Link to={paths[1]}>Carpet</Link>
                </li>
                <li>
                    <Link to={paths[2]}>Course</Link>
                </li>
            </ul>
    </section>)
}
export default Product;