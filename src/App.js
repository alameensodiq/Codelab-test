import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Users } from "./Store/Api/Users";
import Tables from "./Table";
import styled from "styled-components";

function App() {
  const dispatch = useDispatch();
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [nat, setNat] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    dispatch(Users({gender, age, nat, name}));
  }, [gender, age, nat, name]);

  const users = useSelector((state) => state?.users?.users?.results);
  // const users = useSelector((state) => state.users)

  console.log(users);
  return (
    <Flex>
      <div className="title">
        <h6>CODELAB TEST</h6>
      </div>
      <div style={{display:'flex', flexDirection:'row', paddingLeft:'2%', gap: '2%', alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
          <span>Gender</span>
          <select className="select" onChange={(e)=> setGender(e.target.value)}>
           <option value=''>All</option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
          </select>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <span>Age</span>
          <select className="select" onChange={(e)=> setAge(e.target.value)}>
           <option value=''>All</option>
            <option value='14'>Fourteen</option>
            <option value='30'> Thirty</option>
          </select>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <span>Nationality</span>
          <select className="select" onChange={(e)=> setNat(e.target.value)}>
           <option value=''>All</option>
            <option value='AU'>AU</option>
            <option value='BR'> Thirty</option>
            <option value='CA'>BR</option>
            <option value='CH'>CH</option>
            <option value='DE'>DE</option>
            <option value='DK'>DK</option>
            <option value='ES'>ES</option>
            <option value='FI'>FI</option>
            <option value='FR'>FR</option>
            <option value='GB'>GB</option>
            <option value='IE'>IE</option>
            <option value='IR'>IR</option>
            <option value='NL'>NL</option>
            <option value='NZ'>NZ</option>
            <option value='TR'>TR</option>
            <option value='US'>US</option>
          </select>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <span>Search</span>
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder="search by name" />
        </div>
      </div>
      <Tables users={users} />
    </Flex>
  );
}

export default App;

const Flex = styled.div`
.title{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.select{
  width: 100%;
  height: 20px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #000000;

}
.input{
  width: 100%;
  height: 20px;
  border-radius: 5px;
  outline: none;
  padding-left: 10%;
  border: 1px solid #000000;
}
`
