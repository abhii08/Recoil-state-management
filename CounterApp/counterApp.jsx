import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  
 return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>  
  )
}

function Count() {
  console.log("re-render count comp.")
  return <div>
    <CountRerender />
    <Button />
    <EvenCount />
  </div>
}

function CountRerender() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Button() {
 const setCount = useSetRecoilState(countAtom);
 console.log('button rerender')
  return <div>
    <button onClick={() => {
      setCount(count => count + 1);
    }}>Increase Count</button>
    <button onClick={() => {
      setCount(count => count - 1);
    }}>Decrease count</button>
  </div>
}
function EvenCount() {
  const isEven = useRecoilValue(evenSelector);

  return<div>
    {isEven ? "It is Even" : null}
  </div>
}
export default App;