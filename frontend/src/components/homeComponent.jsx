import React, { Component } from 'react';
import HappyHoliday from './happyHoliday';
import NavBar from './navBar';
import BannerSlider from './bannerSlider';
import SummerCloth from './summerCloth';

import NewArrival from './newArrival';

import BonusTrack from './bonusTrack';
import Footer from './footer';
import ChooseCategory from './chooseCategory';
import ListProduct from './listProduct';


const HomeComponent = () => {
   return ( 
   <React.Fragment>
      <HappyHoliday/>
<NavBar/>
<BannerSlider/>
<SummerCloth/>
<ChooseCategory/>

<NewArrival/>
<ListProduct/>
<BonusTrack/>
<Footer/>
   </React.Fragment>
    );
}
 
export default HomeComponent;