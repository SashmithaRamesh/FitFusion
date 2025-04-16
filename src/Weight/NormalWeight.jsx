import React, { Component } from 'react'
import './Weight.css';

export default class NormalWeight extends Component {
  render() {
    return (
      <div>
      <div>
    <h1 className='r'>NORMAL DIET</h1>
    <img src='https://miro.medium.com/v2/resize:fit:1200/1*MGltW-LBO7Lm_RRnD6CkSw.jpeg' alt='' className='l'></img>
    
    <div className='centre'>
    <br></br>
    <h2>INTRODUCTION</h2>
    <p className='font'>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diet refers to the food and drink that is regularly consumed by an individual (or a group). During a particular therapy of a disease or management of a particular health condition, the diet may be controlled, i.e. one that meets the physical needs of an individual. For instance, the diet of a diabetic person may be restricted to a selection of food and drinks that help manage the level of blood sugar.
    </p>

    <br></br>
    <h2>NUTRITION</h2>
    <p className='font'>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“Nutrition is the process of taking in food and converting it into energy and other vital nutrients required for life.” Nutrients are the substances which provide energy and biomolecules necessary for carrying out the various body functions. All living organisms need nutrients for proper functioning and growth.
    </p>

    <br></br>
    <h2>FOOD ITEMS YOU CAN EASILY CONSUME</h2>
    <ul className='font'>
      <li>Non-starchy fruits and vegetables</li>
      <li>Complex carbohydrates, found in whole grain bread and pasta, bran, etc.</li>
      <li>Use olive oil, vegetable oil, rice bran oil, canola oil, mustard oil, and peanut oil.</li>
      <li>Eat lentils, beans, soy, mushroom, tofu, fish, turkey, chicken breast, and lean cuts of beef.</li>
      <li>Have five or six small meals throughout the day.</li>
      <li>Eat a heavy breakfast.</li>
    </ul>

    <br></br>
    <h2>REFERENCES</h2>
    <p>
      <h3>Boyce VL, Swinburn BA</h3>
      <a href="https://care.diabetesjournals.org/content/16/1/369.short" >The Traditional Pima Indian Diet: Composition and adaptation for use in a dietary intervention study. Diabetes Care. 1993 Jan 1;16(1):369-71.</a>

      <h3>Singh RB, Rastogi SS, Niaz MA, Ghosh S, Singh R, Gupta S</h3>
      <a href="https://www.ajconline.org/article/0002-9149(92)90729-I/fulltext" >Effect of fat-modified and fruit-and vegetable-enriched diets on blood lipids in the Indian Diet Heart Study. American Journal of Cardiology. 1992 Oct 1;70(9):869-74.</a>

      <h3>Kaur C, Kapoor HC</h3>
      <a href="https://www.actahort.org/books/696/696_99.htm" >Antioxidant activity of some fruits in Indian diet. InVII International Symposium on Temperate Zone Fruits in the Tropics and Subtropics-Part Two 696 2003 Oct 14 (pp. 563-565).</a>
    </p>
    </div>
    </div>
      
      </div>
    )
  }
}
