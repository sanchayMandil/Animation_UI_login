import Manyqueue1 from "./components/Manyqueue1";
import Manyqueue2 from "./components/Manyqueue2";
import Manyqueue3 from "./components/Manyqueue3";
import Manyqueue4 from "./components/Manyqueue4";
import Manyqueue5 from "./components/Manyqueue5";
import Content from "./components/Content";

function App() {
  return (
    <div className="relative h-dvh">
      {/* Background Animation */}
      <div
        id="animationContainer"
        className="absolute inset-0 z-0 bg-gradient-to-tl bg-center bg-cover 
        from-blue-300 to-[#301934] overflow-hidden flex-nowrap"
      >
        <div className="flex justify-between opacity-15 h-full">
          <Manyqueue1 />
          <Manyqueue2 />
          <Manyqueue3 />
          <Manyqueue4 />
          <Manyqueue5 />
        </div>
      </div>
      {/* Foreground Content */}
      <div className="relative z-10">
        <Content />
      </div>
    </div>
  );
}

export default App;