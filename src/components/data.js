import React from 'react'

export const data = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
          .then((res) => res.json())
          .then((data) => setItem(data));
        console.log(item);
      }, []);
  return (
    <div>data</div>
  )
}
