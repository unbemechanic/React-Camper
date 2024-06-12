import styled from "styled-components";
import MotorHomeImg from '..//src/assets/motorHome.png'
import Compare1 from '..//src/assets/compare-1.png'
import Compare2 from '..//src/assets/compare-2.png'
import Compare3 from '..//src/assets/compare-3.png'

export const IndentedDiv = styled.div`
    width: 90%;
    margin-inline: auto;
    display: ${(props)=>props.$motorBody ? 'flex' : ''};
    column-gap: ${(props)=>props.$motorBody ? '20px' : ''};
    
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    :last-child{
        display: flex;
        column-gap: 10px;
        :last-child{
            border: none;
        }
    }
`
export const DirectH = styled.div`
    display: inline-flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: ${(props)=>props.$name ? '38px' :(props)=>props.$footer ?'38px': '16px'} ;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${(props)=>props.$name ? '#006DAB' : (props)=>props.$footer ?'white':''};
    flex-wrap: nowrap;
    white-space: nowrap;
`
export const DirectContainer = styled.div`
    display: inline-flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: ${(props)=>props.$name ? '38px' :(props)=>props.$footer ?'38px': '16px'} ;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${(props)=>props.$name ? '#006DAB' : (props)=>props.$footer ?'white':''};
    flex-wrap: nowrap;
    white-space: nowrap;
    @media(max-width: 840px){
    display: none;
}
`
export const FooterStyle = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    color: white;
    padding: 30px 0 80px 0 ;
    :first-child{
        text-align: start;
        height: 40px;
        padding: 0;
    }
`
export const FooterH = styled.div`
    color: #FFF;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin
    .div{
        margin: 10px;
    }
    :first-child{
        margin-bottom: 50px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`
export const MotorHome = styled.div`
    width: 100%;
    text-align: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${MotorHomeImg}) lightgray 50% / cover no-repeat;
    background-size: cover;
    padding: 100px 0;
    margin-inline: auto;
    margin-bottom: 60px;
`
export const MotorH = styled.div`
    color: #FFF;
    font-family: Montserrat;
    font-size: ${(props)=>props.$motor ? '80px' : (props)=>props.$ranges ? '27px' :'16px'};
    font-style: normal;
    font-weight: ${(props)=>props.$home ? '500' : '700'};
    line-height: normal;
    background-repeat: no-repeat;
`
export const BodyDiv = styled.div`
    background-color: #fafafa;
    width: 100%;
`
export const NavBoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-bottom: 30px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; 
`
export const MotorNavIn = styled.input`
    height: 36px;
    flex-shrink: 0;    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.60);
    width: 91px;
`

export const SelectBox = styled.select`   
    border: none;
    padding: 10px 10px 10px 0;
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
    width: 240px;
    background-color: #fafafa;
    border-bottom: 1px solid #B5B0A1;
`
export const Cost = styled.div`
    border: none;
    padding: 10px 10px 10px 0;
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
    width: 240px;
    background-color: #fafafa;
    border-bottom: 1px solid #B5B0A1;
`
export const NavButton = styled.button`
    color: #FFF;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 60px;
    border: none;
    padding: 10px 20px;
    background: ${(props)=>props.$search ? '#006DAB' : '#FF7A00'} ;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    margin-bottom: 50px;
`
export const CompareDiv = styled.div`
    border-radius: 10px;
    background: ${(props)=>props.$first ? `url(${Compare1})` : (props)=>props.$second ? `url(${Compare2})`:(props)=>props.$third ? `url(${Compare3})`:''} ;
    background-repeat: no-repeat;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
    width: 75px;
    height: 90px;
    flex-shrink: 0;
    background-size: contain;
    background-position: center;

`
export const ComparingCar = styled.div`
    display: ${(props)=>props.$main ? 'grid': 'flex'};
    color: var(--blue, #006DAB);
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    gap: ${(props)=>props.$main ? '7px': ''};;
`
export const InfoNav = styled.div`
    display: flex;
    column-gap: 20px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(55, 55, 55, 0.403);
    padding: 7px;
    div{
        display: flex;
    }
    select{
        width: auto;
        border: 1px solid rgba(55, 55, 55, 0.403);
        border-radius: 5px;
        height: 23px;
        margin-right: 10px;
        margin: 0 10px;
        padding: 0 10px;
    }
    :first-child{
        font-weight: 600;
        :last-child{
            color: #006DAB;
            margin-left: 5px;
        }
    }
    :last-child{
        column-gap: 10px;
        display: flex;

        @media(max-width: 440px){
            display: flex;
            flex-wrap: wrap;
            margin-left: 50px;
        }
    }
`

export const BodyIcons = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgba(55, 55, 55, 0.400);
    column-gap: 3px;
    justify-content: center;
    border-radius: 5px;
    padding: 0px 3px;
    :first-child{
        border-right: 1px solid rgba(55, 55, 55, 0.403);
        padding-right: 10px;
    }
`
export const MainBodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const BoxingCars = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-position: center;
    grid-gap: 20px;
    flex-shrink: 100;
    padding: 30px 0;
    @media(max-width: 840px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-around;
        align-items: center;
    }
    @media(max-width: 440px){
        display: grid;
        grid-template-columns: 1fr;
        justify-content: space-around;
        align-items: center;
    }
`
export const StylingBoxes = styled.div`
    height: 300px;
    width: 200px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: white;
    border-radius: 20px;
    margin: 0;
    padding: 20px;
    align-items: center;
    @media(max-width: 440px){
        width: 80%;
    }
    img{
        height: auto;
        width: 100%;
        padding: 10px 0;
        background-repeat: no-repeat;
        border-radius: 20px;
    }
    button{
        border: 1px solid #006DAB;
        border-radius: 10px;
        color: #006DAB;
        font-weight: 600;
        padding: 10px 20px ;
        background-color: white;
        margin-right: 10px;
        
    }
`
export const Heading = styled.div`
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: ${(props)=>props.$name ? '16px': (props)=>props.$brand ? '12px': (props)=>props.$price ? '22px': ''};
    font-style: normal;
    font-weight: ${(props)=>props.$name ? '600': (props)=>props.$brand ? '400': (props)=>props.$price ? '700': ''};
    color: ${(props)=>props.$price ? '#006DAB': ''};
    padding: 5px;
    line-height: normal;
    display: ${(props)=>props.$brand ? 'flex': ''};
    justify-content: ${(props)=>props.$brand ? 'space-between': ''};
    align-items: ${(props)=>props.$brand ? 'center': ''};
    text-decoration: none;
    :focus{
        text-decoration: none;
    }
`
export const Seperated = styled.div`
    img{
        width: 50%;
        height: auto;
        background-color: white;
        
        border-radius: 3%;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10)
    }
    background-color: #fafafa;
`

export const Backgrounds = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px;
        button{
            width: 20%;
            height: 50px;
            border: none;
            border-radius: 10px;
            background: rgba(202, 193, 193, 0.887);
            margin-top: -50px;
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
        }
`
export const MainSideBar = styled.div`
    @media(max-width: 840px){
        display: none;
    }
`