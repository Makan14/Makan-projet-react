// pr lier mon css et mn js
import Image from 'next/image';
import styles from './navbar.module.css';
// import Menu from './burger-bar.png'

export const Navbar = () => {
	return (
		<div className={styles.navbar}> 
			<div className={styles.liste1}>
				<div className={styles.logo}>
					<Image 
						width={30}
						height={30}
						src={'/assets/icons/right-arrow.png'}

					/>
					<div className={styles.bold}> Home Services </div>

				</div>
				<ul>
					<li>Home</li> 
					<li>Categories</li>
					<li>Help & Support</li>
				</ul>

				<ul> 
					<li>English</li>
					<li>Login</li>
					<button className={styles.btn}>Register</button>
				</ul>
			</div>
			{/* <img src="public/burger-bar.png" class="menu-burger" alt="Menu Burger"/>  */}

			{/* img menu burger */} 
			<div className={styles.menuBurger}> 
				<Image
					width={20}
					height={20} 
					src={'/assets/icons/navIcons.png'} 
					
				/>

			</div>

			{/* img localisation */} 
			<div className={styles.map}> 
				<Image 
					width={25}
					height={25}
					src={'/assets/icons/localisation.png'} 
				/>
				<div className={styles.menu_title}>Select your adress</div>  
			</div>
		</div>
	);
};
