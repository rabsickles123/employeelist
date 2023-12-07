import data from "./Data";

export default function Employeelist() {
  return (
    <div className="name" key={Crypto.randomUUID}>
      {data.map((person) => (
        <div className="person" key={person.id}>
          <img src= {"./headshot0.jpeg"} />
          <h3>{person.name}</h3>
          <h4>{person.title}</h4>
        </div>
      ))}
    </div>
  );
}
