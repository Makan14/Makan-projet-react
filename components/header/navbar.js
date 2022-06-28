// pr lier mon css et mn js
import Image from 'next/image';
import styles from './navbar.module.css';
// import Menu from './burger-bar.png'

export const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.liste1}>
				<ul>
					<li className={styles.logo}> Home services </li>
					<li>Home</li>
					<li>Categories</li>
					<li>Help & Support</li>
				</ul>

				<ul>
					<li>Select your adress</li>
					<li>English</li>
					<li>Login</li>
					<button className={styles.btn}>Register</button>
				</ul>
			</div>
			{/* <img src="public/burger-bar.png" class="menu-burger" alt="Menu Burger"/>  */}
			<Image
				width="50px"
				height={100}
				src={'/assets/icons/navIcons.png'}
			/>
		</div>
	);
};
