import { fromJSON } from "postcss";
import { useEffect, useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  const createData = async () => {
    const response = await fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    }).then((response) => response.json());
    setData(response);
  };
  const addData = () => {
    createData();
  };
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex justify-center gap-4 pb-[50px]">
          <input
            onChange={(event) => setName(event.target.value)}
            placeholder="name"
            className=" border-[1px] border-black p-3 rounded-xl"
            type="text"
          />
          <input
            onChange={(event) => setAge(event.target.value)}
            placeholder="age"
            className=" border-[1px] border-black p-3 rounded-xl"
            type="text"
          />
          <button onClick={addData} class="btn btn-accent btn-outline">
            submit
          </button>
        </div>
        <div className="border-[1px] border-black mx-[860px] bg-teal-800">
          {data?.map((element) => (
            <div className="flex justify-around gap-4 *:my-2 items-center border-[1px] bg-teal-900">
              <p>{element.name}</p>
              <p>{element.age}</p>
              <div className="bg-gray-600 p-2 rounded-xl">edit</div>
              <div className="bg-gray-600 p-2 rounded-xl">delete</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
