
// import './App.css';
import image3 from './photos.jpg'
import Image from './composant/Image'
function App() {
  const handleName=(name)=>{

    alert(`name of profile ${name}`)
  }
  return (
    <div className="App">
     <Image
     
    name='KADRI MOHAMMED IMRANE'
    job='developper student'
    bio='REACT JS ,JAVASCRIPT,HTML,PHP,AJAX,HICHAM'
    button='Alert'
    handleName={handleName}
     >


       <img src={image3}></img>
     </Image>

    </div>
  );
}

export default App;
