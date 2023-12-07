import Header from "./Header";
import Searchbar from "./Searchbar";
import Employeelist from "./Employeelist";
import Employeepage from "./Employeepage";

export default function Homepage() {
  return (
    <div>
      <div>
        <Header />
        <Searchbar />
        <Employeelist />
      </div>
    </div>
  );
}
