import Header from "./components/header/Header";
import Toggle from "./components/toggle/Toggle";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <section className="w-full h-screen bg-slate-400">
        <div>
          <Header/>
          <p className="flex justify-center pt-4 text-slate-700 text-center">  
            This is simple toggle button that you can re-use <br/>
            You can just add it to your code by copying "toggle" folder <br/>
            Or it's gonna be available on NPMjs.com as a package.
          </p>
        </div>
        <div className="flex justify-center items-center h-[80%]">
          <Toggle/>
        </div>
        <div>
           <Footer/>
        </div>
    </section>
   
  );
}

export default App;
