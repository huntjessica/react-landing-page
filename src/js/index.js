//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import {Home} from './component/home.jsx';
import {Footer} from './component/footer.jsx';
import {Cards} from './component/cards.jsx';



// ReactDOM.render(
//     <Home />,
//     document.querySelector('#app')
// );

ReactDOM.render(
    <Footer />,
    document.querySelector('#root')
);

ReactDOM.render(
    <Cards />,
    document.querySelector('#app')
);
 





// ReactDOM.render(<Button/>, document.getElementById('root'));
