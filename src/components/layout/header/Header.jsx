import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname == '/' && isAuth ? (
						<button
							aria-label='go to profile'
							onClick={() => {
								navigate('/profile')
							}}
						>
							<SlUser fontSize={27} />
						</button>
					) : (
						<button
							aria-label='go back'
							onClick={() => {
								navigate(backLink)
							}}
						>
							<IoMdArrowBack />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
