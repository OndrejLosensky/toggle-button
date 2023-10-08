import Header from "./components/header/Header";
import Toggle from "./components/toggle/Toggle";


function App() {
  return (
    <section className="w-full h-screen bg-black">
        <div>
          <Header/>
        </div>
        <div className="flex justify-center items-center h-[80%]">
          <Toggle/>
        </div>
    </section>
   
  );
}

export default App;
