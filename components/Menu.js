import Menu from "next/link";


const linkstyle = {
    marginright: 15

} 

const Menu = () => (
    <div>
        <link href='/'>
            <a style ={inkstyle} >Home</a>
        </link>

        <link href='/sobre'>
            <a style ={inkstyle}>Sobre</a>
        </link>

        <link href='/contato'>
            <a style ={inkstyle}>Contato</a>
        </link>
    </div>
);

export default Menu;