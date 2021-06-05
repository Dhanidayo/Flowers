import './App.css';
import Image from './components/Image';

function App() {
  return (
    <>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Daisy_pollen_flower_220533.jpg" 
        alt="Daisy Pollen flower"
        w="480px" 
        h="480px" 
      />
      <Image 
        src="https://i.pinimg.com/originals/4c/0e/fd/4c0efdd7be898125de1a6bf83f041f67.png" 
        alt="Rose flower"
        w="360px" 
        h="360px" 
      />
      <Image 
        src="https://techcrunch.com/wp-content/uploads/2021/01/bloomandwild-ezra.jpg" 
        alt="Bloom and Wild Flower"
        w="240px" 
        h="240px" 
      />
    </>
  );
}

export default App;
