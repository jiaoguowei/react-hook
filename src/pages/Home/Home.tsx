import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import Todos from '../../containers/VisibleTodoList';

function Home() {

    const [count, setCount] = useState(0);
    const [banner, setBanner] = useState(5);

    useEffect(() => {
        document.title = `you clicked ${count} times`;
        console.log('函数执行了没');
    },[count])

    useEffect(() => {
        console.log('此Effect在加载中只执行一次');
    }, [])
    return (
        <div>
            Home
            <p>You clicked {count} times</p>
            <p>You have {banner} </p>
            <button onClick={() => setCount(count + 1)}>Clik me</button>
            <button onClick={() => setBanner(banner + 2)}>add Banner</button>
            <Link to="/count">跳转到count页面</Link>
            <Todos/>
        </div>
    )       
}

export default Home;