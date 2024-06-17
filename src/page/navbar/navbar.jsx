import React from 'react'
import { DirectContainer, DirectH, Header, IndentedDiv, MenuButton } from '../../style'
import SwipeableTemporaryDrawer from '../../materials/navbarMenu'
import { Link } from 'react-router-dom'




const Navbar = () => {
  return (
    <div style={{
        backgroundColor: 'white', position:'fixed', width:'100%', zIndex:'999'
    }}>
        <IndentedDiv>
            <Header>
                <DirectH $name>Camper</DirectH>
                <DirectContainer>
                    <Link>
                    <DirectH>Motor<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></DirectH>
                    </Link>
                    
                    <DirectH>Caravan<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></DirectH>
                    <DirectH>Tuning<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></DirectH>
                    <DirectH>Used Car<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></DirectH>
                    <DirectH>Camping Place<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></DirectH>
                </DirectContainer>
                <SwipeableTemporaryDrawer/>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path d="M10.125 24C11.1605 24 12 23.1605 12 22.125C12 21.0895 11.1605 20.25 10.125 20.25C9.08947 20.25 8.25 21.0895 8.25 22.125C8.25 23.1605 9.08947 24 10.125 24Z" fill="#006DAB"/>
                    <path d="M19.875 24C20.9105 24 21.75 23.1605 21.75 22.125C21.75 21.0895 20.9105 20.25 19.875 20.25C18.8395 20.25 18 21.0895 18 22.125C18 23.1605 18.8395 24 19.875 24Z" fill="#006DAB"/>
                    <path d="M24.8249 4.79249C24.755 4.70173 24.6653 4.62818 24.5626 4.57747C24.4599 4.52677 24.3469 4.50026 24.2324 4.49999H6.90737L6.56987 3.42749C6.53279 3.31233 6.46841 3.20785 6.38222 3.12297C6.29603 3.03808 6.19058 2.9753 6.07487 2.93999L2.99987 1.99499C2.90532 1.96593 2.80597 1.95579 2.7075 1.96513C2.60902 1.97447 2.51335 2.00311 2.42595 2.04942C2.24943 2.14296 2.1173 2.30278 2.05862 2.49374C1.99994 2.68469 2.01952 2.89114 2.11305 3.06766C2.20659 3.24418 2.36641 3.37631 2.55737 3.43499L5.24987 4.25999L8.68487 15.1125L7.46237 16.1175L7.36487 16.215C7.06254 16.5651 6.89125 17.0093 6.88031 17.4717C6.86937 17.9342 7.01944 18.386 7.30487 18.75C7.50929 18.9986 7.76905 19.1959 8.06337 19.3261C8.3577 19.4564 8.67841 19.5159 8.99987 19.5H21.5174C21.7163 19.5 21.907 19.421 22.0477 19.2803C22.1883 19.1397 22.2674 18.9489 22.2674 18.75C22.2674 18.5511 22.1883 18.3603 22.0477 18.2197C21.907 18.079 21.7163 18 21.5174 18H8.87987C8.7935 17.997 8.70936 17.9719 8.63556 17.9269C8.56177 17.8819 8.50081 17.8187 8.45859 17.7433C8.41637 17.6679 8.3943 17.5829 8.39452 17.4965C8.39475 17.4101 8.41725 17.3252 8.45987 17.25L10.2674 15.75H21.8399C22.0112 15.755 22.1791 15.7011 22.3155 15.5974C22.452 15.4937 22.5488 15.3464 22.5899 15.18L24.9899 5.42999C25.0127 5.31818 25.0097 5.20264 24.9811 5.09216C24.9525 4.98169 24.8991 4.8792 24.8249 4.79249Z" fill="#006DAB"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                    <path d="M9.2041 7.3125C9.2041 10.1036 11.4755 12.375 14.2666 12.375C17.0577 12.375 19.3291 10.1036 19.3291 7.3125C19.3291 4.52137 17.0577 2.25 14.2666 2.25C11.4755 2.25 9.2041 4.52137 9.2041 7.3125ZM23.2666 23.625H24.3916V22.5C24.3916 18.1586 20.858 14.625 16.5166 14.625H12.0166C7.6741 14.625 4.1416 18.1586 4.1416 22.5V23.625H23.2666Z" fill="#006DAB"/>
                    </svg>
                    
                    <label for="lang">
                        <select id="lang" name='lang'>
                            <option value="English">En</option>
                            <option value="Russian">Ru</option>
                            <option value="Uzbek">Uzb</option>
                        </select>
                    </label>
                </div>
                
            </Header>
            

        </IndentedDiv>
    </div>
  )
}

export default Navbar