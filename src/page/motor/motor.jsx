import React from 'react'
import { campcar } from '../data/mockdata'
import { Link } from 'react-router-dom';
import { BodyDiv, BodyIcons, BoxingCars, CompareDiv, ComparingCar, Cost, DisInfoNav, FilterMenu, Heading, IndentedDiv, InfoNav, InfoNavInner, MainBodyDiv, MainSideBar, MotorBodyContainer, MotorH, MotorHome, MotorNavIn, NavBoxStyle, NavButton, SelectBox, SelectSec, SelectSecMin, SortBySec, StylingBoxes } from '../../style';
import CustomizedSelects from '../../materials/select';
import AccordionExpandDefault from '../../materials/arcadion';
import SwipeableTemporaryDrawer from '../../materials/navbarMenu';
import SwipeableTemporaryDrawer2 from '../../materials/sidebarMenu';

const MotorComponent = () => {
    const data = campcar.maindata;
    
  return (
    <div>
        <BodyDiv>
            <MotorHome>
                <MotorH $home>Home/Motors</MotorH>
                <MotorH $ranges>Our ranges</MotorH>
                <MotorH $motor>Motors</MotorH>
            </MotorHome>
            <IndentedDiv $motorBody>
                <MotorBodyContainer>
                <MainSideBar>
                    <NavBoxStyle>
                        <AccordionExpandDefault></AccordionExpandDefault>
                    </NavBoxStyle>
                    <div style={{display:'flex', gap:'20px'}}>
                        <NavButton>Cancel</NavButton>
                        <NavButton $search>Search</NavButton>
                    </div>
                    <ComparingCar $main>
                        <div>Compare</div>
                        <ComparingCar>
                            <CompareDiv $first></CompareDiv>
                            <CompareDiv $second></CompareDiv>
                            <CompareDiv $third></CompareDiv>
                        </ComparingCar>
                    </ComparingCar>
                </MainSideBar>
                <MainBodyDiv>
                    <InfoNav>
                        <div style={{display:'flex', alignItems:'center'}}>
                        <div>Item <div>{data.length}</div> </div><FilterMenu><SwipeableTemporaryDrawer2 /></FilterMenu>
                        </div>
                        <InfoNavInner>
                                <div>
                                <b>Sort by</b>
                                <SelectSec>
                                    <div style={{height:'40px'}}>
                                    <input />
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                    </div>
                                    <SelectSecMin>
                                    <input type='number' placeholder='60'/>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                    </SelectSecMin>
                                </SelectSec>
                                </div>
                                
                                <BodyIcons>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M7 2H3C2.44772 2 2 2.44772 2 3V7C2 7.55229 2.44772 8 3 8H7C7.55229 8 8 7.55229 8 7V3C8 2.44772 7.55229 2 7 2Z" fill="#373737"/>
                                    <path d="M14.895 2H10.895C10.3427 2 9.89502 2.44772 9.89502 3V7C9.89502 7.55229 10.3427 8 10.895 8H14.895C15.4473 8 15.895 7.55229 15.895 7V3C15.895 2.44772 15.4473 2 14.895 2Z" fill="#373737"/>
                                    <path d="M7 9.8H3C2.44772 9.8 2 10.2477 2 10.8V14.8C2 15.3523 2.44772 15.8 3 15.8H7C7.55229 15.8 8 15.3523 8 14.8V10.8C8 10.2477 7.55229 9.8 7 9.8Z" fill="#373737"/>
                                    <path d="M14.895 9.8H10.895C10.3427 9.8 9.89502 10.2477 9.89502 10.8V14.8C9.89502 15.3523 10.3427 15.8 10.895 15.8H14.895C15.4473 15.8 15.895 15.3523 15.895 14.8V10.8C15.895 10.2477 15.4473 9.8 14.895 9.8Z" fill="#373737"/>
                                    </svg>
                                    <div></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M3.66667 12.8333H5.5C6.00417 12.8333 6.41667 12.4208 6.41667 11.9167V10.0833C6.41667 9.57917 6.00417 9.16667 5.5 9.16667H3.66667C3.1625 9.16667 2.75 9.57917 2.75 10.0833V11.9167C2.75 12.4208 3.1625 12.8333 3.66667 12.8333ZM3.66667 17.4167H5.5C6.00417 17.4167 6.41667 17.0042 6.41667 16.5V14.6667C6.41667 14.1625 6.00417 13.75 5.5 13.75H3.66667C3.1625 13.75 2.75 14.1625 2.75 14.6667V16.5C2.75 17.0042 3.1625 17.4167 3.66667 17.4167ZM3.66667 8.25H5.5C6.00417 8.25 6.41667 7.8375 6.41667 7.33333V5.5C6.41667 4.99583 6.00417 4.58333 5.5 4.58333H3.66667C3.1625 4.58333 2.75 4.99583 2.75 5.5V7.33333C2.75 7.8375 3.1625 8.25 3.66667 8.25ZM8.25 12.8333H18.3333C18.8375 12.8333 19.25 12.4208 19.25 11.9167V10.0833C19.25 9.57917 18.8375 9.16667 18.3333 9.16667H8.25C7.74583 9.16667 7.33333 9.57917 7.33333 10.0833V11.9167C7.33333 12.4208 7.74583 12.8333 8.25 12.8333ZM8.25 17.4167H18.3333C18.8375 17.4167 19.25 17.0042 19.25 16.5V14.6667C19.25 14.1625 18.8375 13.75 18.3333 13.75H8.25C7.74583 13.75 7.33333 14.1625 7.33333 14.6667V16.5C7.33333 17.0042 7.74583 17.4167 8.25 17.4167ZM7.33333 5.5V7.33333C7.33333 7.8375 7.74583 8.25 8.25 8.25H18.3333C18.8375 8.25 19.25 7.8375 19.25 7.33333V5.5C19.25 4.99583 18.8375 4.58333 18.3333 4.58333H8.25C7.74583 4.58333 7.33333 4.99583 7.33333 5.5Z" fill="#373737" fill-opacity="0.4"/>
                                    </svg>
                                </BodyIcons>
                        </InfoNavInner>
                    </InfoNav>
                    <DisInfoNav>
                        <div>
                            <div style={{display:'flex', alignItems:'center'}}>
                            <div><strong>Item</strong><strong>{data.length}</strong> </div><SwipeableTemporaryDrawer2/>
                            </div>
                            <BodyIcons>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M7 2H3C2.44772 2 2 2.44772 2 3V7C2 7.55229 2.44772 8 3 8H7C7.55229 8 8 7.55229 8 7V3C8 2.44772 7.55229 2 7 2Z" fill="#373737"/>
                                    <path d="M14.895 2H10.895C10.3427 2 9.89502 2.44772 9.89502 3V7C9.89502 7.55229 10.3427 8 10.895 8H14.895C15.4473 8 15.895 7.55229 15.895 7V3C15.895 2.44772 15.4473 2 14.895 2Z" fill="#373737"/>
                                    <path d="M7 9.8H3C2.44772 9.8 2 10.2477 2 10.8V14.8C2 15.3523 2.44772 15.8 3 15.8H7C7.55229 15.8 8 15.3523 8 14.8V10.8C8 10.2477 7.55229 9.8 7 9.8Z" fill="#373737"/>
                                    <path d="M14.895 9.8H10.895C10.3427 9.8 9.89502 10.2477 9.89502 10.8V14.8C9.89502 15.3523 10.3427 15.8 10.895 15.8H14.895C15.4473 15.8 15.895 15.3523 15.895 14.8V10.8C15.895 10.2477 15.4473 9.8 14.895 9.8Z" fill="#373737"/>
                                    </svg>
                                    <div></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M3.66667 12.8333H5.5C6.00417 12.8333 6.41667 12.4208 6.41667 11.9167V10.0833C6.41667 9.57917 6.00417 9.16667 5.5 9.16667H3.66667C3.1625 9.16667 2.75 9.57917 2.75 10.0833V11.9167C2.75 12.4208 3.1625 12.8333 3.66667 12.8333ZM3.66667 17.4167H5.5C6.00417 17.4167 6.41667 17.0042 6.41667 16.5V14.6667C6.41667 14.1625 6.00417 13.75 5.5 13.75H3.66667C3.1625 13.75 2.75 14.1625 2.75 14.6667V16.5C2.75 17.0042 3.1625 17.4167 3.66667 17.4167ZM3.66667 8.25H5.5C6.00417 8.25 6.41667 7.8375 6.41667 7.33333V5.5C6.41667 4.99583 6.00417 4.58333 5.5 4.58333H3.66667C3.1625 4.58333 2.75 4.99583 2.75 5.5V7.33333C2.75 7.8375 3.1625 8.25 3.66667 8.25ZM8.25 12.8333H18.3333C18.8375 12.8333 19.25 12.4208 19.25 11.9167V10.0833C19.25 9.57917 18.8375 9.16667 18.3333 9.16667H8.25C7.74583 9.16667 7.33333 9.57917 7.33333 10.0833V11.9167C7.33333 12.4208 7.74583 12.8333 8.25 12.8333ZM8.25 17.4167H18.3333C18.8375 17.4167 19.25 17.0042 19.25 16.5V14.6667C19.25 14.1625 18.8375 13.75 18.3333 13.75H8.25C7.74583 13.75 7.33333 14.1625 7.33333 14.6667V16.5C7.33333 17.0042 7.74583 17.4167 8.25 17.4167ZM7.33333 5.5V7.33333C7.33333 7.8375 7.74583 8.25 8.25 8.25H18.3333C18.8375 8.25 19.25 7.8375 19.25 7.33333V5.5C19.25 4.99583 18.8375 4.58333 18.3333 4.58333H8.25C7.74583 4.58333 7.33333 4.99583 7.33333 5.5Z" fill="#373737" fill-opacity="0.4"/>
                                    </svg>
                                </BodyIcons>
                        </div>
                        <SortBySec>
                                <b>Sort by</b>
                                <SelectSec>
                                    <div style={{height:'40px', marginRight:'20px'}}>
                                    <input />
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                    </div>
                                    <SelectSecMin style={{margin:'0'}}>
                                    <input  type='number' placeholder='60'/>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#gray"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                    </SelectSecMin>
                                </SelectSec>
                                </SortBySec>
                    </DisInfoNav>
                    <BoxingCars>
                            {data.map((value)=>{
                                return(
                                    <Link style={{textDecoration:'none'}} to={`/motor/${value.id}`}>
                                        <StylingBoxes key={value.id}>
                                        <div>
                                        <img src={value.car.photo}   alt='car'/>
                                        </div>
                                        <div>
                                        
                                        <div>
                                            <Heading $name>{value.car.name}</Heading>
                                            <Heading $brand>{value.car.company}<Heading $rate><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M12.8023 5.35442C12.7656 5.24643 12.6981 5.15154 12.6081 5.08146C12.5182 5.01138 12.4096 4.96919 12.2959 4.96009L8.97035 4.69584L7.53127 1.51026C7.48544 1.40766 7.41089 1.32051 7.31663 1.25934C7.22237 1.19817 7.11241 1.16559 7.00004 1.16553C6.88767 1.16547 6.77768 1.19793 6.68335 1.25899C6.58902 1.32006 6.51438 1.40712 6.46844 1.50968L5.02935 4.69584L1.70377 4.96009C1.59203 4.96894 1.48522 5.0098 1.39609 5.07777C1.30697 5.14574 1.23932 5.23795 1.20122 5.34336C1.16313 5.44877 1.15622 5.56293 1.1813 5.67217C1.20639 5.78141 1.26242 5.88111 1.34269 5.95934L3.80027 8.35509L2.9311 12.1188C2.90471 12.2327 2.91317 12.3519 2.95538 12.461C2.99759 12.57 3.07161 12.6639 3.16782 12.7303C3.26403 12.7968 3.37801 12.8328 3.49494 12.8337C3.61188 12.8346 3.72639 12.8003 3.8236 12.7353L6.99985 10.6178L10.1761 12.7353C10.2755 12.8013 10.3926 12.8353 10.5119 12.8327C10.6311 12.83 10.7467 12.791 10.8431 12.7207C10.9395 12.6505 11.012 12.5524 11.051 12.4396C11.0899 12.3269 11.0934 12.205 11.061 12.0902L9.9941 8.35684L12.6401 5.97568C12.8134 5.81934 12.8769 5.57551 12.8023 5.35442Z" fill="#FF7A00"/>
                                            </svg> {value.car.rating}</Heading></Heading>
                                            
                                            <Heading $price>{value.car.cost}W</Heading>
                                            <div>
                                                <button>Order</button>
                                                <button>Compare</button>
                                            </div>
                                        </div>
                                        </div>
                                    </StylingBoxes>
                                    </Link>
                                )
                            })}
                        </BoxingCars>
                    <div></div>
                </MainBodyDiv>
                </MotorBodyContainer>
                
            </IndentedDiv>
        </BodyDiv>
    </div>
  )
}

export default MotorComponent