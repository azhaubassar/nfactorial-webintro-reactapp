import React from 'react';
import './App.css';
import Header from './components/Header';

// const FieldFunctionalComponent = () => {
//   function clickMe(){
//     console.log('You clicked me!')
//   }

//   const admin = false;
//   const holder = 'Enter here';
//   const styledFieldAdmin = { width: '300px' }
//   const styledField = {width: '100px'}

//   return <input 
//           placeholder={holder} 
//           type='text' 
//           style={admin ? styledFieldAdmin: styledField}/>
// }

// class FieldClassComponent extends React.Component {
//   constructor(){
//     super()
//     this.name = 'Field1';
//     this.surname = 'Field1'
//     this.age = 'Field1'

//   }

//   clickMe(){
//     const { name, surname, age } = this;

//     console.log('You clicked me!', name)
//   }

//   render(){
//      const holder = 'Enter here';
  
//     return <input 
//             placeholder={holder} 
//             type='text' />
//   }
// }

function Person(props) {
  return (
    <div>
      <h1>My name is {props.name} </h1>
      <a href={props.link}> </a>
      <img src={props.image}/>
    </div>
  )
}

function App() {
  const logged = false;
  // const button = <button>{logged ? 'nFactorial' : 'You should sign in' }</button>;
  let text = 'You should sign in'
  if(logged){
    text = 'nFactorial'
  }

  const users = [
    {
      name:'Aruzhan',
      link: 'inst.com',
      image: ''
    },
    {
      name:'Sake',
      link: 'inst.com',
      image: ''
    },
    {
      name:'Dalida',
      link: 'inst.com',
      image: 'путь'
    }
  ]

  return (
    <div className="App">
      <Header/>

      {users.map((user, index)=><Person key={index} name={user.name} link={user.link} image={user.image}/>)}
      {/* {users.map(function(user, index){
        return <Person key={index} name={user.name} link={user.link}/>
      })} */}

      {/* <FieldFunctionalComponent />
      <FieldClassComponent /> */}
    </div>
  );
}

export default App;