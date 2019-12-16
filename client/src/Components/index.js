import Footer from './Layouts/Footer/Footer'
import Header from './Layouts/Header/Header'
import Body from './Layouts/Body/Body'

/** NOT using default export. When importing into another component/container, I'll need to select 'Jumbotron' or 'Footer' (etc.) like this: 
 *  
 *  import { Jumbotron, Footer } from '../Components/Layouts';
 * 
 */

export {
    Header, Footer, Body
}